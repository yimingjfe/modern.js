// @ts-nocheck
import path from 'path';
import { fs as fse } from '@modern-js/utils';

type EntryDocumentInfo = {
  entryName: string;
  documentFilePath: string;
};

export type DocumentChildCompilerOptions = {
  /** Absolute path to project root (app directory) */
  appDirectory: string;
  /** Absolute path to Modern.js internal directory for temp artifacts */
  internalDirectory: string;
  /** Entries that own a Document file */
  entries: EntryDocumentInfo[];
};

/**
 * Compile each entry's Document file via a Rspack child compiler to a Node-consumable CJS bundle.
 * Output file path (per entry): `${internalDirectory}/document/${entryName}/document.cjs.js`
 */
export class DocumentChildCompilerPlugin {
  name: string;
  options: DocumentChildCompilerOptions;

  constructor(options: DocumentChildCompilerOptions) {
    this.name = 'DocumentChildCompilerPlugin';
    this.options = options;
  }

  apply(compiler: any) {
    compiler.hooks.make.tapAsync(this.name, (compilation, done) => {
      const { entries, internalDirectory, appDirectory } = this.options;

      const rspack = (compiler && compiler.webpack) || (compiler as any);
      const EntryPlugin = rspack.EntryPlugin;
      const ExternalsPlugin = rspack.ExternalsPlugin;

      const compileOne = (
        info: EntryDocumentInfo,
      ): Promise<void> =>
        new Promise((resolve, reject) => {
          const outFileName = `document/${info.entryName}/document.cjs.js`;
          const child = (compilation as any).createChildCompiler(
            `${this.name}-${info.entryName}`,
            {
              filename: outFileName,
              library: { type: 'commonjs2' },
            },
          );

          // Inherit resolve/module to keep behavior consistent with main bundler
          child.options.target = 'node';
          child.options.context = compiler.options.context || appDirectory;
          child.options.resolve = compiler.options.resolve;
          child.options.resolveLoader = compiler.options.resolveLoader;
          child.options.module = compiler.options.module;
          child.options.snapshot = compiler.options.snapshot;

          // Externalize react runtime deps for Node require()
          new ExternalsPlugin('commonjs', {
            react: 'react',
            'react-dom': 'react-dom',
            'react/jsx-runtime': 'react/jsx-runtime',
          }).apply(child);

          new EntryPlugin(
            compiler.options.context || appDirectory,
            info.documentFilePath,
            'main',
          ).apply(child);

          child.runAsChild((err: Error | null, _entries: any, childCompilation: any) => {
            if (err) {
              return reject(err);
            }

            try {
              const asset = childCompilation.assets[outFileName];
              if (!asset) {
                return reject(
                  new Error(
                    `[${this.name}] Missing child asset ${outFileName} for entry ${info.entryName}`,
                  ),
                );
              }
              const code = typeof asset.source === 'function' ? asset.source() : asset.source;
              const emitPath = path.join(internalDirectory, outFileName);
              // Ensure directory exists and write synchronously to avoid race with Html template
              fse.outputFileSync(emitPath, code as any);
            } catch (e) {
              return reject(e as Error);
            }
            resolve();
          });
        });

      const work = entries.map(compileOne);
      Promise.all(work).then(() => done(), done);
    });
  }
}

export function getDocumentOutputPathByEntry(
  internalDirectory: string,
  entryName: string,
) {
  return path.join(internalDirectory, 'document', entryName, 'document.cjs.js');
}


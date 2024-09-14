import { NoSSR } from '@modern-js/runtime/ssr';

export default function Page() {
  return (
    <div>
      {/* <div>page111111</div> */}
      <NoSSR>
        <div>11111</div>
        <h1></h1>
      </NoSSR>
    </div>
  );
}

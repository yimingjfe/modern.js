import { bootstrap } from '@modern-js/runtime';

// 在 bootstrap 之前开发者什么都做不了的
// bootstrap 中也不能注册路由，因为在 createApp 阶段，router 就被初始化了，react-router 需要在初始化的时候就注入路由信息，然后做初始化
export default (App: any) => {
  setTimeout(() => {
    console.log('some async tasks');
    bootstrap(App, 'root');
  }, 400);
};

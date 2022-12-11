import { useParams } from '@modern-js/runtime/router';

const routes = [
  {
    path: '1',
    component: <div>1111111</div>,
  },
  {
    path: '2',
    component: <div>222222222</div>,
  },
];

const Page = () => {
  const params = useParams<{
    id: string;
  }>();
  const { id } = params;
  const component = routes.find(route => route.path === id)?.component;
  return component;
  return <div>item page, param is {params.id}</div>;
};

export default Page;

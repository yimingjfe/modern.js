import { useLoader } from '@modern-js/runtime';
import hello from 'bff-api-app/index';

const App = () => {
  const { data } = useLoader(async () => {
    const res = await hello();
    return res;
  });
  const { message = 'bff-express' } = data || {};
  return <div className="hello">{message}</div>;
};

export default App;

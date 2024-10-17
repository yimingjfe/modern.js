import 'server-only';
import { Counter } from './Counter';
import { getCountState } from './ServerState';
import './App.css';

const App = ({ name }: { name: string }) => {
  const countStateFromServer = getCountState();
  return (
    <div
      id="root"
      className="App"
      style={{ border: '3px red dashed', margin: '1em', padding: '1em' }}
    >
      <h1 data-testid="app-name">{name}</h1>
      <Counter />
      <div>countStateFromServer: {countStateFromServer}</div>
    </div>
  );
};

export default App;

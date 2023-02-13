import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Counter} from './components/Counter'
import {Login} from './components/Login'

function App() {
  return (
    <div className='container'>
      <h1 className='border-bottom border-info text-center'>My First React app</h1>
      <Counter />
      <Login />
    </div>
  );
}

export default App;

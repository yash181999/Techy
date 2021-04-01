import logo from './logo.svg';
import './App.css';
import Sidebar from './Views/Sidebar';
import Home from './Views/Home'

function App() {
  return (
   <div className='app'>
      <Sidebar />
      <Home/>
   </div>
  );
}

export default App;

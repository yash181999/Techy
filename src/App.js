import logo from './logo.svg';
import './App.css';
import Sidebar from './Views/Sidebar';
import Home from './Views/Home'
import Navbar from './Views/Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Dashboard from './Views/Dashboard'
import MyTasks from './Views/MyTasks';

function App() {
  return (
   <Router>
      <div className='app'>
       
      
       <Switch>

       <Route path="/dashboard">
            <Sidebar/>
            
            <Dashboard/>
          </Route> 

          <Route path="/mytasks">
            <Sidebar/>
            
            <MyTasks/>
          </Route> 


          <Route path="/"> 
            <Sidebar/>
            
            <Home/>
          </Route> 
          
          
       </Switch>   
       
      </div>
   </Router> 
   
  );
}

export default App;

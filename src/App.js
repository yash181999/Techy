import './App.css';
import Sidebar from './Views/Sidebar';
import Home from './Views/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Dashboard from './Views/Dashboard'
import MyTasks from './Views/MyTasks';
import Goals from './Views/Goals';
import Login from './Views/Login';
import Signup from './Views/Signup';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Teams from './Views/Teams';
import Team from './Views/Team';

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {  
    auth.onAuthStateChanged(authUser => {
       console.log('The User Is >>>' , authUser);

       if(authUser) {
          //the user is logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
       }else{
         console.log('logged out')
         dispatch({
          type: 'SET_USER',
          user: null,
         })
       }

    });
}, [])

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


         

          <Route path="/goals">
            <Sidebar/>
            <Goals/>
          </Route> 
          <Route path="/teams">
            <Sidebar/>
            <Teams/>
          </Route> 

          <Route path="/home"> 
            <Sidebar/>
            <Home/>
          </Route> 

          <Route path='/team'>
            <Sidebar/>
            <Team/>
          </Route>

         
          <Route path='/signup'>
            <Signup/>
          </Route>

         

          <Route path="/"> 
            <Login/>
          </Route> 

          
          
       </Switch>   
       
      </div>
   </Router> 
   
  );
}

export default App;

import { Fade, IconButton} from '@material-ui/core';
import { Add, CalendarViewDay, CheckCircleOutline, DateRange, MoreHoriz } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context';
import { auth, db } from '../firebase';
import { useStateValue } from '../StateProvider';
import Drawer from './Components/Drawer';
import Navbar from './Components/Navbar';
import TaskContainer from './Components/TaskContainer';
import './MyTasks.css'



function MyTasks() {

    const {isSidebarOpen, openSidebar} = useGlobalContext();
    const {showDrawer,setShowDrawer} = useGlobalContext();
    const domNode = useRef();
    const [{user},dispatch] = useStateValue();
    const [taskTypes, setTaskTypes] = useState([]);
   
   
   

  // showing and hiding the drawer..
    useEffect(() => {
       const handler =  (event) => {
            if(domNode.current && !domNode.current.contains(event.target)) {
                setShowDrawer(false);
            }
        }
        document.addEventListener('mousedown',handler);
        return () => {
            document.removeEventListener('mousedown',handler)
        }

       
    });

    useEffect(() => {
          getTaskTypesFromFireStore();
    },[user])


    const getTaskTypesFromFireStore = () =>{
           let tasks = [];
           if(user){
            db.collection("Users").doc(user.uid).onSnapshot((query) => {
                const data = query.data();
                tasks = data.tasktypes;
                setTaskTypes(tasks);
            }); 
           }

               

    }

    




  
   
    return (
        <div className={isSidebarOpen ? 'tasks-with-sidebar tasks': 'tasks'}>
             <Navbar title={'My Tasks'}  className='navbar'/>
              <div ref = {domNode}  >
              {
                
                showDrawer &&     
                    <Drawer/>

              } 
              </div>
             <div className= 'tasks-center'>
               
               {
                  taskTypes.map((val) => {
                    return  <TaskContainer key = {Math.random()} taskType = {val}></TaskContainer>
                  })
                 
               }
              
             </div>
        </div>
    )
}

export default MyTasks

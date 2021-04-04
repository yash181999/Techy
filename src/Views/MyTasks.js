import { Fade, IconButton} from '@material-ui/core';
import { Add, CalendarViewDay, CheckCircleOutline, DateRange, MoreHoriz } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context';
import Drawer from './Components/Drawer';
import Navbar from './Components/Navbar';
import TaskContainer from './Components/TaskContainer';
import './MyTasks.css'



function MyTasks() {

    const {isSidebarOpen, openSidebar} = useGlobalContext();
    const {showDrawer,setShowDrawer} = useGlobalContext();
    const domNode = useRef();


   

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
    })
    

  
   
    return (
        <div className={isSidebarOpen ? 'tasks-with-sidebar dashboard': 'tasks'}>
             <Navbar title={'My Tasks'}  className='navbar'/>
              <div ref = {domNode}  >
              {
                
                showDrawer &&     
                    <Drawer/>

              } 
              </div>
             <div className= 'tasks-center'>
               
               <TaskContainer/>
               <TaskContainer/>
               <TaskContainer/>
               <TaskContainer/>
               <TaskContainer/>
               <TaskContainer/>
             </div>
        </div>
    )
}

export default MyTasks

import { IconButton} from '@material-ui/core';
import { Add, CalendarViewDay, CheckCircleOutline, DateRange, MoreHoriz } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context';
import TempDrawer from './Components/Drawer';
import Navbar from './Components/Navbar';
import TaskContainer from './Components/TaskContainer';
import './MyTasks.css'

function MyTasks() {

    const {isSidebarOpen, openSidebar} = useGlobalContext();
    const {showDrawer,setShowDrawer} = useGlobalContext();
    const node = useRef();
    
    // useEffect(() =>{ 
        
    //     document.addEventListener('mousedown', handleClick);

    //     return () =>{
    //        document.removeEventListener('mousedown', handleClick);     
    //     }
        
        

    // },[showDrawer]);

    // const handleClick = (e) => {
    //     if(node.current.matches(e.target)) {
    //         return;
    //     }
    //     setShowDrawer(false);
    // }



   
    return (
        <div className={isSidebarOpen ? 'tasks-with-sidebar dashboard': 'tasks'}>
             <Navbar title={'My Tasks'}  className='navbar'/>
              <div >
              {
                showDrawer &&     
                    <div ref= {node} className= 'drawer'>
                    hello dud
                    </div>

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

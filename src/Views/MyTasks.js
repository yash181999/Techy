import { Fade, IconButton} from '@material-ui/core';
import { Add, CalendarViewDay, CheckCircleOutline, DateRange, MoreHoriz } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context';
import { db } from '../firebase';
import Drawer from './Components/Drawer';
import Navbar from './Components/Navbar';
import TaskContainer from './Components/TaskContainer';
import './MyTasks.css'



function MyTasks() {

    const {isSidebarOpen, openSidebar} = useGlobalContext();
    const {showDrawer,setShowDrawer} = useGlobalContext();
    const domNode = useRef();
    const {uId} = useGlobalContext();
    const [taskTypes,setTaskTypes] = useState([]);
   

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
        getTasksFromFirestore();
    },);



    const getTasksFromFirestore = async (e) => {
        try{
            
          await  db.collection("Users").doc(uId).onSnapshot(querySnapShot => {
                const data = querySnapShot.data();
                setTaskTypes(data.tasktypes);   
                console.log(data.tasktypes);
            })
        }
        catch (e){
           console.log(e)
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
                  taskTypes.map((val,i) => {
                    return  <TaskContainer index = {i} taskType = {val}></TaskContainer>
                  })
                 
               }
              
             </div>
        </div>
    )
}

export default MyTasks

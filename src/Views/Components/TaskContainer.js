import { IconButton} from '@material-ui/core';
import { Add, CalendarViewDay, CheckCircleOutline, DateRangeSharp, MoreHoriz, RowingSharp } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../../context';
import './TaskContainer.css'
import {DateRange, DateRangePicker} from 'react-date-range';
import TaskListItem from './TaskListItem';
import { db } from '../../firebase';




function TaskContainer({taskType,index}) {

    const [showInfo, setShowInfo] = useState(false);
    const [taskTitle, setTaskTitle] = useState(taskType);
    const [titleClicked, setTitleClicked] = useState(false);
    const [cardCounter, setCardCounter]  = useState(1);
    const {uId} = useGlobalContext();
   
    
  


    




    return (
        <div className='task-container'>
                   {/* title */}
                   <div className = 'taskTitle-container'>
                      <div className='task-title' onClick = {()=>setTitleClicked(true)}>
                        {taskType}
                      </div> 

                       
                    

                      <IconButton onClick={()=>setCardCounter(cardCounter+1)} className='task-addBtn'>
                        <Add></Add>
                      </IconButton> 

                      <IconButton  className='task-moreBtn'>
                        <MoreHoriz/>
                      </IconButton> 
                   </div>
                 
                   {/* taskList */}

                   {
                      [...Array(cardCounter)].map((e,i) => {
                         return  <TaskListItem ></TaskListItem>
                        
                   })
                 }

                
                
               </div>
   
    )
}

export default TaskContainer

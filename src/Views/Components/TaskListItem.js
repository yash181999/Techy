import React, { useEffect, useRef, useState } from 'react'
import { Add, CalendarViewDay, CheckCircleOutline, DateRangeSharp, MoreHoriz } from '@material-ui/icons';
import { useGlobalContext } from '../../context';
import './TaskListItem.css'
import { IconButton } from '@material-ui/core';
import { DateRange} from 'react-date-range';
import { useStateValue } from '../../StateProvider';
import { db } from '../../firebase';

let useClickOutside = (handler) => {
    const domNode  = useRef();
    useEffect(() => {
        let maybeHandler = (e) => {
            if(domNode.current && !domNode.current.contains(e.target)) {

                handler();
            }
        }

        document.addEventListener('mousedown', maybeHandler);

        return () => {
            document.removeEventListener('mousedown', maybeHandler);
        }
    })

    return domNode;

}

function TaskListItem({ taskType,docId,title,assigne}) {
    const [showInfo, setShowInfo] = useState(false);
    const [showDatePicker,setShowDatePicker] = useState(false);
    const [startDate,setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [{user}]  = useStateValue();

    const {showDrawer, setShowDrawer} = useGlobalContext();

    const {drawerData, setDrawerData} = useGlobalContext();


   const selectionRange = {
       startDate :startDate,
       endDate :endDate,
       key : 'selection'
   }

   function handleSelect(ranges) {
      
       setStartDate(startDate);
       setEndDate(endDate);
   }
    




    const handleMouseHover = (e) => {
       e.preventDefault();
       setShowInfo(true);
       
    }

    const handelMouseLeave = (e) => {
        setShowInfo(false);
        setShowDatePicker(false);
    }

  

    const datePickerNode = useClickOutside(() => {
        setShowDatePicker(false);
    })


    

    const handleDatePicker = (e) => {
        e.stopPropagation();
        
        setShowDatePicker(true);

        
    }
    const markDone = async(e) => {
        e.stopPropagation();


        db.collection('Users').doc(user.uid).collection(`Task${taskType}`).doc(docId).delete();
        console.log(docId);
        await db.collection('Users').doc(user.uid).collection(`TaskDone`).doc().set({
                'title'  : title,
                'assigne' : assigne,
                'time' : Date.now(),
        });       
    }


    const openDrawer = () => {
        setShowDrawer(true);
        setDrawerData({
             docId : docId,
             taskType : taskType,
                  
        });
    }


    return (
        <div className='task' 
                   onClick={openDrawer} 
                   onMouseOver={handleMouseHover} 
                   onMouseLeave={handelMouseLeave}>
                     
                      <div className = 'task-detail'>
                         { taskType !== 'Done' && <IconButton onClick = {markDone}>
                            <CheckCircleOutline size='small'/>
                        </IconButton>}
                        <p>{title}</p>
                      </div>

                     
                   </div>
    )
}

export default TaskListItem

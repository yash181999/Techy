import React, { useEffect, useRef, useState } from 'react'
import { Add, CalendarViewDay, CheckCircleOutline, DateRangeSharp, MoreHoriz } from '@material-ui/icons';
import { useGlobalContext } from '../../context';
import './TaskListItem.css'
import { IconButton } from '@material-ui/core';
import { DateRange} from 'react-date-range';

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

function TaskListItem() {
    const [showInfo, setShowInfo] = useState(false);
    const [showDatePicker,setShowDatePicker] = useState(false);
    const [startDate,setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const {showDrawer, setShowDrawer} = useGlobalContext();


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

    return (
        <div className='task' 
                   onClick={() => setShowDrawer(true)} 
                   onMouseOver={handleMouseHover} 
                   onMouseLeave={handelMouseLeave}>
                     
                      <div className = 'task-detail'>
                        <IconButton>
                            <CheckCircleOutline size='small'/>
                        </IconButton>
                        <p>Hello what do you want to do</p>
                      </div>

                     
                      {
                          showInfo && 
                          <div class='task-infoContainer'>
                            <div class='task-infoBtn'>
                                <IconButton size = 'small'>
                                    <MoreHoriz/>
                                </IconButton>  
                            </div>    

                            <div className = 'task-infoBottom'>
                              <IconButton onClick={handleDatePicker}>
                                  <DateRangeSharp size='small'/>
                              </IconButton>  
                            </div>
                            
                            <div onClick = {(e) => e.stopPropagation()}  useRef = {datePickerNode} className='show-date-picker'>
                       
                            {
                            showDatePicker &&   
                                    <DateRange ranges={
                                    [selectionRange]
                                } onChange = {handleSelect}></DateRange>
                                
                            }
                            </div> 
                                
                         </div>
                      }
                   </div>
    )
}

export default TaskListItem

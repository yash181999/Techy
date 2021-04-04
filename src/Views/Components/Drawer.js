import { Button } from '@material-ui/core'
import { CalendarViewDayRounded, DateRangeSharp, Done } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import './Drawer.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRange, DateRangePicker} from 'react-date-range';


function Drawer() {

     const [startDate,setStartDate] = useState((new Date()).toDateString());
     const [endDate, setEndDate] = useState((new Date()).toDateString());
     const [showDatePicker,setShowDatePicker] = useState(false);
     const domNode = useRef();

    const selectionRange = {
        startDate :new Date(),
        endDate :new Date(),
        key : 'selection'
    }

    function handleSelect(ranges) {
        
        setStartDate(ranges.selection.startDate.toDateString());
        setEndDate(ranges.selection.endDate.toDateString());
    }
    


   

    // showing and hiding the drawer..
      useEffect(() => {
         const handler =  (event) => {
              if(domNode.current && !domNode.current.contains(event.target)) {
                  setShowDatePicker(false);
              }
          }
          document.addEventListener('mousedown',handler);
          return () => {
              document.removeEventListener('mousedown',handler)
          }
      })



    return (
        <div  className= 'drawer'>
           <Button className='markComplete-btn'><Done  size='small' />Mark Complete</Button>
          <div className ='task-titleContainer'>
              <input type = 'text' className='task-titleInput' value = 'Make my project'>
              
              </input>
          </div> 
          <div className='task-info'>
             <div className ='infoTitle'>
                <div className='title-head'>
                    Assigne
                </div>
                <div className='title-head'>
                    Due Date
                </div>
                <div className='title-head'>
                    Description
                </div>
             </div>

             <div className ='info'>
                <div className='info-desc'>
                    Assigne
                </div>
                <div className='info-desc'>
                    <div onClick={() => setShowDatePicker(true)} className='date-picker'>
                        <DateRangeSharp  size='small'/> 
                        <span>{` ${startDate} - `}</span> <span>{` ${endDate} - `}</span> 
                        <div ref={domNode} className='show-picker'>
                       
                            {
                            showDatePicker &&   
                                    <DateRange ranges={
                                    [selectionRange]
                                } onChange = {handleSelect}></DateRange>
                                
                            }
                        </div> 
                    </div>
                </div>
                <div className='info-desc'>
                    Description
                </div>
             </div>

             
          </div>
        </div>
    )
}

export default Drawer

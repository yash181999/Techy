import { IconButton} from '@material-ui/core';
import { Add, CalendarViewDay, CheckCircleOutline, DateRange, MoreHoriz } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../../context';
import './TaskContainer.css'


let useClickOutside = (handler) => {
    const domNode  = useRef();
    useEffect(() => {
        let maybeHandler = (e) => {
            if(!domNode.current.contains(e.target)) {

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



function TaskContainer() {

    const [showInfo, setShowInfo] = useState(false);
    const [taskTitle, setTaskTitle] = useState('To Do');
    const [titleClicked, setTitleClicked] = useState(false);
    const {showDrawer, setShowDrawer} = useGlobalContext();
    




    const handleMouseHover = () => {
       setShowInfo(true);
    }

    const domNode =  useClickOutside(() => {
        setTitleClicked(false);
    })


    







    return (
        <div className='task-container'>
                   {/* title */}
                   <div className = 'taskTitle-container'>
                     { !titleClicked && <div className='task-title' onClick = {()=>setTitleClicked(true)}>
                        {taskTitle}
                      </div> }

                       <div ref = {domNode} className='taskTitle-edit'>
                         
                        { titleClicked && <form className='task-titleInput'  onSubmit={()=>setTitleClicked(false)}>
                         <input  type='text' onChange = {(e)=>setTaskTitle(e.target.value)} value = {taskTitle}  />
                         </form>  }
                         
                         
                      </div> 
                    

                      <IconButton className='task-addBtn'>
                        <Add></Add>
                      </IconButton> 

                      <IconButton  className='task-moreBtn'>
                        <MoreHoriz/>
                      </IconButton> 
                   </div>
                 
                   {/* taskList */}

                   <div className='task' onClick={()=>console.log('showdrawer')} onMouseOver={handleMouseHover} onMouseLeave={() => setShowInfo(false)}>
                     
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
                              <IconButton>
                                  <DateRange size='small'/>
                              </IconButton>  
                            </div>
                                
                         </div>
                      }
                   </div>


               </div>
   
    )
}

export default TaskContainer

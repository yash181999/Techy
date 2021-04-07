import { Button, IconButton, Input, TextField} from '@material-ui/core';
import { Add, CalendarViewDay, CheckCircleOutline, Close, DateRangeSharp, MoreHoriz, RowingSharp } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../../context';
import './TaskContainer.css'
import {DateRange, DateRangePicker} from 'react-date-range';
import TaskListItem from './TaskListItem';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import TaskAddModal from './TaskAddModal';
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    
    position: 'relative',
    backgroundColor : 'white',
    boxShadow :  '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius : '10px',
    display : 'flex',
    padding : '10px',
    width: '40%',
    top                   : '50%',
    left                  : '55%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


function TaskContainer({taskType,index}) {

    const [showInfo, setShowInfo] = useState(false);
    const [taskTitle, setTaskTitle] = useState(taskType);
    const [titleClicked, setTitleClicked] = useState(false);
    const [cardCounter, setCardCounter]  = useState(1);
    const [{user}]  = useStateValue();
    const [snapShot,setSnapShot] = useState([]);  
    const [openTaskAddModal, setOpenTaskAddModal] = useState(false);
    const [taskValue, setTaskValue] = useState('');
    const [assigne, setAssigne] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');
   
    
    useEffect(() => {
       getAllTasks();
    },[])

    const getAllTasks = () => {
        db.collection('Users').doc(user.uid).collection(`Task${taskType}`).onSnapshot((querySnapshot) => {
             setSnapShot(querySnapshot.docs);
        })
    }
  

    const addTask = async() => {
       try{
        if(taskValue != '') {
          await db.collection('Users').doc(user.uid).collection(`Task${taskType}`).doc().set({
                'title' : taskValue,
                'assigne' : assigne,
                'time' : Date.now(),
                 'dueDate'  : dueDate,
                 description : description,
          });
        }  
       

        setOpenTaskAddModal(false);
        setTaskValue('');
        setAssigne('');

       }catch(e) {
          console.log(e);
       }
    }


    




    return (
        <div className='task-container'>
                  {/* {modal} */}
                  <ReactModal onRequestClose = {() => setOpenTaskAddModal(false)}  style={customStyles} isOpen = {openTaskAddModal}>
                    <div style = {{color : 'black' , width : '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>  
                      <h3>Add Task</h3>
                      <IconButton style = {{cursor : 'grab', }} onClick = {()=>setOpenTaskAddModal(false)}>
                      <Close ></Close>
                      </IconButton>
                     
                    </div>
                   
                      <div style={{height : '0px', border : '0.1px solid gray', marginTop: '5px'}}></div>

                      <div style={{marginTop : '10px'}}>
                        <input type =  'text' placeholder = 'Task' value = {taskValue} onChange = {(e)=>setTaskValue(e.target.value)}  style={{border: '1px solid', height: '30px', width : '98%', position : 'relative', fontSize :' 16px',borderRadius:'3px', outline:'none',}}></input>
                          
                        <input type =  'text' value = {assigne} onChange = {(e)=>setAssigne(e.target.value)} placeholder = 'Assigne'  style={{border: '1px solid', marginTop: '10px', height: '30px', width : '98%', fontSize :' 16px', position : 'relative', borderRadius:'3px', outline:'none',}}></input>

                        <input type =  'date' value = {dueDate} onChange = {(e)=>setDueDate(e.target.value)} placeholder = 'Due Date'  style={{border: '1px solid', marginTop: '10px', height: '30px', width : '98%', fontSize :' 16px', position : 'relative', borderRadius:'3px', outline:'none',}}></input>

                        <input type =  'text' value = {description} onChange = {(e)=>setDescription(e.target.value)} placeholder = 'Description'  style={{border: '1px solid', marginTop: '10px', height: '30px', width : '98%', fontSize :' 16px', position : 'relative', borderRadius:'3px', outline:'none',}}></input>

                        <Button style = {{backgroundColor  : 'orange', color : 'white' , width : '80%' , marginLeft:'10%',marginTop : '10px'}}  onClick = {addTask} >Submit</Button>  

                      </div>
                      

                    </div>
              
                  </ReactModal>

                   {/* title */}
                   <div className = 'taskTitle-container'>
                      <div className='task-title' onClick = {()=>setTitleClicked(true)}>
                        {taskType}
                      </div> 

                       
                    

                      <IconButton onClick={()=>setOpenTaskAddModal(true)} className='task-addBtn'>
                        <Add></Add>
                      </IconButton> 

                      
                      


                      <IconButton  className='task-moreBtn'>
                        <MoreHoriz/>
                      </IconButton> 
                   </div>
                 
                   {/* taskList */}

                   {

                          snapShot.map((val) => {
                             return val != null &&  <TaskListItem key={val.id} taskType  = {taskType} docId = {val.id} title={val.data().title} assigne = {val.data().assigne}></TaskListItem>
                          })

                   }

                
                
               </div>
   
    )
}

export default TaskContainer




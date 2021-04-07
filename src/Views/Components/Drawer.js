import { Button } from '@material-ui/core'
import { CalendarViewDayRounded, DateRangeSharp, Done } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import './Drawer.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRange, DateRangePicker} from 'react-date-range';
import { useGlobalContext } from '../../context';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { Shimmer } from 'react-shimmer';


function Drawer() {

  
     const {drawerData} = useGlobalContext();
     
     const [title, setTitle]  = useState('none');
     const [dueDate, setDueDate]  = useState('none');
     const [description, setDescription]  = useState('none');
     
     const [assigne, setAssigne] = useState('none');
     const [{user}] = useStateValue();
     const {setShowDrawer} = useGlobalContext();

     const [loading, setLoading] = useState(true);

    // const selectionRange = {
    //     startDate :new Date(),
    //     endDate :new Date(),
    //     key : 'selection'
    // }

    // function handleSelect(ranges) {
        
    //     setStartDate(ranges.selection.startDate.toDateString());
    //     setEndDate(ranges.selection.endDate.toDateString());
    // }
    


   

    // // showing and hiding the drawer..
    //   useEffect(() => {
    //      const handler =  (event) => {
    //           if(domNode.current && !domNode.current.contains(event.target)) {
    //               setShowDatePicker(false);
    //           }
    //       }
    //       document.addEventListener('mousedown',handler);
    //       return () => {
    //           document.removeEventListener('mousedown',handler)
    //       }
    //   })

      useEffect(() => {
             getData();
      },[]);


      const getData = async() => {
         setLoading(true); 
         const doc =   await db.collection('Users').doc(user.uid).
          collection(`Task${drawerData.taskType}`).doc(drawerData.docId).get();

          doc.data().title &&  setTitle(doc.data().title);
          doc.data().description && setDescription(doc.data().description);
           
           
          doc.data().dueDate &&  setDueDate(doc.data().dueDate);
          doc.data().assigne && setAssigne(doc.data().assigne);
          setLoading(false); 
           

      }


      const markDone = async(e) => {

          await db.collection('Users').doc(user.uid).
          collection('TaskDone').doc().set({
              title : title,
              description : description,
              dueDate: dueDate,
              assigne : assigne,
              time: Date.now(),


          });


          await db.collection('Users').doc(user.uid).
          collection(`Task${drawerData.taskType}`).doc(drawerData.docId).delete();

          setShowDrawer(false);



      } 

      const markDoing = async(e) => {

        await db.collection('Users').doc(user.uid).
        collection('TaskDoing').doc().set({
            title : title,
            description : description,
            dueDate: dueDate,
            assigne : assigne,
            time: Date.now(),


        });


        await db.collection('Users').doc(user.uid).
        collection(`Task${drawerData.taskType}`).doc(drawerData.docId).delete();

        setShowDrawer(false);

    } 


    const deleteTask = async(e) => {
        e.preventDefault();


        await db.collection('Users').doc(user.uid).
        collection(`Task${drawerData.taskType}`).doc(drawerData.docId).delete();

        setShowDrawer(false);

    } 

    const updateTask = async() => {
        setLoading(true);
        await db.collection('Users').doc(user.uid).
        collection(`Task${drawerData.taskType}`).doc(drawerData.docId).update({
            title : title,
            description : description,
            dueDate: dueDate,
            assigne : assigne,
            time: Date.now(),
        });
        setLoading(false);
        setShowDrawer(false);
    }
    



    return (
       <div  className= 'drawer'>


        { loading ? <Shimmer height = '100%' width  = '100%'></Shimmer> :   <div>
          <div className = 'drawer-btn'>
           { drawerData.taskType === 'Done' && <Button onClick = {deleteTask}>Delete</Button>}

           { drawerData.taskType !== 'Done' && <Button onClick = {markDone}>Mark Done</Button>}
           { drawerData.taskType !== 'Doing' && <Button onClick = {markDoing}>Mark Doing</Button>}
           </div>
           
          <div className ='task-titleContainer'>
              <label>
                  Task Title
              </label>
              <input type = 'text' onChange = {(e) => setTitle(e.target.value) } className='task-titleInput' value = {title}>
              
              </input>
          </div> 

          
          <div className = 'task-info-container' >
             
             <label>
                 Assined by
             </label>
             <input onChange = {(e) => setAssigne(e.target.value)} type ='text' value = {assigne}></input>

          </div>


            <div className = 'task-info-container' >
                <label>
                    Due date
                </label>
                <input onChange = {(e) => setDueDate(e.target.value)} value = {dueDate} type='date'></input>
            </div>
            
            <div className = 'task-info-container' >
               
                <label>
                    Task Description
                </label>
                <input onChange = {(e) => setDescription(e.target.value)} value = {description} type='text'></input>

            </div>

            <div className = 'task-info-container' >

              <Button onClick = {updateTask}>Submit</Button>   
            

           </div>
          </div>
}

          



         

            

             
          </div>
       
    )
}

export default Drawer

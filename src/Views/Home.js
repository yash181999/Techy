
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import { useGlobalContext } from '../context'
import Navbar from './Components/Navbar'
import { Add, ArrowDropDown, ArrowLeft, ArrowRight, Close } from '@material-ui/icons'
import { Button, IconButton } from '@material-ui/core'
import { auth, db } from '../firebase'
import { useStateValue } from '../StateProvider'
import ReactModal from 'react-modal'
import { customStyles, modalBtnStyle, modalInputStyle } from './Components/TaskContainer'






function Home() {

    const {isSidebarOpen, openSidebar} = useGlobalContext();

    const [userName, setUserName] = useState(null);
    
    const [openProjectModal,setOpenProjectModal] = useState(false);
    

    const [{user}] = useStateValue();

    const [projectName, setProjectName] = useState();
    const [team, setTeam]  = useState();
    const [projectDesc, setProjectDesc] = useState();
    const [projectDueDate, setProjectDueDate] = useState();
    

    useEffect(() => {
        
        if(user!=null){
            db.collection('Users').doc(user.uid).onSnapshot((val) => {
               setUserName(val.data().name)
            })
        }


    }, [user]);

    const addProject = (e) => {
         setOpenProjectModal(false);     
    } 



    
    return (
        <div className={isSidebarOpen ? 'home-with-sidebar home': 'home'}>
       <Navbar title={'Home'} />
       <ReactModal onRequestClose = {() => setOpenProjectModal(false)}  style={customStyles} isOpen = {openProjectModal}>
                    <div style = {{color : 'black' , width : '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>  
                      <h3>Add Project</h3>
                      <IconButton style = {{cursor : 'grab', }} onClick = {()=>setOpenProjectModal(false)}>
                      <Close ></Close>
                      </IconButton>
                     
                    </div>
                   
                      <div style={{height : '0px', border : '0.1px solid gray', marginTop: '5px'}}></div>

                      <div style={{marginTop : '10px'}}>

                          <input type =  'text' placeholder = 'Project Name' value = {projectName} onChange = {(e)=>setProjectName(e.target.value)}  style={modalInputStyle}></input>
                          
                          <input type =  'date' value = {projectDueDate} onChange = {(e)=>setProjectDueDate(e.target.value)} placeholder = 'Due Date'  style={modalInputStyle}></input>
  
                          <textarea type =  'text' value = {projectDesc} onChange = {(e)=>setProjectDesc(e.target.value)} placeholder = 'Project Description'  style={modalInputStyle}></textarea>
  
                       
                          <Button onClick = {addProject} style = {modalBtnStyle}>Submit</Button>  

                      </div>
                      

                    </div>
              
                  </ReactModal>

           <div className='welcomeNote-container'>
               {
                   userName != null && <div className ='welcome-note'>Welcome {userName}</div> 
               }
           </div>
        <div className='home-centerContent'>

          

            <div className='home-dropList'>
                <div className='home-dropList-headLeft'>
                    <IconButton>
                        <ArrowRight/>  
                    </IconButton>
                    <h3 >Tasks Due Soon</h3>
                </div> 

                <div className='home-dropList-headRight'>
                     <h4>See all my tasks</h4>
                </div> 
              
            
            </div>
            <div className='home-divider'></div>
            <div className='taskDueSoon'>
              <h6>No tasks due soon</h6>  
            </div>

            <div className='home-dropList'>
                <div className='home-dropList-headLeft'>
                    <IconButton>
                        <ArrowRight/>  
                    </IconButton>
                    <h3 >Recent Projects</h3>
                </div> 
            </div>

            <div className='home-divider'></div>

            <div className='recent-projects'>
               <div onClick = {() => setOpenProjectModal(true)} className='add-project'>
                  <Add></Add>
               </div>
            </div>
        </div>       
      </div>
    )
}

export default Home

import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../logo.png'
import {  IconButton} from '@material-ui/core'
import { useGlobalContext } from '../context'
import { AllOut, AllOutSharp, CheckCircle, Dashboard, Home, Inbox , Menu} from '@material-ui/icons'
import { Link } from 'react-router-dom'
function Sidebar() {

    const {isSidebarOpen, closeSidebar} = useGlobalContext();

  

    return (
        <div className={`${isSidebarOpen ? 'sidebar sidebar-show' : 'sidebar'}`}>

          <div className='sidebar-top'>

         
            <div className='sidebar-logo-container'>
             <img src={logo} alt='logo' className='sidebar-logo'></img>    
           
            <IconButton onClick={closeSidebar} >
            <Menu className='sidebar-menu-icon'/>
            </IconButton>
            </div>

            
            <div className='sidebar-btn-container'>
              <Link to='/'>
                <button className='sidebar-btn'>
                  <Home className='sidebar-btn-icon' fontSize = 'small'/>
                   <p className='sidebar-btn-content'>Home</p>
                 </button>
              </Link>
               

              <Link to={'/dashboard'} >
               <button className='sidebar-btn' >
                   <Dashboard className='sidebar-btn-icon'  fontSize = 'small'/>
                   <p className='sidebar-btn-content'>DashBoard</p>
                </button>
              </Link>      
               
              <Link to={'/mytasks'} >
                <button className='sidebar-btn'>
                  <CheckCircle fontSize = 'small'/>
                   <p className='sidebar-btn-content'>My Tasks</p>
                </button>
              </Link >

                <button className='sidebar-btn'>
                  <Inbox fontSize = 'small'/>
                   <p className='sidebar-btn-content'>Inbox</p>
                </button>

                <button className='sidebar-btn'>
                   <AllOutSharp fontSize = 'small'/> 
                   <p className='sidebar-btn-content'>My Goals</p>
                </button>
                
            </div>

            <div className='sidebar-divider'></div>
          </div>

           <div className='sidebar-middle'>
            middle
           </div>

           

           <div className='sidebar-bottom'>
            <button className='sidebar-btn-bottom'>
                  Invite teammates
              </button>

              <button className='sidebar-btn-bottom'>
                  Invite teammates
              </button>
           </div>
           

           

        </div>
    )
}

export default Sidebar

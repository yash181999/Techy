import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../logo.png'
import {  IconButton} from '@material-ui/core'
import { useGlobalContext } from '../context'
import { AllOut, AllOutSharp, CheckCircle, Dashboard, Home, Inbox , Menu} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import sidebarData from '../sidebarData'

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
              
              {
                sidebarData.map((data)=> {
                 return ( <Link to={data.link} >
                  <button id = {window.location.pathname === data.link ? 'active' : ''} className='sidebar-btn' >
                      {data.icon}
                      <p className='sidebar-btn-content'>{data.name}</p>
                   </button>
                 </Link>)   
                })
              }
                
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

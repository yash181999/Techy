import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../logo.png'
import { AllOut, CheckCircleOutlineSharp, DashboardOutlined,Menu, HomeOutlined, NotificationsNone, NotificationsOutlined } from '@material-ui/icons'
import {  IconButton } from '@material-ui/core'
import { useGlobalContext } from '../context'
function Sidebar() {

    const {isSidebarOpen, closeSidebar} = useGlobalContext();

  

    return (
        <div className={`${isSidebarOpen ? 'sidebar sidebar-show' : 'sidebar'}`}>
            <div className='sidebar-logo-container'>
             <img src={logo} alt='logo' className='sidebar-logo'></img>    
           
            <IconButton onClick={closeSidebar} >
            <Menu className='sidebar-menu-icon'/>
            </IconButton>
            </div>


            <div className='sidebar-btn-container'>
                <button className='sidebar-btn'>
                  <HomeOutlined className='sidebar-btn-icon'/>
                   <p className='sidebar-btn-content'>Home</p>
                </button>

                <button className='sidebar-btn'>
                   <DashboardOutlined className='sidebar-btn-icon'/>
                   <p className='sidebar-btn-content'>DashBoard</p>
                </button>

                <button className='sidebar-btn'>
                  <CheckCircleOutlineSharp/>
                   <p className='sidebar-btn-content'>My Tasks</p>
                </button>

                <button className='sidebar-btn'>
                  <NotificationsOutlined/>
                   <p className='sidebar-btn-content'>Inbox</p>
                </button>

                <button className='sidebar-btn'>
                  <AllOut/>
                   <p className='sidebar-btn-content'>My Goals</p>
                </button>
                
            </div>

            <div className='sidebar-divider'></div>

           

            <button className='sidebar-btn-bottom'>
                Invite teammates
            </button>

            <button className='sidebar-btn-bottom'>
                Invite teammates
            </button>

           

        </div>
    )
}

export default Sidebar

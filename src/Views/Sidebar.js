import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../logo.png'
import {  Button, IconButton} from '@material-ui/core'
import { useGlobalContext } from '../context'
import { Add, ArrowDropDownRounded, ArrowDropUp, ArrowRight, ArrowUpward, Close, Menu} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import sidebarData from '../sidebarData'
import Dropdown from './Components/Dropdown'

function Sidebar() {

    const {isSidebarOpen, closeSidebar} = useGlobalContext();
    const {showTeamList, setShowTeamList} = useState();
 
    

    

  

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
                 <button onClick = {() => setShowTeamList(!showTeamList)} className='sidebar-btn-team'>
                   Teams 
                   { showTeamList && <ArrowDropDownRounded></ArrowDropDownRounded> }
                   {!showTeamList && <ArrowDropUp/>}
                 </button>

                 {

                   showTeamList && 
                        
                       <div className = 'sidebar-teamList'>

                          


                       </div>



                 }

                  

           </div>

           

           <div className='sidebar-bottom'>
            
              <button className='sidebar-btn-bottom'>
                  Invite teammates
              </button>
           </div>
           

           

        </div>
    )
}

export default Sidebar

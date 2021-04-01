import React from 'react'
import { Avatar, Button, IconButton, Toolbar } from '@material-ui/core'
import { Add, Menu, Search } from '@material-ui/icons'


import './Navbar.css'
import { useGlobalContext } from '../../context';

function Navbar() {
    const {isSidebarOpen, openSidebar} = useGlobalContext();
    return (
        <Toolbar className='navbar'>

        <div className='nav-leftContainer'>
        {  
           !isSidebarOpen && <IconButton onClick={openSidebar}>
           <Menu/>
          </IconButton>
        }
        <h2 className='nav-heading'>Home</h2>
     
        </div>   
        

       <div class='nav-rightContainer'>
         <div className='nav-search'>
             <div >
             <Search className='nav-searchIcon' />
             </div>
             <input className='nav-searchInput'/>
         </div>
         <Button>
             <Add/>
             <span>Add</span>
         </Button>
         <div className='nav-avatar'><span>YM</span></div>
       </div>
        

       
       

       </Toolbar>
    )
}

export default Navbar

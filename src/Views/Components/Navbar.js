import React, { useState } from 'react'
import { Avatar, Button, IconButton, Toolbar } from '@material-ui/core'
import { Add, Menu, Search } from '@material-ui/icons'


import './Navbar.css'
import { useGlobalContext } from '../../context';
import Dropdown from './Dropdown';

function Navbar() {
    const {isSidebarOpen, openSidebar} = useGlobalContext();

    const {searchClicked, setSearchClicked}  = useGlobalContext();

    const {showAddDropdown, hideAddDropdown, addDropdown} = useGlobalContext();

   

    return (
        <Toolbar className='navbar' >

        <div className='nav-leftContainer'>
        {  
           !isSidebarOpen && <IconButton onClick={openSidebar}>
           <Menu/>
          </IconButton>
        }
        <h2 className='nav-heading'>Home</h2>
     
        </div>   
        

       <div class='nav-rightContainer'>
         <div className={searchClicked ? 'nav-search nav-searchClick' : 'nav-search'} 
         onClick={()=>setSearchClicked(!searchClicked)}>
             <div >
             <Search className='nav-searchIcon' />
             </div>
             <input className='nav-searchInput'/>
         </div>
        
         <Button onClick={addDropdown ? hideAddDropdown : showAddDropdown}>
             <Add/>
             <span>Add</span>

             {addDropdown && <Dropdown />}
             
         </Button>
         
        
         <div className='nav-avatar'><span>YM</span></div>
       </div>
        
        

       
       

       </Toolbar>
    )
}

export default Navbar

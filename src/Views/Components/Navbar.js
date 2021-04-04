import React, { useEffect, useRef, useState } from 'react'
import { Avatar, Button, IconButton, Toolbar } from '@material-ui/core'
import { Add, Menu, Search } from '@material-ui/icons'


import './Navbar.css'
import { useGlobalContext } from '../../context';
import Dropdown from './Dropdown';

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

function Navbar({title}) {
    const {isSidebarOpen, openSidebar} = useGlobalContext();

    const {searchClicked, setSearchClicked}  = useGlobalContext();

    const {showAddDropdown, hideAddDropdown, addDropdown} = useGlobalContext();

    
    const domNode =  useClickOutside(() => {
         hideAddDropdown();
         setSearchClicked(false);
    })


    return (
        <div className={'navbar'} >

        <div className='nav-leftContainer'>
        {  
           !isSidebarOpen && <IconButton onClick={openSidebar}>
           <Menu/>
          </IconButton>
        }
        <h2 className='nav-heading'>{title}</h2>
     
        </div>   

        <div class='nav-center'>

        </div>

        
        

       <div class='nav-rightContainer'>

       <div ref = {domNode} className={searchClicked ? 'nav-search nav-searchClick' : 'nav-search'} 
         onClick={()=>setSearchClicked(!searchClicked)}>
             <div >
             <Search  className='nav-searchIcon' />
             </div>
             <input className='nav-searchInput'/>
         </div>
         
        
         <Button ref= {domNode} onClick={addDropdown ? hideAddDropdown : showAddDropdown}>
             <Add/>
             <span>Add</span>

             {addDropdown && <Dropdown/>}
             
         </Button>
         
        
         <div className='nav-avatar'><span>YM</span></div>
       </div>
        
        

       
       

       </div>
    )
}

export default Navbar

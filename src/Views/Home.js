
import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import { useGlobalContext } from '../context'
import Navbar from './Components/Navbar'
import { ArrowDropDown, ArrowLeft, ArrowRight } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

function Home() {

    const {isSidebarOpen, openSidebar} = useGlobalContext();


    return (
        <div className={isSidebarOpen ? 'home-with-sidebar home': 'home'}>
       <Navbar title={'Home'} />
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
               <div className='add-project'>
                  <p>Add A Project</p>
               </div>
            </div>
        </div>       
      </div>
    )
}

export default Home

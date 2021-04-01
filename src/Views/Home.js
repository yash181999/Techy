
import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import { useGlobalContext } from '../context'
import Navbar from './Components/Navbar'

function Home() {

    const {isSidebarOpen, openSidebar} = useGlobalContext();


    return (
        <div className={isSidebarOpen ? 'home-with-sidebar home': 'home'}>


        <Navbar/>

          
         
           
        </div>
    )
}

export default Home

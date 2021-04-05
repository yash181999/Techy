import React from 'react'
import { useGlobalContext } from '../context';
import Navbar from './Components/Navbar';
import './Goals.css'

function Goals() {
    const {isSidebarOpen, openSidebar} = useGlobalContext();
    return (
        <div className={isSidebarOpen ? 'goals-with-sidebar dashboard': 'goals'}>
            <Navbar title={'Goals'}/>
        </div>
    )
}

export default Goals

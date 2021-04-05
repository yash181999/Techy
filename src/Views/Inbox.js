import React from 'react'
import { useGlobalContext } from '../context';
import Navbar from './Components/Navbar';
import './Inbox.css'

function Inbox() {
    const {isSidebarOpen, openSidebar} = useGlobalContext();

    return (
        <div className={isSidebarOpen ? 'inbox-with-sidebar inbox': 'inbox'}>
            <Navbar title={'Inbox'}/>
        </div>
    )
}

export default Inbox

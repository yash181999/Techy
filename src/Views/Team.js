import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';
import { useStateValue } from '../StateProvider';
import Navbar from './Components/Navbar';
import './Team.css'

function Team() {
    const {isSidebarOpen, openSidebar, currentTeamData, setCurrentTeamData} = useGlobalContext();

    const [{user,teamData}] = useStateValue();

      

   return teamData ? ( 
        <div className={isSidebarOpen ? 'team-with-sidebar dashboard': 'team'}>
            <Navbar title={teamData.teamName}/>
           
           <div className='currentTeam-center'>
                <h3>Description</h3>
                <div className ='desc-divider'></div>
                <div>{teamData.teamDesc}</div>        
            </div>

        </div>
    )  : <div></div>
}

export default Team

import React from 'react'
import { AllOut, AllOutSharp, CheckCircle, Dashboard, Home, Inbox , InboxOutlined, Menu} from '@material-ui/icons'


 const sidebarData = [
    {
        link : '/home',
        name: "Home",
        icon : <Home fontSize='small'/>

    },
    {
        link : '/dashboard',
        name: "Dashboard",
        icon : <Dashboard fontSize='small'/>

    },
    {
        link : '/mytasks',
        name: "My Tasks",
        icon : <CheckCircle fontSize='small'/>

    }, 
    {
        link : '/teams',
        name: "Teams",
        icon : <InboxOutlined fontSize='as'/>

    },
    {
        link : '/goals',
        name: "My Goals",
        icon : <AllOut fontSize='small'/>,

    }
]

export default sidebarData;
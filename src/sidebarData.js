import React from 'react'
import { AllOut, AllOutSharp, CheckCircle, Dashboard, Home, Inbox , InboxOutlined, Menu} from '@material-ui/icons'


 const sidebarData = [
    {
        link : '/',
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
        link : '/inbox',
        name: "Inbox",
        icon : <InboxOutlined fontSize='small'/>

    },
    {
        link : '/mygoals',
        name: "My Goals",
        icon : <AllOut fontSize='small'/>,

    }
]

export default sidebarData;
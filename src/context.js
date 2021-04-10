import React, { useState, useContext, useEffect } from 'react'
import { db } from './firebase';
import { useStateValue } from './StateProvider';
const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [isSidebarOpen , setIsSidebarOpen] = useState(true);

    const [searchClicked, setSearchClicked] = useState(false);

    const [addDropdown, setShowAddDropdown] = useState(false);

    const [showDrawer,setShowDrawer] = useState(false);

    const[userName, setUserName] = useState(null);

    const[uId, setUId] = useState(null);

    const[drawerData, setDrawerData] = useState(null);
    

    

    const [{user}, dispatch] = useStateValue();

    const [currentTeamData, setCurrentTeamData] = useState();

    useEffect( () => {
        
        if(user!=null){
             db.collection('Users').doc(user.uid).get().then((val) => {
               setUserName(val.data().name)
               setUId(user.uid);
            })
    
        }else{
            console.log('user is null');
        }


    }, [user])

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const showAddDropdown = () => {
        setShowAddDropdown(true);
    }
    const hideAddDropdown = () => {
        setShowAddDropdown(false);
    }

   


    return <AppContext.Provider value = {
        {
            isSidebarOpen,
            addDropdown,
            openSidebar,
            closeSidebar,
            searchClicked,
            showAddDropdown,
            hideAddDropdown,
            setSearchClicked,
            showDrawer,
            setShowDrawer,
            userName,
            setUserName,
            uId,
            setUId,
            drawerData,
            setDrawerData,
            currentTeamData,
            setCurrentTeamData,
            
            
        }
    } >{children}</AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider};
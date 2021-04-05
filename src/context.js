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

    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        
        if(user!=null){
            db.collection('Users').doc(user.uid).get().then((val) => {
               setUserName(val.data().name)
               setUId(user.uid);
            })
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
        }
    } >{children}</AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider};
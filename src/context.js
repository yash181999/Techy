import React, { useState, useContext } from 'react'
const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [isSidebarOpen , setIsSidebarOpen] = useState(true);

    const [searchClicked, setSearchClicked] = useState(false);

    const [addDropdown, setShowAddDropdown] = useState(false);

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
        {isSidebarOpen,addDropdown,openSidebar,closeSidebar,searchClicked,showAddDropdown,hideAddDropdown,setSearchClicked}
    } >{children}</AppContext.Provider>

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider};
import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { useSelector } from 'react-redux';

const Body = () => {

  const isSidebarOpen = useSelector(store => store.navigation.isSidebarOpen);

  return (
    <>
        <div className='flex'>
            {
              isSidebarOpen ? 
              <div className='mr-48'>
                <Sidebar />
              </div>  :null
            }
            <div className=' mt-16'>
              <Outlet />
            </div>
        </div>
    </>
  )
}

export default Body
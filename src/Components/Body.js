import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Body = () => {

 

  return (
    <>
        <div className='flex'>
            <div>
              <Sidebar />
            </div>
            <Outlet />
        </div>
    </>
  )
}

export default Body
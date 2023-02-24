import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import { useSelector } from 'react-redux';

const Body = () => {

  return (
    <>
        <div className='flex'>
            <Sidebar />
            <div className=' mt-16'>
              <Outlet />
            </div>
        </div>
    </>
  )
}

export default Body
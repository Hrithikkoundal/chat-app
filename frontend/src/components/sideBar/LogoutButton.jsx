import React from 'react'
import { CiLogout } from "react-icons/ci";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto pt-3'>
      <button className='btn p-0 h-auto min-h-min bg-transparent hover:bg-transparent border-0' onClick={logout}>
          <CiLogout className='text-white w-6 h-6 cursor-pointer'/>
      </button>
    </div>
  )
}

export default LogoutButton

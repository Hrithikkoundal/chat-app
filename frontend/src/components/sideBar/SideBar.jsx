import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div className='p-5 flex flex-col'>
      <SearchInput />
      <div className='divider opacity-50 before:bg-[#0a4543] after:bg-[#0a4543]'></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default SideBar

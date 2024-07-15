import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import MessageContainer from '../../components/messageContainer/MessageContainer'

const Home = () => {
  return (
    <div className='flex rounded-lg backdrop-filter backdrop-blur-lg max-h-[70vh] h-[100%]'>
      <SideBar />
      <div className='divider mt-3 mb-3 h-[auto] w-[2px] flex flex-col my-0 py-0 opacity-50 before:bg-[#278d8a] after:bg-[#278d8a]'></div>
      <MessageContainer />
    </div>
  )
}

export default Home

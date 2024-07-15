import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';


const MessageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{

    //cleanup function
    return setSelectedConversation(null)
  },[])

  return (
    <div className='p-5 flex flex-col'>
      {
        !selectedConversation ? (
        <NoChatSelected />
        ) : (
        <>
          {/* Header */}
          <div className='bg-slate-500 rounded-lg px-4 py-2 mb2'>
            <span className='label-text'>To: </span> <span className='font-bold text-gray-900'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
        )
      }
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () =>{
  const {authUser} = useAuthContext();

  return (
    <div className='flex items-center justify-center w-full h-full p-5'>
      <div className='text-center font-semibold flex flex-col items-center gap-3'>
        <p className='text-center text-white'>Welcome 🖐, {authUser.fullName}</p>
        <p className='text-center text-white text-sm'>Select  chat to start messaging.</p>
        <LuMessagesSquare className='text-white text-5xl'/>
      </div>
    </div>
  )
}

import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx}) => {

  const { selectedConversation, setSelectedConversation}  = useConversation();
  const isSelected = selectedConversation?._id === conversation?._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  // console.log(onlineUsers);
  return (
    <>
    <div className={`flex p-2 gap-2 items-center rounded hover:bg-[#00000026] cursor-pointer
    ${isSelected ? "bg-[#00000026]" : ""}
    `}
    onClick={()=>setSelectedConversation(conversation)}
    >
      <div className={`avatar ${ isOnline ? "online" : ""}`}>
        <div className='w-12 rounded-full'>
            <img src={conversation?.profilePic || `https://avatar.iran.liara.run/username?username=[${conversation.fullName}]`} alt='avatar user' />
        </div>
      </div>

      <div className='flex flex-1 items-center justify-between'>
        <p className='m-0 font-bold text-white'>{conversation?.fullName}</p>
      </div>
    </div>

    {!lastIdx && <div className='divider my-0 py-0 opacity-50 before:bg-[#0a4543] after:bg-[#0a4543]'></div>}
    </>
  )
}

export default Conversation

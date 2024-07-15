import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation';

const Conversations = () => {

  const {loading, conversations} = useGetConversation();

  return (
    <>
    {loading && 
      <div className='absolute left-0 top-0 right-0 bottom-0 mx-auto my-auto z-50 flex items-center justify-center bg-[#0000002e]'>
        <span className='loading loading-spinner text-white'></span>
      </div>
    }
    <div className='scrollbar p-2 flex flex-col flex-1 overflow-auto'>
      {conversations.map((conversation, idx)=>(
        <Conversation 
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
    </>
  )
}

export default Conversations

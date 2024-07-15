import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useConversation from '../../zustand/useConversation';
import useMessagesListner from '../../hooks/useMessagesListner';

const Messages = () => {
  const {loading, messages} = useGetMessages();
  useMessagesListner();
  const lastMessage = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessage.current?.scrollIntoView({ behavior: "smooth"})
    },loading ? 2100 : 100)
  },[messages])

  return (
    <div className='scrollbar flex-1 px-2 my-3 overflow-auto'>
      {!loading && messages.length > 0 && 
        messages.map((message,index)=>(
          <div key={index} ref={lastMessage}>
            <Message message={message}/>
          </div>
        ))
      }
        {loading && [...Array(2)].map((_,idx) => 
        <div key={idx} className='mt-3'>
          <MessageSkeleton />
        </div>
        )}
        {!loading && messages.length === 0 &&
        <p className='text-white text-sm'>
          Send a message to start the conversation.
        </p>
        }
    </div>
  )
}

export default Messages

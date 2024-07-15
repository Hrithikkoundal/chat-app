import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [inputMessage, setInputMessage] = useState("");

  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!inputMessage){
      return
    }
    sendMessage(inputMessage);
    setInputMessage("");
  }

  return (
    <form className='pt-1' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input 
          type="text" 
          placeholder='Send a message' 
          className='text-sm border p-2 rounded-lg w-full bg-white border-green-800 outline-none'
          value={inputMessage}
          onChange={(e)=> setInputMessage(e.target.value)}
        />
        <button type="submit" className='btn p-0 min-h-[100%] shadow-none bg-transparent hover:bg-transparent border-0 h-auto top-0 bottom-0 absolute insert-y-0 end-0 flex items-center pe-3 text-blue-500'>
            {loading ?  <span className='w-4 loading loading-spinner text-blue-500'></span> : <IoSend />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput

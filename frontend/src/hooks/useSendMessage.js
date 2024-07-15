import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessage = () => {
  
    const [loading, setLoading] = useState(false);

    const {selectedConversation, messages, setMessages} = useConversation();

    const sendMessage = async (message) =>{
        try {
            setLoading(true)
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method: "POST",
                headers:{ "Content-Type": "application/json"},
                body: JSON.stringify({message})
            });

            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }

            setMessages([...messages,data])

        } catch (error) {
            setLoading(false);
            toast.error(error)
        } finally{
            setLoading(false)
        }
    }

    return {loading, sendMessage}
}

export default useSendMessage
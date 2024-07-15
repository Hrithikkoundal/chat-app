import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

function useGetMessages() {
    const [loading, setLoading] = useState();
    const {messages, setMessages, selectedConversation} = useConversation();
    let timer;
    
    useEffect(()=>{
        const getMessages = async () => {
            setLoading(true);
            try {
            const res = await fetch(`/api/messages/${selectedConversation._id}`);
            const data = await res.json();
            if(data.error) throw new Error(data.error);
            setMessages(data);
            } catch (error) {
            toast.error(error.message);
            } finally{
                if(timer){
                    clearTimeout(timer)
                }
                timer = setTimeout(()=>{
                    setLoading(false);
                },2000)
            }
        }
        if(selectedConversation?._id) getMessages();
    },[selectedConversation?._id, setMessages]);
    return { messages, loading };
}

export default useGetMessages;

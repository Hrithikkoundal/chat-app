import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const onSubmit = async (e) =>{
    e.preventDefault();
    await login(username, password);
  }
  return (
    <>
    {loading && 
      <div className='absolute left-0 top-0 right-0 bottom-0 mx-auto my-auto z-50 flex items-center justify-center bg-[#0000002e]'>
        <span className='loading loading-spinner text-white'></span>
      </div>
    }
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-8 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <h1 className='font-semibold text-center text-gray-300'>
          Login
          <span className='text-green-300 ml-2'>ChatApp</span>
        </h1>

        <form className='mt-5' onSubmit={onSubmit}>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Username</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter username' 
              className='w-full input input-bordered h-9'
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              />
          </div>
          
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Password</span>
            </label>
            <input 
              type="password" 
              placeholder='Enter password' 
              className='w-full input input-bordered h-9'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              />
          </div>
          <Link to="/signup" className='block text-sm text-gray-200 hover:text-green-200 p-2 mt-1 mb-1'>"Don't" have any account?</Link>
          <div>
            <button className='btn btn-block btn-sm mt-3'>Login</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login

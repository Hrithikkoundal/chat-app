import React, { useState } from 'react'
import CheckBoxes from './CheckBoxes';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

  const [formInputs, setFormInputs] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  });

  const {loading, signup} = useSignup();

  const handleCheckBox = (gender) =>{
    setFormInputs({...formInputs, gender})
  }

  const submitHandler = async (e) =>{
    e.preventDefault()
    await signup(formInputs);
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
          Sign Up
          <span className='text-green-300 ml-2'>ChatApp</span>
        </h1>

        <form className='mt-5' onSubmit={submitHandler}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>FirstName</span>
            </label>
            <input 
              type="text" 
              placeholder='Hrithik Koundal' 
              className='w-full input input-bordered h-9'
              value={formInputs.fullName}
              onChange={(e)=> setFormInputs({...formInputs, fullName: e.target.value})}
              />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Username</span>
            </label>
            <input 
              type="text" 
              placeholder='hrithikkoundal_' 
              className='w-full input input-bordered h-9'
              value={formInputs.username}
              onChange={(e)=> setFormInputs({...formInputs, username: e.target.value})}
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
              value={formInputs.password}
              onChange={(e)=> setFormInputs({...formInputs, password: e.target.value})}
              />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-gray-200'>Confirm Password</span>
            </label>
            <input 
            type="password" 
            placeholder='Confirm password' 
            className='w-full input input-bordered h-9'
            value={formInputs.confirmPassword}
            onChange={(e)=> setFormInputs({...formInputs, confirmPassword: e.target.value})}
            />
          </div>
          
          <CheckBoxes onCheckboxChange={handleCheckBox} onSelectGender={formInputs.gender}/>

          <Link to="/login" className='block text-sm text-gray-200 hover:text-green-200 p-2'>Already have an account?</Link>

          <div>
            <button className='btn btn-block btn-sm mt-4'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp;

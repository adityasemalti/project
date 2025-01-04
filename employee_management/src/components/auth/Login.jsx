import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const submitHandler=(e)=>
  {
    e.preventDefault()
   console.log("email is ",email) 
   console.log("password is ",password) 
   handleLogin(email,password)
   setEmail("")
   setPassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 h-1/2 w-1/3 border-red-600 rounded-xl '>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} action="" className='flex flex-col items-center justify-center gap-2 p-6 '>
            <input onChange={(e)=>setEmail(e.target.value)}required className='rounded-full p-5 text-black outline-none '  type="email" placeholder='Enter your email '/>
            <input onChange={(e)=>setPassword(e.target.value)}required className='rounded-full p-5 text-black outline-none ' type="password" name="" id="" placeholder='Enter password'/>
            <button className='h-10 w-20 bg-red-400 mt-4 rounded-md' type='submit'>Login</button>
            <h6 className='mt-10 '>Don't have an account ? </h6>
            <button className='w-30 h-10 bg-red-600 rounded-lg p-2 '>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login

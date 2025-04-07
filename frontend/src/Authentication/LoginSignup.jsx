import React from 'react'
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";

const LoginSignup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
        <form action="">
          <div className="relative my-4">
            <input 
              type="email" 
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              required 
            />
            <label className="absolute text-sm text-white duration-300 transform scale-75 -translate-y-6 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Email
            </label>
            <BiUser className="absolute top-3 right-2 text-white" />
          </div>

          <div className="relative my-4">
            <input 
              type="password" 
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" " 
              required 
            />
            <label className="absolute text-sm text-white duration-300 transform scale-75 -translate-y-6 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-3 right-2 text-white" />
          </div>

          <div className="flex justify-between items-center my-4">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-white">Remember Me</label>
            </div>
            <Link to="" className="text-blue-500">Forgot Password?</Link>
          </div>

          <button 
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" 
            type="submit"
          >
            Login
          </button>

          <div className="text-center">
            <span className="mt-4 text-white">New Here? <Link className="text-blue-500" to="/Register">Create an Account</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup

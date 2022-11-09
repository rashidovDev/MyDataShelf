import React from 'react';
import { useState } from 'react';
import Input from "../utils/Input"
import { Link } from 'react-router-dom';
import { login } from '../../actions/user';
import {useDispatch} from "react-redux"

const Login = (props) => {

  const dispatch = useDispatch()
   
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
     <div className='flex justify-center mt-36 text-[#fff]'>
         <div className='bg-[#29335C] py-5 px-8 rounded-[10px] md:w-[500px] m-auto'>
             <h1 className='mb-10 mt-2 text-[25px] font-[600] text-center'>Kirish</h1>
             <Input type="text" placeholder="Email" value={email} setValue={setEmail}/>
             <Input type="password" placeholder="Parol" value={password} setValue={setPassword}/>
             <div className='flex items-center justify-between w-[90%] m-auto'>
             <p className='text-[12px] pt-4 text-[#bfb4b4] '>Hisobingiz bormi? <Link className='text-[#fff]' to="/registration">Ro'yxatdan o'tish</Link> </p>
             <button
        className='bg-[#fff] outline-none text-[#555] px-5 py-1 rounded-[10px] font-[500] mt-4'
        onClick={() => dispatch(login(email,password))}
        >
        Kirish
        </button>
             </div>
         </div>
     </div>
  )
}

export default Login;
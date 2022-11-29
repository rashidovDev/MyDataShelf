import React from 'react';
import { useState } from 'react';
import Input from "../utils/Input"
import {Link} from "react-router-dom"
import { registration } from '../../actions/user';

const Registration = () => {
   
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  console.log(email, password)

  return (
     <div className='flex justify-center mt-36 text-[#fff]'>
         <div className='bg-[#29335C] py-5 px-8 rounded-[10px] md:w-[500px] m-auto'>
             <h1 className='mb-10 mt-2 text-[25px] font-[600] text-center'>Ro'yxatdan o'tish</h1>
             <Input type="text" placeholder="Email" value={email} setValue={setEmail}/>
             <Input type="password" placeholder="Parol" value={password} setValue={setPassword}/>
             <div className='flex items-center justify-between w-[90%] m-auto'>
             <p className='text-[12px] pt-4 text-[#bfb4b4]'>Hisobingiz bormi? <Link className='text-[#fff]' to="/login">Kirish</Link> </p>
             <button  className='bg-[#fff] outline-none text-[#555] px-5 py-1 rounded-[10px] font-[500] mt-4'
             onClick={() => registration(email, password)}
        >
        Yuborish 
        </button>
            </div>
           
        </div>
        <div className='text-[#111] pr-24 '>     
        </div>
     </div>
  )
}

export default Registration;
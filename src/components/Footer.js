import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFacebook, AiOutlineTwitter, AiOutlineWhatsApp, AiFillLinkedin, AiOutlineCopyrightCircle, AiOutlineArrowRight} from 'react-icons/ai'
function Footer() {
  return (
    <div>
      <div className='grid grid-cols-4 mx-10 h-[200px] mt-10'>
        <div className='flex items-center justify-center flex-col'>
          <img className='w-[80px]' src="https://i.hizliresim.com/jn0osf7.png" alt="" />
          <p className='text-center mx-10 text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure.</p>
        </div>
        <div className='border-x-2 px-2 border-orange-600 flex items-center justify-center flex-col'>
          <ul>
            <li className='flex items-center hover:translate-x-2 duration-300 text-black'><AiOutlineArrowRight/><Link to="/">Turkey</Link></li>
            <li className='flex items-center hover:translate-x-2 duration-300 text-black'><AiOutlineArrowRight/><Link to="/">USA</Link></li>
            <li className='flex items-center hover:translate-x-2 duration-300 text-black'><AiOutlineArrowRight/><Link to="/">Russia</Link></li>
            <li className='flex items-center hover:translate-x-2 duration-300 text-black'><AiOutlineArrowRight/><Link to="/">Germany</Link></li>
            <li className='flex items-center hover:translate-x-2 duration-300 text-black'><AiOutlineArrowRight/><Link to="/">France</Link></li>
          </ul>
        </div>
        <div className='flex items-center justify-center border-r-2 border-orange-600 px-2'>
          <Link to="/"><AiFillFacebook size={40} className='hover:bg-orange-600 p-2 hover:text-white rounded-xl '/></Link>
          <Link to="/"><AiOutlineTwitter size={40} className='hover:bg-orange-600 p-2 hover:text-white rounded-xl '/></Link>
          <Link to="/"><AiOutlineWhatsApp size={40} className='hover:bg-orange-600 p-2 hover:text-white rounded-xl '/></Link>
          <Link to="/"><AiFillLinkedin size={40} className='hover:bg-orange-600 p-2 hover:text-white rounded-xl '/></Link>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <h5 className='text-black font-bold text-xl'>Subscribe for latest updates</h5>
          <form action="" className='flex items-center justify-center flex-col'>
            <input className='border-2 rounded-xl border-orange-600 p-2 my-4 w-[250px] placeholder:text-orange-600' type="email" placeholder='Enter your e-mail' name="" id="" />
            <button className='bg-orange-600 text-white py-2 px-6 border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600 rounded-xl' type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className='flex items-center px-20 py-2 bg-orange-600 text-white my-4'>
        <AiOutlineCopyrightCircle/>
        <p>Copyright 2023 | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
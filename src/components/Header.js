import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='z-50 flex bg-white items-center justify-between px-20 mt-4 border-b-2 border-gray-200 sticky top-0'>
      <div>
        <img className='w-[100px]' src="https://i.hizliresim.com/jn0osf7.png" alt="" />
      </div>
      <div>
      <Link className='text-orange-600 font-semibold mx-2 text-lg hover:underline underline-offset-4' to="/">Home</Link>
      <Link className='text-orange-600 font-semibold mx-2 text-lg hover:underline underline-offset-4' to="about">About</Link>
      <Link className='text-orange-600 font-semibold mx-2 text-lg hover:underline underline-offset-4' to="services">Services</Link>
      <Link className='text-orange-600 font-semibold mx-2 text-lg hover:underline underline-offset-4' to="project">Project</Link>
      <Link className='text-orange-600 font-semibold mx-2 text-lg hover:underline underline-offset-4' to="contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
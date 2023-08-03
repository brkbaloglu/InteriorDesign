import React from 'react'
import {AiFillLinkedin, AiFillFacebook, AiOutlineTwitter, AiOutlineWhatsApp} from 'react-icons/ai'
function About() {
  return (
    <div className='flex mt-10 items-center justify-center flex-col'>
      <h1 className='text-4xl my-10 font-bold'>About <span className='text-orange-600'>Us</span></h1>
      <div className='flex items-center justify-between mx-20'>
        <img className='w-[600px]' src="https://i.hizliresim.com/6sk5fbc.jpg" alt="" />
        <div className='ml-10'>
          <h5 className='text-orange-600 font-bold text-xl mb-10'>Best Interior Design</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, alias.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam numquam ex odit ad laudantium voluptate est quo dicta eos molestias assumenda reiciendis corrupti aliquid, ipsa quisquam expedita eveniet, harum error.</p>
          <div className='flex items-center mt-6'>
            <AiFillFacebook size={40} className='text-white bg-gray-800 mx-2 rounded-xl p-2 hover:bg-orange-600 hover:text-black cursor-pointer'/>
            <AiOutlineTwitter size={40} className='text-white bg-gray-800 mx-2 rounded-xl p-2 hover:bg-orange-600 hover:text-black cursor-pointer'/>
            <AiOutlineWhatsApp size={40} className='text-white bg-gray-800 mx-2 rounded-xl p-2 hover:bg-orange-600 hover:text-black cursor-pointer'/>
            <AiFillLinkedin size={40} className='text-white bg-gray-800 mx-2 rounded-xl p-2 hover:bg-orange-600 hover:text-black cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import {BsPaintBucket, BsScrewdriver} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import {LuArmchair} from 'react-icons/lu'
import {BiBed} from 'react-icons/bi'
import {GiTheaterCurtains} from 'react-icons/gi'
function Services() {
  return (
    <div className='flex mt-10 items-center justify-center flex-col'>
      <h1 className='text-4xl my-10 font-bold'>Our <span className='text-orange-600'>Services</span></h1>
      <div className='grid grid-cols-3 mx-20'>
        <div className='h-[250px] w-[300px] border-x-[5px] border-y-2 border-x-orange-500 p-2 m-10 flex items-center justify-center flex-col'>
          <BsPaintBucket size={55} className='my-6 text-orange-500 '/>
          <p className='text-xs text-gray-500 mx-8 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil maiores recusandae modi aspernatur veniam assumenda at commodi</p>
        </div>
        <div className='h-[250px] w-[300px] border-x-[5px] border-y-2 border-x-orange-500 p-2 m-10 flex items-center justify-center flex-col'>
          <BsScrewdriver size={55} className='my-6 text-orange-500 '/>
          <p className='text-xs text-gray-500 mx-8 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil maiores recusandae modi aspernatur veniam assumenda at commodi</p>
        </div>
        <div className='h-[250px] w-[300px] border-x-[5px] border-y-2 border-x-orange-500 p-2 m-10 flex items-center justify-center flex-col'>
          <AiOutlineHome size={55} className='my-6 text-orange-500 '/>
          <p className='text-xs text-gray-500 mx-8 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil maiores recusandae modi aspernatur veniam assumenda at commodi</p>
        </div>
        <div className='h-[250px] w-[300px] border-x-[5px] border-y-2 border-x-orange-500 p-2 m-10 flex items-center justify-center flex-col'>
          <LuArmchair size={55} className='my-6 text-orange-500 '/>
          <p className='text-xs text-gray-500 mx-8 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil maiores recusandae modi aspernatur veniam assumenda at commodi</p>
        </div>
        <div className='h-[250px] w-[300px] border-x-[5px] border-y-2 border-x-orange-500 p-2 m-10 flex items-center justify-center flex-col'>
          <BiBed size={55} className='my-6 text-orange-500 '/>
          <p className='text-xs text-gray-500 mx-8 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil maiores recusandae modi aspernatur veniam assumenda at commodi</p>
        </div>
        <div className='h-[250px] w-[300px] border-x-[5px] border-y-2 border-x-orange-500 p-2 m-10 flex items-center justify-center flex-col'>
          <GiTheaterCurtains size={55} className='my-6 text-orange-500 '/>
          <p className='text-xs text-gray-500 mx-8 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nihil maiores recusandae modi aspernatur veniam assumenda at commodi</p>
        </div>
      </div>
    </div>
  )
}

export default Services
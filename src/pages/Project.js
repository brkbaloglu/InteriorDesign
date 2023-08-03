import React from 'react'

function Project() {
  return (
    <div className='flex mt-10 items-center justify-center flex-col'>
      <h1 className='text-4xl my-10 font-bold'>Our <span className='text-orange-600'>Projects</span></h1>
      <div className='grid grid-cols-3 mx-20'>
        <div className='p-2 m-2 flex items-center justify-center flex-col'>
          <img className='hover:scale-105 duration-300 cursor-pointer' src="https://i.hizliresim.com/ld1tun3.jpg" alt="" />
        </div>
        <div className='p-2 m-2 flex items-center justify-center flex-col'>
          <img className='hover:scale-105 duration-300 cursor-pointer' src="https://i.hizliresim.com/5gpdw6q.jpg" alt="" />
        </div>
        <div className='p-2 m-2 flex items-center justify-center flex-col'>
          <img className='hover:scale-105 duration-300 cursor-pointer' src="https://i.hizliresim.com/lm7i5nt.jpg" alt="" />
        </div>
        <div className='p-2 m-2 flex items-center justify-center flex-col'>
          <img className='hover:scale-105 duration-300 cursor-pointer' src="https://i.hizliresim.com/7lnwye7.jpg" alt="" />
        </div>
        <div className='p-2 m-2 flex items-center justify-center flex-col'>
          <img className='hover:scale-105 duration-300 cursor-pointer' src="https://i.hizliresim.com/k8e6cxz.jpg" alt="" />
        </div>
        <div className='p-2 m-2 flex items-center justify-center flex-col'>
          <img className='hover:scale-105 duration-300 cursor-pointer' src="https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Project
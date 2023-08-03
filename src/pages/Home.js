import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='bg-[url("https://i.hizliresim.com/pyox1sk.jpg")] w-full h-[400px] bg-center bg-cover bg-no-repeat'>
      <div className='flex items-center justify-center flex-col absolute top-[300px] left-[100px]'>
      <h3 className='rounded-lg bg-orange-400 text-white py-6 px-10 text-2xl font-bold'>Architecture Services</h3>
      <Link className='rounded-lg bg-orange-600 top-[100px] py-2 px-6 absolute text-xl hover:border-2 hover:border-orange-600 text-white hover:bg-white hover:text-orange-600' to="/">Get Started</Link>
      </div>
    </div>
    <div className=' mt-20 flex items-center justify-center'>
      <div className='mx-20 text-4xl font-bold flex items-center justify-center flex-col'>
        <h3>3+</h3>
        <h5 className='text-lg text-orange-600 font-normal'>Years</h5>
      </div>
      <div className='mx-20 text-4xl font-bold flex items-center justify-center flex-col'>
        <h3>24+</h3>
        <h5 className='text-lg text-orange-600 font-normal'>Awards</h5>
      </div>
      <div className='mx-20 text-4xl font-bold flex items-center justify-center flex-col'>
        <h3>100+</h3>
        <h5 className='text-lg text-orange-600 font-normal'>Projects</h5>
      </div>
    </div>
    </div>
  )
}

export default Home
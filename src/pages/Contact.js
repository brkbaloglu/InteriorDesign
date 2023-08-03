import React from 'react'

function Contact() {
  return (
    <div className='flex mt-10 items-center justify-center flex-col'>
    <h1 className='text-4xl my-10 font-bold'>Contact <span className='text-orange-600'>Us</span></h1>
    <form action="" className='flex items-center justify-center flex-col'>
      <input type="text" placeholder='Enter your name'  className='w-[500px] border-2 border-orange-600 rounded-xl p-2 my-2 placeholder:text-orange-600' name="" id="" />
      <input type="email" placeholder='Enter your email'  className='w-[500px] border-2 border-orange-600 rounded-xl p-2 my-2 placeholder:text-orange-600' name="" id="" />
      <input type="number"  placeholder='Enter your number' className='w-[500px] border-2 border-orange-600 rounded-xl p-2 my-2 placeholder:text-orange-600' name="" id="" />
      <textarea name="" placeholder='Enter your message'  className='w-[500px] border-2 resize-none border-orange-600 rounded-xl p-2 my-2 placeholder:text-orange-600' id="" cols="30" rows="10"></textarea>
      <button type="submit" className='bg-orange-600 text-white py-2 px-6 rounded-xl border-2 hover:border-orange-600 hover:bg-white hover:text-orange-600'>Submit</button>
    </form>
    </div>
  )
}

export default Contact
import React from 'react';


function App() {


  return (
   <div>
    <div className='py-11 bg-gradient-to-b from-[#FFFFFF00] to-[#F4F4F4] relative'>
      <div className='w-[600px] flex flex-col items-center h-[250px] rounded-2xl bg-[#F4F4F4] absolute right-48'>
        <p className='py-6 w-[150px] text-center font-bold text-[20px]'>Your Website, 
        Live in Minutes!</p>
        <p className='text-center w-[450px]'>Let our AI Website Builder revolutionize the way you create your site.
        With intelligent automation and design optimization, building 
        your dream website has never been faster or smarter!</p>
        <button className='text-white bg-[#4262FF] mt-7 px-[10px] py-[5px] rounded-3xl'>Let AI Build It</button>
      </div>
      <div className='flex flex-col px-16 py-10'>
        <div className='w-[420px] text-[16px] text-[#141414] font-medium px-[10px]'>
          <p>Say goodbye to upfront costs and delays! We deliver fully customizable websites on a rental basis—tailored to your brand and powered by cutting-edge technology. Enjoy secure hosting, sleek designs, and effortless scalability.</p>
        </div>
        <div className='text-8xl'>
          <h>Launch Your</h>
          <h1>Dream Live in <span className='text-white drop-shadow-[3px_3px_2px_black]'>Fast & Easy!</span>!</h1>
        </div>
      </div>
      <div className=' flex items-center gap-20 px-20'>
        <div className='flex border-2 w-5xl rounded-3xl border-b-4'>
        <p className='px-[50px] py-[20px] rounded-l-3xl bg-[#E1E1E1] text-[16px]'>Search</p>
        <input className='text-[#6B7280] px-10' type="text" placeholder='Search your desire'/>
        </div>
        <div>
          <button className=' py-[20px] font-bold border-2 w-[140px] rounded-3xl border-b-4'>Go</button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default App

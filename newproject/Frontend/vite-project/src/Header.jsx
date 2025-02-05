import React from 'react'

function Header() {
  return (
    <div className=' text-[#050038] flex shadow-md  items-center p-4 justify-between'>
     <div className='flex gap-8 '>
     <div>
        <h3 className='font-bold text-xl '>webirent</h3>
      </div>
      <div className=' text-[16px] flex gap-10 items-center '>
        <h3>Product</h3>
        <h3>Solution</h3>
        <h3>Resources</h3>
        <h3>Enterprise</h3>
        <h3>Pricing</h3>
      </div>
     </div>
      <div className='text-[16px] flex gap-8 items-center '>
        <h3>EN</h3>
        <h3>Contact</h3>
        <h3>Sales</h3>
        <button>Login</button>
        <button className='bg-[#4262FF] text-white px-4.5 py-3.5 rounded-4xl'>Sign up free </button>
      </div>
    </div>
  )
}

export default Header

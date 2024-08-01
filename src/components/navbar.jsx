// import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-slate-700 text-white py-3'>
        <div className="logo">
            <span className='font-bold text-xl '>iTask</span>
        </div>
        <ul className='flex gap-6 '>
            <li className='cursor-pointer '>Home</li>
            <li className='cursor-pointer '>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar

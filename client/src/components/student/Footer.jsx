import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 w-full text-left mt-10'>
      <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
        <div className='flex flex-col md:items-start items-center w-full'>
          <img src={assets.logo_dark} alt='logo'/>
          <p className='text-white/80 text-sm md:text-left text-center mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor nam iure, aut sint, alias placeat excepturi numquam, atque praesentium nihil commodi aperiam quam in! Vitae reiciendis laboriosam eos tempora!</p>
        </div>
        <div className='flex flex-col md:items-start items-center w-full'>
          <h2 className='font-semibold text-white mb-5'>Company</h2>
          <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 gap-3'>
            <li><a href=''>Home</a></li>
            <li><a href=''>About us</a></li>
            <li><a href=''>Contact us</a></li>
            <li><a href=''>Privacy policy</a></li>
          </ul>
        </div>
        <div className='flex flex-col items-start w-full'>
          <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
          <p className='text-white/80 text-sm '>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input className='border border-gray-500/30 px-2 outline-none h-10 w-64 text-sm bg-gray-800 rounded text-gray-500 ' type='email' placeholder='Enter your email'/>
            <button className='bg-blue-600 rounded w-24 h-10 text-white'>Subscribe</button>
          </div>
        </div>
      </div>
      <p className='text-white/30 py-4 text-center text-xs md:text-sm'>Copyright 2024 © NadaAdel. All Right Reserved.</p>
    </footer>
  )
}

export default Footer

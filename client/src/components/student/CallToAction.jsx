import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-3xl font-bold text-gray-800'>Learn anything, anytime, anywhere</h1>
      <p className='sm:text-sm text-gray-500'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div className='flex items-center gap-8 mt-4 font-medium'>
        <button className='bg-blue-600 rounded text-white px-10 py-3'>Get started</button>
        <button className='flex items-center gap-2'>Learn more <img src={assets.arrow_icon} alt='arrowIcon' /> </button>
      </div>
    </div>
  )
}

export default CallToAction

import React, { useContext } from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const TestimonialsSection = () => {
  const {calculateRating} = useContext(AppContext);
  return (
    <div className='pb-14 pt-14'>
      <h2 className='text-3xl text-gray-800 font-medium'>Testimonials</h2>
      <p className='text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journeys of transformation, success, and how our <br/>
        platform has made a difference in their lives.
      </p>
      <div className='grid grid-cols-auto gap-8 mt-14'>
        {dummyTestimonial.map((testimonial, index)=>(
          <div key={index} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg shadow-lg'>
            <div className='flex items-center gap-5 px-5 py-5 bg-gray-500/10'>
              <img className='h-12 w-12 rounded' src={testimonial.image} alt={testimonial.name} />  
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i)=>(
                  <img className='h-5' key={i} src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt='rating' />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection

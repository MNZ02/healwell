import React from 'react'

function Banner () {
  return (
    <div className='w-full bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] py-8 px-4 md:px-6 lg:px-8'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row'>
        <div className='text-center md:text-left'>
          <h2 className='text-2xl font-bold text-white md:text-3xl'>
            Experience the best physiotherapy service in town
          </h2>
          <p className='mt-2 text-white md:text-lg'>
            Book a free demo session or order a free call to get started.
          </p>
        </div>
        <div className='flex flex-col items-center gap-2 md:flex-row'>
          <a
            href='#'
            className='inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-[#4CAF50] shadow-sm transition-colors hover:bg-[#4CAF50] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2'
          >
            Book a free demo session
          </a>
          <a
            href='#'
            className='inline-flex h-10 items-center justify-center rounded-md bg-[#4CAF50] px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#8BC34A] focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:ring-offset-2'
          >
            Order a free call
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner

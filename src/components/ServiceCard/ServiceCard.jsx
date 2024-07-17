import React from 'react'

function ServiceCard ({ title }) {
  return (
    <div className='flex flex-col items-center'>
      <img
        src='/src/assets/images/image.png'
        alt={title}
        className='h-12 w-12'
        style={{ objectFit: 'cover' }}
      />
      <p className='mt-2'>{title}</p>
    </div>
  )
}

export default ServiceCard

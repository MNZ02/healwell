import React from 'react'

function RepairServiceCard ({ href, imgSrc, imgAlt, title, description }) {
  return (
    <div className='bg-background rounded-lg overflow-hidden shadow-lg group relative'>
      <a className='absolute inset-0 z-10' href={href}>
        <span className='sr-only'>View {title}</span>
      </a>
      <img
        src={imgSrc}
        alt={imgAlt}
        width='300'
        height='200'
        className='w-full h-48 object-cover group-hover:opacity-80 transition-opacity'
        style={{ aspectRatio: '300 / 200', objectFit: 'cover' }}
      />
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-primary-foreground'>
          {title}
        </h3>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  )
}

export default RepairServiceCard

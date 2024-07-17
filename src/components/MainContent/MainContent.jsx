import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
function MainContent () {
  return (
    <main className='container mx-auto py-10 px-6'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div>
          <h1 className='text-4xl font-bold mb-6 text-black'>
            Home services at your doorstep
          </h1>
          <div
            className='rounded-lg border bg-card text-card-foreground shadow-sm p-6'
            data-v0-t='card'
          >
            <div className='flex flex-col space-y-1.5 p-6'>
              <h3 className='whitespace-nowrap tracking-tight text-xl font-semibold'>
                What are you looking for?
              </h3>
            </div>
            <div className='p-6 grid grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
              {[
                "Women's Salon",
                "Men's Salon & Massage",
                'AC & Appliance Repair',
                'Cleaning',
                'Electrician, Plumber & Carpenter',
                'Native Water Purifier'
              ].map(service => (
                <ServiceCard key={service} title={service} />
              ))}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {['Service 1', 'Service 2', 'Service 3', 'Service 4'].map(
            (service, index) => (
              <img
                key={index}
                src='/src/assets/images/image.png'
                alt={service}
                className='rounded-lg'
                style={{ aspectRatio: '3 / 2', objectFit: 'cover' }}
              />
            )
          )}
        </div>
      </div>
    </main>
  )
}

export default MainContent

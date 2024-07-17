import React from 'react'
import RepairServiceCard from './RepairServiceCard'
function RepairServiceGrid () {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6'>
      <RepairServiceCard
        href='#'
        imgSrc='/src/assets/images/image.png'
        imgAlt='Pain Relief and Management'
        title='Pain Relief and Management'
        description='Expert repair services for all your air conditioning needs.'
      />
      <RepairServiceCard
        href='#'
        imgSrc='/src/assets/images/image.png'
        imgAlt='Post-Operation Rehabilitation'
        title='Post-Operation Rehabilitation'
        description='Restore your refrigerator to peak performance.'
      />
      <RepairServiceCard
        href='#'
        imgSrc='/src/assets/images/image.png'
        imgAlt='Sports Injury Rehabilitation'
        title='Sports Injury Rehabilitation'
        description='Get your laundry back on track with our expert repair services.'
      />
      <RepairServiceCard
        href='#'
        imgSrc='/src/assets/images/image.png'
        imgAlt='Geriatric Physiotherapy'
        title='Geriatric Physiotherapy'
        description='Ensure your clothes come out fresh and dry every time.'
      />
      <RepairServiceCard
        href='#'
        imgSrc='/src/assets/images/image.png'
        imgAlt='Pediatric Care'
        title='Pediatric Care'
        description='Ensure your clothes come out fresh and dry every time.'
      />
    </section>
  )
}

export default RepairServiceGrid

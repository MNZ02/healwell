import React, { useState } from 'react'

function OrderForm () {
  return (
    <div className='flex flex-col gap-8'>
      <div className='px-6 py-8 shadow-md max-w-xl'>
        <h1 className='font-bold text-2xl my-2 mb-2'>Enter details</h1>
        <div>
          <div>
            <h1 className='font-bold text-md mt-4'>Phone Number</h1>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                id='phone'
                placeholder='Enter your phone number'
                type='tel'
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className='font-bold text-md mt-4'>Address</h1>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                id='address'
                placeholder='Enter your address'
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <label
                  className='text-md font-bold leading-none'
                  htmlFor='city'
                >
                  City
                </label>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                  id='city'
                  placeholder='Enter your city'
                />
              </div>
              <div className='grid gap-2'>
                <label
                  className='text-md font-bold leading-none'
                  htmlFor='state'
                >
                  State
                </label>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                  id='state'
                  placeholder='Enter your state'
                />
              </div>
            </div>
            <div className='grid gap-2'>
              <label className='text-md font-bold leading-none' htmlFor='zip'>
                Postal Code
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                id='zip'
                placeholder='Enter your postal code'
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        Cancellation & reschedule policy Free cancellations/reschedules if done
        more than 3 hrs before the service or if a professional isn’t assigned.
        A fee will be charged otherwise.{' '}
      </div>
    </div>
  )
}

export default OrderForm

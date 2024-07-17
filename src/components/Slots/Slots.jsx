import React, { useState } from 'react'

function Slots () {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('9am-12pm')
  return (
    <div className='py-5 px-5 rounded-md shadow-lg'>
      <h1 className='font-bold text-2xl my-4'>
        Time Slot
        <div>Select a delivery time slot</div>
      </h1>
      <div className='grid gap-4'>
        <div role='radiogroup' className='grid gap-2'>
          <div className='grid grid-cols-2 gap-2'>
            <label
              className={`text-sm font-medium leading-none border rounded-md p-4 flex items-center justify-between cursor-pointer ${
                selectedTimeSlot === '9am-12pm' ? 'border-black' : ''
              }`}
              htmlFor='time-slot-1'
            >
              <div>
                <div className='font-medium'>9am - 12pm</div>
                <div className='text-muted-foreground text-sm'>
                  Earliest delivery
                </div>
              </div>
              <button
                type='button'
                role='radio'
                aria-checked={selectedTimeSlot === '9am-12pm'}
                className={`aspect-square h-4 w-4 rounded-full border ${
                  selectedTimeSlot === '9am-12pm'
                    ? 'border-black text-black'
                    : ''
                }`}
                id='time-slot-1'
                onClick={() => setSelectedTimeSlot('9am-12pm')}
              >
                {selectedTimeSlot === '9am-12pm' && (
                  <span className='flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-circle h-2.5 w-2.5 fill-current text-current'
                    >
                      <circle cx='12' cy='12' r='10'></circle>
                    </svg>
                  </span>
                )}
              </button>
            </label>
            <label
              className={`text-sm font-medium leading-none border rounded-md p-4 flex items-center justify-between cursor-pointer ${
                selectedTimeSlot === '12pm-3pm' ? 'border-black' : ''
              }`}
              htmlFor='time-slot-2'
            >
              <div>
                <div className='font-medium'>12pm - 3pm</div>
                <div className='text-muted-foreground text-sm'>
                  Standard delivery
                </div>
              </div>
              <button
                type='button'
                role='radio'
                aria-checked={selectedTimeSlot === '12pm-3pm'}
                className={`aspect-square h-4 w-4 rounded-full border ${
                  selectedTimeSlot === '12pm-3pm'
                    ? 'border-black text-black'
                    : ''
                }`}
                id='time-slot-2'
                onClick={() => setSelectedTimeSlot('12pm-3pm')}
              ></button>
            </label>
            <label
              className={`text-sm font-medium leading-none border rounded-md p-4 flex items-center justify-between cursor-pointer ${
                selectedTimeSlot === '3pm-6pm' ? 'border-black' : ''
              }`}
              htmlFor='time-slot-3'
            >
              <div>
                <div className='font-medium'>3pm - 6pm</div>
                <div className='text-muted-foreground text-sm'>
                  Late delivery
                </div>
              </div>
              <button
                type='button'
                role='radio'
                aria-checked={selectedTimeSlot === '3pm-6pm'}
                className={`aspect-square h-4 w-4 rounded-full border ${
                  selectedTimeSlot === '3pm-6pm'
                    ? 'border-black text-black'
                    : ''
                }`}
                id='time-slot-3'
                onClick={() => setSelectedTimeSlot('3pm-6pm')}
              ></button>
            </label>
          </div>
        </div>
      </div>
      <div className='flex justify-between my-4'>
        <button className='inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'>
          Back
        </button>
        <button className='inline-flex items-center justify-center rounded-md text-sm font-medium bg-black text-white text-black-foreground hover:bg-black/90 h-10 px-4 py-2'>
          Next
        </button>
      </div>
    </div>
  )
}

export default Slots

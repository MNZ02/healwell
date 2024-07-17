import React from 'react'

function ItemsList ({ name }) {
  return (
    <div className='m-4 p-2 max-w-lg mx-auto'>
      <div className='px-4 py-2 mx-2 shadow-lg rounded-md max-w-lg'>
        <ul>
          <li
            className={`my-8 lg:mx-4 py-2 lg:px-6 flex justify-between space-x-5 items-center select-none`}
          >
            <div className='transition duration-300 ease-in-out'>
              <div className='mb-1'>
                <span className='font-semibold text-lg'>{name}</span>
              </div>
              <div className='px-2'>Rs.100</div>
              <div className='overflow-hidden sm:max-w-md xl:max-w-full px-2 py-3 text-gray-500'>
                <p className='text-sm'>Description</p>
              </div>
            </div>
            <div>
              <img
                className='w-32 lg:w-full h-24 lg:h-28 object-cover rounded-md'
                src='/src/assets/images/image.png'
                alt='categoryImage'
              />
              <div className='flex justify-center'>
                <button className='text-green-400 font-semibold px-8 py-2 rounded-md absolute bg-white  shadow-lg bg-gray-100 hover:bg-gray-200 -mt-6'>
                  Add
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ItemsList

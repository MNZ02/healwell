import React from 'react'

function SearchInput ({ placeholder, Icon }) {
  return (
    <div className='relative'>
      <input
        type='text'
        placeholder={placeholder}
        className='pl-8 pr-4 py-2 rounded-lg bg-white text-black'
      />
      <Icon className='absolute left-2 top-2 h-4 w-4 text-gray-500' />
    </div>
  )
}

export default SearchInput

import React from 'react'

function CartItem ({ name, color, size, price, inStock, imgSrc, shipTime }) {
  return (
    <div className='bg-white shadow rounded-lg p-4 mb-4 flex'>
      <img
        className='w-24 h-24 object-cover rounded-lg'
        src={imgSrc}
        alt={name}
      />
      <div className='ml-4 flex-1'>
        <h2 className='text-lg font-semibold'>{name}</h2>
        <p className='text-sm text-gray-500'>
          {color} - {size}
        </p>
        <p className='text-sm font-semibold'>${price.toFixed(2)}</p>
        {inStock ? (
          <p className='text-sm text-green-500'>In stock</p>
        ) : (
          <p className='text-sm text-gray-500'>{shipTime}</p>
        )}
      </div>
      <div className='flex items-center space-x-2'>
        <select className='border-gray-300 rounded-lg'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button className='text-gray-500 hover:text-red-500'>
          <span className='sr-only'>Remove</span>
          &times;
        </button>
      </div>
    </div>
  )
}

export default CartItem

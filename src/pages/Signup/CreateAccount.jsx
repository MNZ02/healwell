import React, { useState } from 'react'
import crossSvg from '../../assets/cross.svg'
const CreateAccount = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const toggleDialog = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Name:', name)
    console.log('Phone:', phone)
    setIsOpen(false)
  }

  return (
    <>
      <button
        className='border border-gray-300 bg-white py-2 px-4 text-gray-700 transition-colors hover:bg-gray-100'
        onClick={toggleDialog}
      >
        Sign Up
      </button>

      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-6 rounded-lg max-w-lg w-full relative'>
            <button
              className='absolute top-5 right-5  text-gray-500 hover:text-gray-700 w-3 h-3'
              onClick={toggleDialog}
            >
              <img src={crossSvg} alt='close' />
            </button>
            <div className='mb-4'>
              <h2 className='text-xl font-bold text-black'>
                Create an Account
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-left mb-2'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  placeholder='Enter name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className='w-full p-2 border-0 rounded-md'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='phone' className='block text-left mb-2'>
                  Phone
                </label>
                <input
                  id='phone'
                  type='tel'
                  placeholder='Enter phone number'
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className='w-full p-2 border-0 rounded-md'
                />
              </div>
              <div className='flex justify-end space-x-4'>
                <button
                  type='submit'
                  className='bg-black text-white py-2 px-4  hover:bg-black rounded-md'
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateAccount

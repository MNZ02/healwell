import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchInput from '../SearchInput/SearchInput'
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon'
import CircleUserIcon from '../CircleUserIcon/CircleUserIcon'
import MapPinIcon from '../MapPinIcon/MapPinIcon'
import SearchIcon from '../SearchIcon/SearchIcon'

function HeaderHome () {
  const navigate = useNavigate()

  const handleCartClick = () => {
    navigate('/cart')
  }

  const handleLogoClick = () => {
    navigate('/')
  }
  return (
    <header className='text-black shadow-lg'>
      <div className='container mx-auto flex items-center justify-between py-4 px-6'>
        <div className='flex items-center'>
          <img
            onClick={handleLogoClick}
            src='/src/assets/images/logos/logo.png'
            alt='HealWell logo'
            className='h-8 w-8 cursor-pointer'
          />
          <span className='ml-2 text-xl font-bold'>HealWell</span>
        </div>
        <div className='hidden md:flex items-center space-x-4'>
          {/* <SearchInput placeholder='GS Road' Icon={MapPinIcon} /> */}
          <SearchInput
            placeholder="Search for 'Physiotherapist'"
            Icon={SearchIcon}
          />
          <ShoppingCartIcon
            onClick={handleCartClick}
            className='h-6 w-6 cursor-pointer'
          />
          <CircleUserIcon className='h-6 w-6 cursor-pointer' />
        </div>
      </div>
    </header>
  )
}

export default HeaderHome

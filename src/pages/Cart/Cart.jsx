import React from 'react'
import OrderForm from '../../components/OrderForm/OrderForm'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import CartItem from '../../components/CartItem/CartItem'
import Slots from '../../components/Slots/Slots'

function Cart () {
  return (
    <div className='min-h-screen bg-white'>
      <header className='bg-white shadow'>
        <div className='container mx-auto py-6 px-4'>
          <h1 className='text-3xl font-bold text-black '>Order Page</h1>
        </div>
      </header>
      <main className='container mx-auto py-12 px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          <OrderForm />
          <div className='my-4'>
            <div className='my-8'>
              <Slots />
            </div>
            <div className='mt-8'>
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart

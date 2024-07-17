import React from 'react'

function OrderSummary () {
  return (
    <div class='flex flex-col gap-8'>
      <div
        class='rounded-lg border border-slate-200 bg-card text-card-foreground shadow-md'
        data-v0-t='card'
      >
        <div class='flex flex-col space-y-1.5 p-6'>
          <h3 class='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight text-black'>
            Order Summary
          </h3>
        </div>
        <div class='p-6'>
          <div class='grid gap-4'>
            <div class='flex items-center justify-between'>
              <div>Item Total</div>
              <div>$99.00</div>
            </div>
            <div class='flex items-center justify-between'>
              <div>Taxes &amp; Fees</div>
              <div>$9.90</div>
            </div>
            <div
              data-orientation='horizontal'
              role='none'
              class='shrink-0 bg-border h-[1px] w-full'
            ></div>
            <div class='flex items-center justify-between font-medium'>
              <div>Total</div>
              <div>$100</div>
            </div>
          </div>
          <button className='mt-4 w-full bg-black text-white py-2 rounded-md transition'>
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary

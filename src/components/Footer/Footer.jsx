import React from 'react'

function Footer () {
  return (
    <footer className='bg-slate-50 py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6'>
        <div>
          <img
            src='/src/assets/images/logos/logo.png'
            alt='HealWell logo'
            className='h-8 w-8 mb-4'
          />
          <h2 className='text-lg font-bold'>HealWell </h2>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-4'>Company</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-gray-700'>
                About us
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-700'>
                Terms & conditions
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-700'>
                Privacy policy
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-700'>
                Anti-discrimination policy
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-700'>
                HW impact
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-700'>
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-4'>For customers</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-gray-700'>
                HW reviews
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-700'>
                Categories near you
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-700'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-700'>
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-4'>For partners</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-gray-700'>
                Register as a professional
              </a>
            </li>
          </ul>
          <h3 className='text-lg font-bold mt-6 mb-4'>Social links</h3>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-700'>
              <img
                src='/src/assets/images/logos/twitter.svg'
                alt='Twitter'
                className='h-6 w-6'
              />
            </a>
            <a href='#' className='text-gray-700'>
              <img
                src='/src/assets/images/logos/facebook.svg'
                alt='Facebook'
                className='h-6 w-6'
              />
            </a>
            <a href='#' className='text-gray-700'>
              <img
                src='/src/assets/images/logos/instagram.svg'
                alt='Instagram'
                className='h-6 w-6'
              />
            </a>
            <a href='#' className='text-gray-700'>
              <img
                src='/src/assets/images/logos/linkedin.svg'
                alt='LinkedIn'
                className='h-6 w-6'
              />
            </a>
          </div>
          {/* <div className='mt-6'>
            <a href='#'>
              <img
                src='/path-to-app-store-badge.svg'
                alt='App Store'
                className='h-10 mb-2'
              />
            </a>
            <a href='#'>
              <img
                src='/path-to-google-play-badge.svg'
                alt='Google Play'
                className='h-10'
              />
            </a>
          </div> */}
        </div>
      </div>
      <div className='container mx-auto text-center py-4'>
        <p className='text-gray-500 text-sm'>
          © Copyright 2024 HealWell. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

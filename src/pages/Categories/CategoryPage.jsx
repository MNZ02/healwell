import React from 'react'
import HeaderHome from '../../components/Header/HeaderHome'
import ItemsList from '../../components/ItemsList/ItemsList'

const categories = [
  { id: 1, name: 'Back Pain', image: '/src/assets/images/image.png' },
  { id: 2, name: 'Shoulder Pain', image: '/src/assets/images/image.png' },
  { id: 3, name: 'Any Other Pain', image: '/src/assets/images/image.png' }
]

const services = [
  {
    id: 1,
    name: 'Power Saver AC service',
    description: 'Save more on your electricity bill',
    price: '₹599',
    rating: 4.82,
    reviewCount: 520.9,
    image: '/path/to/service1.jpg'
  },
  {
    id: 2,
    name: 'Anti-rust deep clean AC service',
    description:
      'Prevents frequent gas leakages through a unique anti-rust spray',
    price: '₹849',
    rating: 4.85,
    reviewCount: 69.7,
    image: '/path/to/service2.jpg'
  }
  // Add more services as needed
]

const CategoryPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <HeaderHome />
      <div className='mx-10 my-4 px-2 py-2'>
        <h2 className='text-3xl font-bold '>Pain Relief and Management </h2>
      </div>

      <main className='container mx-auto mt-8 grid grid-cols-12 gap-4'>
        <aside className='col-span-3 bg-white p-4 rounded-md border border-slate-200 shadow-md h-fit'>
          <h2 className='text-xl font-bold mb-4'>Select a service</h2>
          <div className='grid gap-4'>
            {categories.map(category => (
              <div key={category.id} className='flex items-center'>
                <img
                  src={category.image}
                  alt={category.name}
                  className='w-16 h-16 object-cover rounded-full mr-4'
                />
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </aside>

        <section className='col-span-6 bg-white p-4 rounded-md shadow-md border border-slate-200'>
          {/* <h2 className='text-xl font-bold mb-4'>Service</h2>
          {services.map(service => (
            <div key={service.id} className='flex items-center border-b py-4'>
              <img
                src={service.image}
                alt={service.name}
                className='w-24 h-24 object-cover rounded-md mr-4'
              />
              <div>
                <h3 className='text-lg font-bold'>{service.name}</h3>
                <p className='text-gray-600'>{service.description}</p>
                <p className='text-gray-800 font-bold'>{service.price}</p>
                <p className='text-gray-600'>
                  {service.rating} ({service.reviewCount}K reviews)
                </p>
                <button className='mt-2 bg-blue-600 text-white px-4 py-2 rounded-md'>
                  Add
                </button>
              </div>
            </div>
          ))} */}
          <ItemsList name={'Back Pain'} />

          <ItemsList name={'Shoulder Pain'} />
          <ItemsList name={'Neck Pain'} />
          <ItemsList name={'Knee Pain'} />
        </section>

        <aside className='col-span-3 bg-white p-4 rounded-md shadow-md border border-slate-200 h-fit'>
          <div className='mb-4'>
            <h2 className='text-xl font-bold'>Cart</h2>
            <p className='text-gray-600'>No items in your cart</p>
          </div>
          <div>
            <h2 className='text-xl font-bold'>Healwell Promise</h2>
            <ul className='list-disc pl-4 text-gray-600'>
              <li>Verified Professionals</li>
              <li>Hassle Free Booking</li>
              <li>Transparent Pricing</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default CategoryPage

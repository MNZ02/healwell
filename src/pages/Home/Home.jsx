import React from 'react'
import HeaderHome from '../../components/Header/HeaderHome'
import MainContent from '../../components/MainContent/MainContent'
import Footer from '../../components/Footer/Footer'
import RepairServiceGrid from '../../components/RepairService/RepairServiceGrid'
import Banner from '../../components/Banner/Banner'
function Home () {
  return (
    <div className='min-h-screen bg-white'>
      <HeaderHome />
      <Banner />
      <MainContent />
      <RepairServiceGrid />
      <Footer />
    </div>
  )
}

export default Home

import React from 'react'
import Banner from '../../components/Home-content/Banner'
import Categories from '../../components/Home-content/Categories'
import SpecialDishes from '../../components/Home-content/SpecialDishes'
import Testimonials from '../../components/Home-content/Testimonials'
import OurServices from '../../components/Home-content/OurServices'

function Home() {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonials/>
      <OurServices/>
    </div>
  )
}

export default Home
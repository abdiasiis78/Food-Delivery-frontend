import React from 'react'
import Banner from '../../components/Home-content/Banner'
import Categories from '../../components/Home-content/Categories'
import SpecialDishes from '../../components/Home-content/SpecialDishes'
import Testimonials from '../../components/Home-content/Testimonials'

function Home() {
  return (
    <div>
      <Banner/>
      <Categories/>
      <SpecialDishes/>
      <Testimonials/>
    </div>
  )
}

export default Home
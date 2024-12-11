import React from 'react'
import Hero from './components/hero'
import Card from './components/card'
import Running from './components/running'
import Gear from './components/gear'
import Stan from './components/stan'
import Essentials from './components/essentials'

const page = () => {
  return (
    <div>
      <main className="max-w-screen-2xl mx-auto">

        <Hero />
        <Card />
        <Running />
        <Gear />
        <Stan />
        <Essentials />
      </main>
    </div>
  )
}

export default page
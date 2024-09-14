import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
      {/* <SignInButton>
        <Button>Click me</Button>
      </SignInButton> */}

        <Header/>
        <Hero/>
        <Category/>
        <MostSearchedCar/>
        <InfoSection/>
        <Footer/>
      </div>
  )
}

export default Home
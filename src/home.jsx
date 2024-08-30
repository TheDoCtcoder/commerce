import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'

function Home() {
  return (
    <div>
      {/*Header*/}

      {/* <SignInButton>
        <Button>Click me</Button>
      </SignInButton> */}

        <Header/>
        {/*Hero*/}
        <Hero/>
        <Category/>
        <MostSearchedCar/>

      </div>
  )
}

export default Home
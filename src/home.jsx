import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'

function Home() {
  return (
    <div>
      {/*Header*/}

      {/* <SignInButton>
        <Button>Click me</Button>
      </SignInButton> */}

        <Header/>
        {/*Hero*/}

      </div>
  )
}

export default Home
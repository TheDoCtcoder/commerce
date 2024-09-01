import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
// import { Button } from './ui/button';
import { SignInButton } from '@clerk/clerk-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='flex  justify-between  items-center  shadow-sm p-5'>
      <img src="logo.svg" alt="logo" width={150} height={100} />

      <ul className='  hidden md:flex gap-16'>
        <li className=' font-medium  hover:scale-105  transition-all cursor-pointer  hover:text-primary'><Link to={'/'} >Accueil</Link></li>
        <li className=' font-medium  hover:scale-105  transition-all cursor-pointer  hover:text-primary'>Rechercher</li>
        <li className=' font-medium  hover:scale-105  transition-all cursor-pointer  hover:text-primary'>Nouveau</li>
        <li className=' font-medium  hover:scale-105  transition-all cursor-pointer  hover:text-primary'>Précommande</li>
      </ul>

      {isSignedIn ?
        <div className='flex items-center gap-2' >
          <UserButton />
          <Link to={'/profile'} >
          <Button>Placer une annonce</Button>

          </Link>
        </div>
        :
        <div>
          <SignInButton>
            <Button className=' mx-3'>Connexion</Button>
          </SignInButton>
          <Button>Placer une annonce</Button>
        </div>

      }

    </div>
  )
}

export default Header
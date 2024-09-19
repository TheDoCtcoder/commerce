import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
// import { Button } from './ui/button';
import { SignInButton } from '@clerk/clerk-react'
import { Button } from './ui/button'
import { Link, Navigate } from 'react-router-dom';
import Logo from './../assets/peugeot5082.png'


function Header() {
  const { user, isSignedIn, isSignedOut } = useUser();

  //  if (isSignedOut)  console.log('deconnexion')

  return (
    <div className='flex  justify-between  items-center  shadow-sm p-5 flex-col lg:flex-row'>
      <div className='flex gap-5 items-center mb-2 md:mb-2 lg:mb-0 '>
        {/* <img src="logo.svg" alt="logo" width={150} height={100} /> */}
        <img src={Logo} alt="logo" width={40} height={40} />
        <h2 className=' font-medium hidden md:block '>Toni Deplano</h2>
      </div>


      <ul className='  hidden md:flex gap-16'>
        <li className=' font-medium  hover:scale-105  transition-all cursor-pointer  hover:text-primary'><Link to={'/'} >Accueil</Link></li>
        <li className=' font-medium  hover:scale-105  transition-all cursor-pointer  hover:text-primary'>Rechercher</li>
        <li className=' font-medium  hover:scale-105  transition-all cursor-pointer  hover:text-primary'>Nouveau</li>
        <li className=' font-medium  hover:scale-105  transition-all cursor-pointer  hover:text-primary'>Précommande</li>
      </ul>

      {isSignedIn ?
        <div className='flex items-center md:mt-2 lg:mt-0 gap-2' >
          <div className='hidden md:block '>
          <UserButton/>
          </div>
          
          <Link to={'/profile'} >
            <Button>Placer une annonce</Button>

          </Link>
        </div>
        :
        <div>
          <SignInButton>
            <Button className='mt-3 lg:mt-0'>Connexion</Button>
          </SignInButton>
          {/* <Button>Placer une annonce</Button> */}
        </div>

      }

    </div>
  )
}

export default Header
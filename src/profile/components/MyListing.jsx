import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { db } from './../../../configs/index'
import { CarImages, CarListing } from './../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'


function MyListing() {

    const {user}=useUser();

    useEffect(() => {
      user&&getUserCarListing();

    
    
    }, [user])
    

    const getUserCarListing=async()=>{
        const result=await db.select().from(CarListing)
        .leftJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
        .where(eq(CarListing.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(CarListing.id))

        console.log('resultat mes annonces : ', result)
    }

    return (
        <div className=' mt-6'>
            <div className=' flex justify-between items-center'>
                <h2 className=' font-bold text-4xl' >Mes annonces</h2>
                <Link to={'/add-listing'} >
                    <Button>+ Ajouter une annonce</Button>
                </Link>
            </div>
        </div>
    )
}

export default MyListing
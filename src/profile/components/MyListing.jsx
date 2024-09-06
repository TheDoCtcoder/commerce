import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { db } from './../../../configs/index'
import { CarImages, CarListing } from './../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import Service from '@/Shared/Service'
import CarItem from '@/components/CarItem'
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from 'sonner'


function MyListing() {

    const { user } = useUser();
    const [carList, setCarList] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        user && getUserCarListing();



    }, [user])


    const getUserCarListing = async () => {
        const result = await db.select().from(CarListing)
            .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
            .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(CarListing.id))

        const resp = Service.FormatResult(result)
        console.log('resultat mes annonces : ', resp)
        setCarList(resp)
    }

    const removeItem = async(item) => {
         
      const result= await db.delete(CarListing)
      .where(eq(CarListing.id, item.id))

      if (result) {
        toast('annonce supprimée')
        // window.location.reload(false);
        navigate('/')
      }
        
    }

    return (
        <div className=' mt-6'>
            <div className=' flex justify-between items-center'>
                <h2 className=' font-bold text-4xl' >Mes annonces</h2>
                <Link to={'/add-listing'} >
                    <Button>+ Ajouter une annonce</Button>
                </Link>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-7 gap-5'>
                {carList.map((item, index) => (
                    <div key={index}>
                        <CarItem car={item} />
                         <div className=' p-2 bg-gray-50  rounded-lg flex justify-between gap-3'>
                            <Link to={'/add-listing?mode=edit&id='+item?.id} className=' w-full'>
                                <Button variant="outline" className=" w-full ">Modifier</Button>
                            </Link>

                                <Button onClick={() =>removeItem(item)}  variant='destructive'><FaRegTrashCan/></Button>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyListing
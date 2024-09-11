import { Button } from '@/components/ui/button'
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";

function Pricing({carDetail}) {


  return (
    <div className=' p-10 rounded-xl border shadow-md'>
        <h2 className=' text-xl  font-medium text-primary'>Prix</h2>
        <h2 className=' font-bold text-4xl'>€ {carDetail?.sellingPrice}</h2>


        <Button className=' w-full mt-7'  size="lg" ><MdOutlineLocalOffer className=' text-lg mr-2' /> Faire une offre</Button>
        </div>
  )
}

export default Pricing
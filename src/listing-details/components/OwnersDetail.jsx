import { Button } from '@/components/ui/button'
import React from 'react'

function OwnersDetail({carDetail}) {
  return (
    <div className=' p-5 border rounded-xl shadow-md mt-3'>
        <h2 className=' font-medium text-2xl mb-3 text-primary'>info sur le Propriétaire</h2>
    
        {/* <img className='w-[70px] h-[70px] rounded-full ' src={carDetail?.userImageUrl} /> */}
        <h2 className=' mt-2 font-bold text-xl'>{carDetail?.userName}</h2>
        {/* <h2 className=' mt-2  text-gray-500'>{carDetail?.createdBy}</h2> */}

        <Button className=' w-full mt-6' >message au propriétaire</Button>
        
    </div>
  )
}

export default OwnersDetail
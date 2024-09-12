import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa";

function Features({ carDetail }) {

  const [option, setOption] = useState([])

  useEffect(() => {
    if (carDetail) {
      setOption(Object.keys(carDetail.features))
    } else {
      console.log('L\'objet est null ou undefined');
    }

  }, [carDetail])

  return (

    <div className=' p-10 border shadow-md rounded-xl my-7'>
      <h2 className=' font-medium text-2xl text-primary'>Options</h2>

      <div className=' grid grid-cols-2 md:grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-4  gap-7'>
        {option ? option.map((feature, index) => (
          <div key={index} className='flex gap-2 items-center'>
            <FaCheck className=' text-lg p-1 rounded-full bg-blue-100 text-primary' />
            <h2>{feature}</h2>
          
          </div>))
          : <div>Bonsoir</div>}
      </div>
    </div>

  )
}

export default Features
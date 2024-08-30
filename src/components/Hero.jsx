import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
        <div className=' flex flex-col  items-center p-10 py-20  gap-6 h-[650px] w-full bg-[#eef0fc]'>
            <h2 className=' text-lg'>Trouvez des voitures à la vente ou à la location près de chez vous.</h2>
            <h2 className=' text-[60px] font-bold'>Trouvez votre voiture de rêve.</h2>
            <Search/>
            <img src="/tesla.png" alt="tesla" className=' mt-10' />
        </div>
        
        </div>
  )
}

export default Hero
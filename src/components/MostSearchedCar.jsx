import FakeData from '@/Shared/FakeData';
import React from 'react'
import CarItem from './CarItem';

import MesDatas from '../Shared/mostsearched.json';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

function MostSearchedCar() {
    // console.log(MesDatas.carList);
    console.log(MesDatas);
    
  return (
    <div className='mx-5 md:mx-24'> 
        <h2 className=' font-bold  text-3xl text-center mt-16  mb-7'>Voitures les plus recherchées</h2>

        <Carousel>
  <CarouselContent>
  {MesDatas.map((car,index)=>(
    // <CarouselItem key={index} className="basis-1/4">
    <CarouselItem key={index} className="md:basis-1/2  lg:basis-1/3 xl:basis-1/4 ">
            <CarItem car={car} />
            {/* <CarItem car={car}/> */}
            </CarouselItem>

    ))}
    
  
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>



    </div>
  )
}

export default MostSearchedCar
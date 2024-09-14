import Service from '@/Shared/Service';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { and, eq, gte, lte } from 'drizzle-orm';
import Header from '@/components/Header';
import Search from '@/components/Search';
import CarItem from '@/components/CarItem';

function SearchByOptions() {

const [searchParam]=useSearchParams();
const [carList,setCarList]=useState([])
const condition=searchParam.get('condition')
const make=searchParam.get('make')
const price=searchParam.get('sellingPrice')

console.log(condition,make,price);


useEffect(()=>{
    GetcarList()
},[])

const GetcarList =async()=>{

  if ((condition) =='undefined' && (make=='undefined')) {
    console.log('je remplis les conditions undefined partout ');
    
    const result=await db.select().from(CarListing)
  .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
  .where(lte(CarListing.sellingPrice, price))

  const resp=Service.FormatResult(result)
  console.log('response de getcarlist quand tout undefined',resp);
  setCarList(resp)

  }

  else 

   { //debut du else 
    
    
    console.log('je ne remplis  pas les conditions undefined partout ')
  

  if ((price !== undefined) && (make !== undefined) && (condition !== undefined))
    {
      const result=await db.select().from(CarListing)
  .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
      .where(
        and(
          lte(CarListing.sellingPrice, price),
          eq(CarListing.condition, condition),
          eq(CarListing.make, make)
        )
      )

      const resp=Service.FormatResult(result)
      console.log(resp);
      setCarList(resp)
     
    }


  if ( (condition !==undefined) && (make == 'undefined') )
    {
      console.log('recherche seulement par condition')
      const result=await db.select().from(CarListing)
  .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
      .where(
        and(
          eq(CarListing.condition, condition),
        )
      )

      const resp=Service.FormatResult(result)
      console.log(resp);
      setCarList(resp)
     
    }

    if ( (condition =='undefined') && (make !=='undefined') )
      {
        console.log('recherche seulement par condition')
        const result=await db.select().from(CarListing)
    .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
        .where(
          and(
            eq(CarListing.make, make),
          )
        )
  
        const resp=Service.FormatResult(result)
        console.log(resp);
        setCarList(resp)
       
      }
    

      if ( (condition =='undefined') && (make !==undefined)  )
        {
          console.log('recherche seulement par prix')
          const result=await db.select().from(CarListing)
      .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
          .where(
            and(
              eq(CarListing.make,make),
              lte(CarListing.sellingPrice, price),
            )
          )
    
          const resp=Service.FormatResult(result)
          console.log(resp);
          setCarList(resp)
         
        }
    
      if ( (condition !==undefined) && (make =='undefined')  )
        {
          console.log('recherche seulement par prix et condition')
          const result=await db.select().from(CarListing)
      .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
          .where(
            and(
              eq(CarListing.condition,condition),
              lte(CarListing.sellingPrice, price),
            )
          )
    
          const resp=Service.FormatResult(result)
          console.log(resp);
          setCarList(resp)
         
        }


      if ( (condition ==undefined) && (make =='undefined')  )
        {
          console.log('recherche seulement par prix et condition')
          const result=await db.select().from(CarListing)
      .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
          .where(
            and(
              eq(CarListing.condition,condition),
              lte(CarListing.sellingPrice, price),
            )
          )
    
          const resp=Service.FormatResult(result)
          console.log(resp);
          setCarList(resp)
         
        }


}


} //fin  du else


  return (
    <div>
    <Header />
    {/* <div className=' p-16  bg-slate-600 flex justify-center'>
        <Search/>
    </div> */}
    <div className='p-10 md:px-20'>
        <h2 className=' font-bold text-4xl '>Resultat de la recherche</h2>

            {/* Liste par catégorie */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mt-7'>
           {carList?.length>0? carList.map((item,index)=>(
                <div key={index}>
                    <CarItem car={item} />

                </div>
            )):
            
            [1,2,3,4,5,6,7,8].map((item,index)=>(
                <div key={index} className=' h-[320px] rounded-xl bg-slate-200  animate-pulse'>
                </div>
            ))

        }
            </div>
        

    </div>
</div>
  )
}

export default SearchByOptions
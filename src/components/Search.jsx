import React, { useState } from 'react'

import { Separator } from "@/components/ui/separator"
import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Link } from 'react-router-dom';


function Search() {

    const [condition,setCondition]= useState()
    const [make,setMake]= useState()
    const [price,setPrice]= useState(2000000)

    return (
        <div className=' p-2  md:p-5 bg-white  rounded-md  
    md:rounded-full flex-col  md:flex  md:flex-row gap-10  px-5
     items-center w-[60%] '>
            <Select onValueChange={(value)=>setCondition(value)}>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                    <SelectValue placeholder="Voitures" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Nouvelle">Nouvelle</SelectItem>
                    <SelectItem value="Occasion">Occasion</SelectItem>
                </SelectContent>

            </Select>
            <Separator orientation="vertical"  className="hidden md:block" />
            <Select onValueChange={(value)=>setMake(value)}>
                <SelectTrigger className="  outline-none md:border-none w-full shadow-none text-lg">
                    <SelectValue placeholder="Marques" />
                </SelectTrigger>
                <SelectContent>
                    {Data.CarMakes.map((maker,index)=>(
                    <SelectItem value={maker.name}>{maker.name}</SelectItem>

                    )) }
                </SelectContent>
            </Select>
            <Separator orientation="vertical" className="hidden md:block" />
            <Select onValueChange={(value)=>setPrice(value)}>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                    <SelectValue placeholder="Prix" />
                </SelectTrigger>
                <SelectContent>
                {Data.Pricing.map((price,index)=>(
                    <SelectItem value={price.amount}>{price.amount}</SelectItem>
                )) }
                  
                </SelectContent>
            </Select>
            <Link to={'/search?condition='+condition+'&make='+make+'&sellingPrice='+price}>
            <CiSearch className=' text-[50px]  bg-primary rounded-full p-3 text-white hover:scale-105
             transition-all  cursor-pointer'/>
            </Link>

        </div>
    )
}

export default Search
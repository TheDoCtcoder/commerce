import InputField from '@/add-listing/components/InputField'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

function FinancialCalc({carDetail}) {

const [carPrice,setCarPrice]=useState(0)
const [interestRate,setInterestRate]=useState(0)
const [duree,setDuree]=useState(0)
const [paiement,setPaiement]=useState(0)
const [paiementmensuel,setPaiementMensuel]=useState(0)

const CalculPaiementMensuel=()=>{
const Principal=carPrice-paiement
const Interetmensuel= interestRate/1200
const paiementmensuel= Principal*Interetmensuel*Math.pow(1+Interetmensuel,duree)/
(Math.pow(1+Interetmensuel,duree)-1)

console.log('paiement mensuel : ',paiementmensuel.toFixed(2));
setPaiementMensuel(paiementmensuel.toFixed(2));


}

  return (
    <div className=' p-10 border rounded-xl shadow-md mt-7'>
        <h2 className=' font-medium text-2xl text-primary'>Calcul du prêt</h2>
        <div className='flex gap-5 mt-5' >
        <div className='w-full'>
            <label>Prix €</label>
            <Input type="number" onChange={(e)=>setCarPrice(e.target.value)} />
        </div>
        <div className='w-full'>
            <label>Taux d'interêt</label>
            <Input type='number' onChange={(e)=>setInterestRate(e.target.value)} />
        </div>
        </div>
        <div className='flex gap-5 mt-5' >
        <div className='w-full'>
            <label>Durée du prêt (en mois)</label>
            <Input type="number" onChange={(e)=>setDuree(e.target.value)} />
        </div>
        <div className='w-full'>
            <label>Acompte</label>
            <Input type='number' onChange={(e)=>setPaiement(e.target.value)}/>
        </div>
        </div>
        {paiementmensuel>0&& <h2 className=' font-medium text-2xl mt-5 text-primary'>Votre paiement mensuel est de : <span className=' text-4xl font-bold'>{paiementmensuel} €</span> </h2>}
        <Button className=' w-full mt-7' size="lg" 
        onClick={CalculPaiementMensuel}
        >Calcul</Button>
    </div>
  )
}

export default FinancialCalc
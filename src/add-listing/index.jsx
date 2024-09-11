import Header from '@/components/Header'
import React, { useState } from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import { Separator } from '@/components/ui/separator'
import features from './../Shared/features.json'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { CarListing,CarImages } from './../../configs/schema'
import { db } from './../../configs'
import TextAreaChamp from './components/TextAreaChamp'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'
import { BiLoaderAlt } from "react-icons/bi"
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'
import { useEffect } from 'react'
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'


function AddListing() {

  const [formData, setFormData] = useState([])
const [featuresData, setFeaturesData] = useState([])  
const [triggerUploadImages, setTriggerUploadImages] = useState()  
const [searchParams]=useSearchParams()
const [loader,setLoader]=useState(false)
const [carInfo,setCarInfo]=useState([])
const navigate=useNavigate()
const {user} = useUser()
const [fichierVide,setFichierVide]=useState([])
const [fichierImageBD,setFichierImageBD]=useState([])

const mode=searchParams.get('mode');
const recordId=searchParams.get('id')

useEffect(()=>{
if(mode=='edit')
{
  GetListingDetail()
}
},[])

const GetListingDetail=async()=>{
  const result=await db.select().from(CarListing)
  .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
  .where(eq(CarListing.id,recordId))


  const resp=Service.FormatResult(result)
  setCarInfo(resp[0])
  setFormData(resp[0])
  console.log(resp);
  setFeaturesData(resp[0].features)

  
}



  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))

    console.log(formData);
  }

  const handleFeatureChange =(name, value) => {

    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value
    }))

    console.log(featuresData);

  }

  const onSubmit=async(e)=>{
    setLoader(true)
    e.preventDefault();
    console.log(' le formulaire est ', formData);
    toast("Mise à jours de l'annonce...")
    
    if(mode=='edit')
    {
        const result =await db.update(CarListing).set({
          ...formData,
          features:featuresData,
          createdBy:user?.primaryEmailAddress?.emailAddress,
          postedOn:moment().format('DD,MM,YYYY')
        }).where(eq(CarListing.id,recordId)).returning({id:CarListing.id})
        console.log(result);
        setTriggerUploadImages(result[0]?.id);
        setLoader(false)
        // navigate('/profile')

        
    }
    
    else {
    try {
      
      const result = await db.insert(CarListing).values({
        ...formData,
        features:featuresData,
        createdBy:user?.primaryEmailAddress?.emailAddress,
        userName:user?.fullName,
        userImageUrl:user?.imageUrl,
        postedOn:moment().format('DD,MM,YYYY')
      }).returning({id:CarListing.id});

      setLoader(false)
      
    
    if (result) {
      console.log('Data saved')
      console.log('result')
      console.log(result[0]?.id)
      setTriggerUploadImages(result[0]?.id);
      setLoader(false)
      // window.location.reload(false);
      // navigate('/profile')
      
    }

    } catch (error) {
      console.log('erreur : ',error)
    }
  }

  }

 

  return (
    <div>
      <Header />
      <div className='  px-10 md:px-20 my-10'>
        <h2 className=' font-bold text-4xl'>Ajoutez une annonce</h2>
        <form className=' p-10 border rounded-xl mt-10'>
          <div>
            <h2 className=' font-medium  text-xl  mb-6'>Details de la voiture</h2>
            <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className=' text-sm flex gap-2 items-center mb-1'>
                    <IconField icon={item?.icon}/>
                    {item?.label} {item.required && <span className=' text-red-500'>*</span>}</label>
                  {item.fieldType == 'text' || item.fieldType == 'number'
                    ? <InputField item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                    : item.fieldType == 'dropdown'
                      ? <DropdownField item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                      : item.fieldType == 'textarea'
                      ? <TextAreaChamp item={item}  handleInputChange={handleInputChange} carInfo={carInfo}/>
                        :null
                        }
                </div>
              ))}
            </div>
          </div>
          <Separator className=" my-6" />
          {/* features list */}
          <div>
            <h2 className=' font-medium text-xl my-6'>Options</h2>
            <div className=' grid grid-cols-2 md:grid-cols-3 gap-2'>
              {features.features.map((item, index) => (
                // <div key={index} className=' flex gap-2 items-center' >
                <div key={index} className=' flex gap-2  items-center' >
                  {/* <Checkbox onCheckedChange={(value)=>handleInputChange(item.name,value)} /> <h2>{item.label}</h2> */}
                  <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.label,value)}
                    checked={featuresData?.[item.label]}/>
                     <h2>{item.label}</h2>
                </div>

              ))}
            </div>
          </div>
          {/* car image  */}
          <Separator className='my-6'/>
          <UploadImages triggerUploadImages={triggerUploadImages} 
          carInfo={carInfo}
          mode={mode}
           setLoader={(v)=>{setLoader(v)}}
           setFichierVide={(v)=>{setFichierVide(v)}}
           setFichierImageBD={(v)=>{setFichierImageBD(v)}}
       
           />
          <div className=' mt-10 flex justify-end'>
            
            { (fichierVide.length>0 || fichierImageBD.length>0)? 
               <Button onClick={(e)=>onSubmit(e)}>Envoyez </Button>:
               <Button disabled={true} className="bg-red-500">Envoyez </Button>}
            
         
            
            
            
           
          </div>
        </form>
        
        
      </div>
    </div>
  )
}

export default AddListing
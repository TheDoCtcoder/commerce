
import { Button } from '@/components/ui/button';
import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { CarImages } from './../../../configs/schema';
import { db } from './../../../configs/index';
import { eq } from 'drizzle-orm';




function UploadImages({triggerUploadImages,setLoader, carInfo, mode, setFichierImageBD,setFichierVide}) {

  const [selectedFileList,setSelectedFileList] = useState([])
  const [editCarImageList,setEditCarImageList] = useState([])

  useEffect(()=>{
    if(mode=='edit')
    {

      setEditCarImageList([]);
      carInfo?.images?.forEach((image) => {
      
        setEditCarImageList(prev=>[...prev,image?.imageUrl])
    
      })
      console.log('image list : ', carInfo?.images)
      setFichierImageBD(prev=>[...prev,carInfo?.images])
     
    }
    },[carInfo])


  useEffect(()=>{
    if(triggerUploadImages)
    
      
      
      UploadImageToServer()
    
  
  },[triggerUploadImages])

  

  const onFileSelected =(event)=>{

      const files=event.target.files
      console.log(files)
      setFichierVide((prev)=>[...prev,files])

      for (let i = 0; i < files?.length; i++) {
        const file = files[i];
        console.log(file);
        setSelectedFileList((prev)=>[...prev,file])
        
      }
  }

  const onImageRemove = (image,index)=>{
    const result=selectedFileList.filter((item)=>item!=image);
    setSelectedFileList(result)
    console.log('image list de editCarimagelist de onimageremove : ', editCarImageList)
    console.log('image dans la db ? ',carInfo?.images)

    if (result.length>0){
      console.log('fichier image non vide ',result)}
      else {
        console.log('fichier image vide ',result)
        setFichierVide(result)
      }
  }

  const onImageRemoveFromDB = async(image,index)=>{
    const result=await db.delete(CarImages).where(eq(CarImages.id,carInfo?.images[index]?.id))
    .returning({id:CarImages.id})
    const imageList=editCarImageList.filter((item)=>item!=image)
    setEditCarImageList(imageList)
    setFichierImageBD(imageList)
  
    console.log('selected file lsite',selectedFileList)
    console.log('imagelist after remove on db',imageList)
  }



  const UploadImageToServer = async () => {
    console.log('je suis dans le composant toserver')
    // setLoader(true)

    await selectedFileList.forEach(async (file) => {
      const fileName = Date.now() + '.jpeg';
      const storageRef = ref(storage, 'car-marketplace/' + fileName)
      const metaData = {
        contentType: 'image/jpeg'
      }
      await uploadBytes(storageRef, file, metaData).then((snapShot) => {
        console.log('uploaded files...');

      }).then(resp => {
        getDownloadURL(storageRef).then(async (downloadUrl) => {
          console.log(downloadUrl)     
          await db.insert(CarImages).values({
            imageUrl: downloadUrl,
            carListingId: triggerUploadImages
          })
        })
      })
      setLoader(false)
    })
  }

  return (
    <div>
        <h2 className=' font-medium text-xl my-3'>Ajoutez des photos de la voiture</h2>
        <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
            { mode=='edit'&&
            editCarImageList?.map((image,index)=>(
              <div key={index}>
              <IoMdCloseCircle className=' absolute m-2 text-lg text-white'
              onClick={()=>onImageRemoveFromDB(image,index)} />
              <img src={image}  className=' w-full h-[130px] object-cover rounded-xl'/>
              </div>
            ))
          }
          

            {selectedFileList.map((image,index)=>(
              <div key={index}>
                <IoMdCloseCircle className=' absolute m-2 text-lg text-white'
                onClick={()=>onImageRemove(image,index)} />
                  <img src={URL.createObjectURL(image)}  className=' w-full h-[130px] object-cover rounded-xl'/>
              </div>
            ))}
            <label htmlFor='upload-images'>
            <div className=' border rounded-xl border-dotted border-primary
             bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                <h2 className=' text-lg text-center text-primary'>+</h2>
            </div>
            </label>
            <input type='file' multiple={true} id='upload-images'  className='opacity-0'
            onChange={onFileSelected} />
        </div>
        {/* <Button onClick={UploadImageToServer} >Upload Images</Button> */}
    </div>
  )
}

export default UploadImages
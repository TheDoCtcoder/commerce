
import { Button } from '@/components/ui/button';
import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { CarImages } from './../../../configs/schema';
import { db } from './../../../configs/index';




function UploadImages({triggerUploadImages,setLoader}) {

  const [selectedFileList,setSelectedFileList] = useState([])


  useEffect(()=>{
    if(triggerUploadImages)
    
      
      
      UploadImageToServer()
    
  
  },[triggerUploadImages])

  

  const onFileSelected =(event)=>{

      const files=event.target.files
      console.log(files)

      for (let i = 0; i < files?.length; i++) {
        const file = files[i];
        console.log(file);
        // const objectUrl=URL.createObjectURL(file)
        setSelectedFileList((prev)=>[...prev,file])
        
      }
  }

  const onImageRemove = (image,index)=>{
    const result=selectedFileList.filter((item)=>item!=image);
    setSelectedFileList(result)
  }



  const UploadImageToServer = async () => {
    console.log('je suis dans le composant toserver')
    setLoader(true)

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
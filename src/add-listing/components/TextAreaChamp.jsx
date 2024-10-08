
import { Textarea } from '@/components/ui/textarea'

import React from 'react'



function TextAreaChamp({item, handleInputChange,carInfo}) {
  console.log("item de textarea ", item.name, item.required)
  return (
    <div>
        {/* <Textarea
         required={item.required} 
         onChange={(e)=>(handleInputChange(item.name,e.target.value))}
        />  */}
        <Textarea required={item.required} defaultValue={carInfo?.[item.name]}
        onChange={(e)=>(handleInputChange(item.name,e.target.value))} /> 
        
        
      </div>
  )
}

export default TextAreaChamp
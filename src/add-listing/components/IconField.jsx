import React from 'react'

import {FaCalendarAlt, FaCar, FaCarSide, FaCheckCircle} from 'react-icons/fa'
import {FaCircle, FaClipboardList, FaCogs, FaDollarSign} from 'react-icons/fa'
import {FaDoorClosed, FaFileAlt, FaGasPump, FaIdCard} from 'react-icons/fa'
import {FaIndustry, FaMoneyBillAlt, FaPalette, FaRoad} from 'react-icons/fa'
import {FaTachometerAlt, FaTag, FaTags, FaWrench} from 'react-icons/fa'

const iconMap ={
    FaClipboardList:<FaClipboardList/>,
     FaCalendarAlt:<FaCalendarAlt />,
      FaCar: <FaCar/>,
      FaCarSide: <FaCarSide/>,
      FaCheckCircle: <FaCheckCircle/>,
      FaCircle: <FaCircle/>,
      FaCogs: <FaCogs/>,
      FaDollarSign: <FaDollarSign/>,
      FaDoorClosed: <FaDoorClosed/>,
      FaFileAlt: <FaFileAlt/>,
      FaGasPump: <FaGasPump/>,
      FaIdCard: <FaIdCard/>,
      FaIndustry: <FaIndustry/>,
      FaMoneyBillAlt: <FaMoneyBillAlt/>,
      FaPalette: <FaPalette/>,
      FaRoad: <FaRoad/>,
      FaTachometerAlt: <FaTachometerAlt/>,
      FaTag: <FaTag/>,
      FaTags: <FaTags/>,
      FaWrench: <FaWrench/>
}


function IconField({icon}) {
  return (
    <div className=' text-primary  bg-blue-100 p-1.5  rounded-full'>{iconMap[icon]}</div>
  )
}

export default IconField
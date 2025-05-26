import React from 'react'
import { FaCar } from "react-icons/fa";
function TitleStore() {
  return (
    <div className='container'>
      <div className='h-[170px] w-[170px]'>
        <img className='h-[auto] w-full object-cover' src='./assets/images/logo.png' alt='' />
      </div>
      
      <FaCar />
    </div>
  )
}

export default TitleStore

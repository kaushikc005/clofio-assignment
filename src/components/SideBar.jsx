import React from 'react'
import {RiCloudyFill} from 'react-icons/ri'
import {BiSolidCube} from 'react-icons/bi'
const SideBar = () => {
  return (
    <section className='max-w-min p-4 bg-blue-100 h-screen '>
        <RiCloudyFill size="50px" className='text-blue-700 mt-4 mb-8'/>
        <div className='flex flex-col gap-4'>
            <BiSolidCube className='text-5xl text-gray-400'/>
            <BiSolidCube className='text-5xl text-gray-400'/>
            <BiSolidCube className='text-5xl text-gray-400'/>
            <BiSolidCube className='text-5xl text-gray-400'/>
            <BiSolidCube className='text-5xl text-gray-400'/>
            <BiSolidCube className='text-5xl text-gray-400'/>
            <BiSolidCube className='text-5xl text-gray-400'/>
        </div>



    </section>
  )
}

export default SideBar
import React from 'react'
import {RiCloudyFill} from 'react-icons/ri'
import {BiSolidCube} from 'react-icons/bi'
const SideBar = () => {
  return (
    <section className='max-w-min p-4 bg-blue-100 h-screen xs:hidden md:block '>
        <RiCloudyFill size="50px" className='text-blue-700 mt-4 mb-8'/>
        <div className='flex flex-col gap-4'>
            <BiSolidCube className='text-5xl text-gray-400 mt-2 mb-2'/>
            <BiSolidCube className='text-5xl text-gray-400 mt-2 mb-2'/>
            <BiSolidCube className='text-5xl text-gray-400 mt-2 mb-2'/>
            <BiSolidCube className='text-5xl text-gray-400 mt-2 mb-2'/>
            <BiSolidCube className='text-5xl text-gray-400 mt-2 mb-2'/>
            <BiSolidCube className='text-5xl text-gray-400 mt-2 mb-2'/>
            <BiSolidCube className='text-5xl text-gray-400 mt-2 mb-2'/>
        </div>
        
        <div className='bg-[#b3a7d3] rounded-[50%] p-4 mt-8'>
        <p className='font-bold'>DK</p>
        </div>
        



    </section>
  )
}

export default SideBar
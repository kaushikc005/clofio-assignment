import React from 'react'

const Cards = ({data}) => {
  return (
    <section className='border border-black rounded-md w-64 flex flex-col items-center p-2'> 
        <p className='text-lg font-semibold'>${data.money}</p>
        <p>{data.desc}</p>
        
    </section>
  )
}

export default Cards
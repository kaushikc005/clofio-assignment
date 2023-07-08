import React from 'react'
import Cards from './Cards'

const Feed = ({cardData}) => {
  return (
    <section className='w-screen flex flex-col items-center'>
            <h1 className='text-left'>Hi,Jennie Moss</h1>

            <div className='flex gap-4'>
            {cardData.map((item,key) => (
                <Cards data={item} />
            ))}
            </div>
            

    </section>
  )
}

export default Feed
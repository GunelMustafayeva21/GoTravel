import React from 'react'

const PlaceCard = ({img, title, location, description, price, type}) => {
  return (
    <div className='shadow-2xl rounded-xl p-4 border-2 border-primary/50 hover:scale-110 transition duration-700'>
      <div>
        <img src={img} alt="" className='rounded-xl mx-auto w-full h-[220px] object-cover' />
      </div>

      <div className='space-y-2 mt-2'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <div className="flex justify-between items-center border-t-2 border-primary/50 mt-3">
          <div className='opacity-70'>
            <p>{type}</p>
          </div>
          <div className='text-2xl font-bold'>
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceCard

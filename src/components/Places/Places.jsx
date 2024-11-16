import React from 'react'
import PlaceCard from './PlaceCard'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Image5 from '../../assets/image5.png'
import Image6 from '../../assets/image6.png'


const PlaceCards=[
    {
        img:Image1,
        title:"Boat Tour",
        location:"USA",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax"
    },
    {
        img:Image2,
        title:"Boat Tour",
        location:"USA",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax"
    },
    {
        img:Image3,
        title:"Boat Tour",
        location:"USA",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax"
    },
    {
        img:Image4,
        title:"Boat Tour",
        location:"USA",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax"
    },
    {
        img:Image5,
        title:"Boat Tour",
        location:"USA",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax"
    },
    {
        img:Image6,
        title:"Boat Tour",
        location:"USA",
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax"
    }
   
]

const Places = () => {
  return (
    <div className='bg-gray-50 p-10'>
      <div className='container'>
        <h1 className='my-8 py-2 pl-2 border-l-8 border-primary/50 text-3xl font-bold'>Best Places To Visit</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {PlaceCards.map((item, index)=>(
                <PlaceCard key={index} {...item}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Places

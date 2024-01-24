import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {
    let review = props.review;  //
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10] mx-atuo '>
        <img src={review.image}
        className='aspect-square rounded-full w-[140px] h-[140px] z-25'>
        </img>

        <div className='rounded-full w-[140px] h-[140px] z-[-10] bg-violet-500 top-[-6px] absolute left-[10px]' ></div>
      </div>
      <div className='text-center mt-7'>
        <p className='font-bold text-2xl font-serif'>{review.name} </p>
      </div>

        <div className='text-violet-500 uppercase text-x '>
            <p>{review.job}</p>
        </div>

        <div className='text-violet-500 mx-auto mt-5'>
            <FaQuoteLeft/> 
        </div>

        <div className='text-center mt-4 text-slate-600 mr-5 ml-5'>
            {review.text}
        </div>

        <div className='text-violet-500 mx-auto mt-5'>
            <FaQuoteRight ></FaQuoteRight>
        </div>

        

    </div>
  )
}

export default Card

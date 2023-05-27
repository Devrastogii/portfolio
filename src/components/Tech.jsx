import React from 'react'
import './flippable.css'
import Card from './card/Card'
import '../index.css';

const Tech = () => {
  return (
    <>
        <div className='flippable-card-container tech_styling'>
        <div className='pl-12 text-white'>
                <div className='text-[32px] mt-40 font-medium'>Tech Stack & Softwares</div>
                <div><hr className='border-2 border-[#00D1FF] w-96' /></div>
          </div>
            <Card />
        </div>
    </>
  )
}

export default Tech

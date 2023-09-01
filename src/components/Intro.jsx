import React from 'react'
import bgimage from '../assets/bgimage.jpg'

const Intro = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl md:text-3xl'>Best Gym Center</p>
                <h1 className='font-bold text-4xl md:text-6xl py-4'>GYM MANAGEMENT</h1>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgimage} alt="/" />
            </div>

        </div>

    </div>
  )
}

export default Intro
import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl'>WELCOME TO OUR GYM</h1>
                <p className='text-3xl py-6 text-gray-600'>Welcome to the Best Gym Center, your ultimate destination for fitness and well-being. With state-of-the-art facilities and a dedicated team of trainers, we are committed to helping you achieve your fitness goals.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-5xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-5xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Open Work</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-5xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Membership</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
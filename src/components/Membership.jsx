import React from 'react'
import {CheckIcon} from '@heroicons/react/solid'

const Membership = () => {
  return (
    <div name='membership' className='w-full text-white my-24 '>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay '></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl'>PRICING</h2>
                <h3 className='text-5xl py-8 text-white font-bold'>The right price for your research.</h3>
                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi quaerat sint, eveniet maxime eaque necessitatibus, totam similique culpa ratione deleniti! Magnam, eius deleniti sint ullam facere accusamus doloribus sit?</p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase py-1 px-3 rounded-2xl bg-indigo-200 text-indigo-900 text-small'>Standard</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl text-slate-500 py-8'>Lorem ipsum dolor sit amet.</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase py-1 px-3 rounded-2xl bg-indigo-200 text-indigo-900 text-small'>Premium</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$100<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl text-slate-500 py-8'>Lorem ipsum dolor sit amet.</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600' />Lorem ipsum dolor sit amet.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Membership
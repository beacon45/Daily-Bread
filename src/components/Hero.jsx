import React from 'react'
import log from '../Assets/herobody.jpg'


export default function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        {/*Overlay*/}
        <div className='max-h-[500px] relative font-abc '>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center items-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 '>The <span className='text-cyan-400'>Delicacies</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200'><span className='text-fuchsia-700'>you</span> will <span className='text-yellow-700'>Love</span></h1>
            </div>
        <img className='w-full max-h-[500px] object-cover' src={log} alt='/'/>
        </div>
    </div>
  )
}

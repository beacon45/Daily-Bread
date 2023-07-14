import React from 'react'
import first from '../Assets/bowl.jpg'
import second from '../Assets/eat.jpg'
import third from '../Assets/dessert.jpg'

export default function Feature() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*cards*/}
        <div className=' relative rounded-xl '>
            {/*Overlay */}
            <div className=' absolute w-full h-full bg-black/40 rounded-xl text-white flex flex-col justify-center items-center'>
                <p className=' font-bold font-abc text-2xl'>Are U on Diet??</p>
                <p className=' py-2'>Eat healthy, Live healthy</p>
                {/*Button */}
                <button className=' border-2 border-black rounded-lg bg-white text-black mx-2 absolute bottom-4 hover:bg-blue-500 hover:text-white p-1'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={first} alt='/'/>
        </div>

        {/*cards 2*/}
        <div className=' relative rounded-xl '>
            {/*Overlay */}
            <div className=' absolute w-full h-full bg-black/40 rounded-xl text-white flex flex-col justify-center items-center'>
                <p className=' font-bold font-abc text-2xl'>Cheesy Margherita</p>
                <p className=' py-2'>Mood is equal to Food</p>
                {/*Button */}
                <button className=' border-2 border-black rounded-lg bg-white text-black mx-2 absolute bottom-4 hover:bg-blue-500 hover:text-white p-1'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={second} alt='/'/>
        </div>

        {/*cards 3*/}
        <div className=' relative rounded-xl '>
            {/*Overlay */}
            <div className=' absolute w-full h-full bg-black/40 rounded-xl text-white flex flex-col justify-center items-center'>
                <p className=' font-bold font-abc text-2xl'>Desserts of the Day!!</p>
                <p className=' py-2'>Sweet as u Like</p>
                {/*Button */}
                <button className=' border-2 border-black rounded-lg bg-white text-black mx-2 absolute bottom-4 hover:bg-blue-500 hover:text-white p-1'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={third} alt='/'/>
        </div>
    </div>
  )
}

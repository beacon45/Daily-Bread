import React from 'react'
import { categories } from '../Data/Data.js'

export default function Categories() {
    return (
        <div className='max-w-[1640px] m-auto p-4 py-12'>
            <h1 className=' font-abc font-bold text-4xl text-slate-800 text-center'>Best Sellers</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
                {categories.map((items, index) => (
                    <div key={index} className=' flex justify-between bg-teal-200 items-center rounded-xl px-2 border-2 border-red-600'>
                        <h2 className=' font-bold font-abc sm:text-xl'>{items.name}</h2>
                        <img className='w-20' src={items.image}
                            alt={items.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { data } from '../Data/Data.js'

export default function Food() {
    const [foods, setFoods] = useState(data);
    {/*Filter by Food Type*/}
    const filterFood=(category)=>{
        setFoods(
            data.filter((items)=>{
                return items.category===category;
            }
            )
        )
    }
    {/*Filter by Price */}
    const filterPrice=(price)=>{
        setFoods(
            data.filter((items)=>{
                return items.price===price;
            }
            )
        )
    }
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12'>
            <h1 className=' font-abc font-bold text-6xl text-center text-black'>Menu Box</h1>
            {/*Filter Food*/}
            <div className='flex flex-col mt-6 lg:flex-row justify-between'>
                {/*Categories*/}
                <p className=' font-abc font-bold text-2xl text-gray-700'>Filter Type</p>
                <div className='flex justfiy-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>All</button>
                    <button onClick={()=>filterFood('pizza')} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>Pizzas</button>
                    <button onClick={()=>filterFood('burger')} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>Burgers</button>
                    <button onClick={()=>filterFood('salad')} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>Salads</button>
                    <button onClick={()=>filterFood('chicken')} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>Chicked</button>
                </div>
            </div>

            {/*Filter Price*/}
            <div className='flex flex-col mt-6 lg:flex-row justify-between'>
                {/*Categories*/}
                <p className=' font-abc font-bold text-2xl text-gray-700'>Filter Price</p>
                <div className='flex justfiy-between flex-wrap'>
                    <button onClick={()=>filterPrice('5$')} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>5$</button>
                    <button onClick={()=>filterPrice('8$')} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>8$</button>
                    <button onClick={()=>filterPrice('14$')} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>14$</button>
                    <button onClick={()=>filterPrice('20$')} className=' font-abc m-2 px-4 py-2 border-2 border-black rounded-xl bg-slate-50 text-black hover:bg-slate-900 hover:text-white '>20$</button>
                </div>
            </div>

            {/*Display Food*/}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className=' relative border shadow-lg rounded-lg justify-center'>
                        <img
                            src={item.image}
                            alt={item.name}
                            className='w-full h-[200px] object-cover rounded-t-lg hover:scale-105 duration-300'
                        />
                        <div className='flex justify-between font-bold font-abc px-2 py-3 items-center'>
                            <p className=' text-black my-2'>{item.name}</p>
                            <p>
                                <span className='bg-white text-black border-2 border-black rounded-xl p-2 hover:bg-slate-900 hover:text-white'>
                                    {item.price}
                                </span>
                            </p>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

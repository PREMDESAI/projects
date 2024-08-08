import { ProductCard } from '@/components/product-card'
import React from 'react'
import { getAllProducts } from '@/server/actions/index'

const page = async () => {
    const productList = await getAllProducts()
    console.log(productList)
  return (
    <div className='w-full min-h-screen bg-[#0B1120] text-white'>
        <div className='w-full text-white'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='max-w-[80%] text-3xl font-extrabold text-center mt-12 md:text-5xl'>Trending</h1>
            </div>
            <div className='mt-10 flex flex-col'>
                <div className='flex flex-wrap justify-center'>
                    {productList?.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
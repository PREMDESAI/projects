import Search from '@/components/SearchBar'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = async () => {
  return (
    <div className='w-full h-screen bg-[#0B1120]'>
      <ToastContainer />
      <div className='max-w-full max-h-[100%] flex flex-col justify-center items-center text-white relative z-10'>
        <h1 className='max-w-[80%] text-3xl font-extrabold text-center mt-20 md:text-5xl'>Get the latest price updates for your favourite products</h1>
        <h1 className='text-zinc-400 text-center max-w-[85%] mt-4 md:mt-8 text-xl md:text-2xl'>This is a one stop solution for all your price tracking needs, just enter the product link and we will handle the rest, want to get automatic updates without the hassle of going through the product again and again, don't worry, we got you covered</h1>
        <div className='flex flex-col'>
          <div className='flex items-center mt-8 w-full'>
            <Search />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
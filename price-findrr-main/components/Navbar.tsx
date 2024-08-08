import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFireFlameCurved } from "react-icons/fa6";
import Button from './Button';

const Navbar = () => {
  return (
    <header className='w-full  text-white'>
        <nav className='flex justify-between items-center'>
            <Link href="/" className='p-2 md:p-4 flex items-center'> 
            <Image 
            src="/Price.png"
            alt="logo"
            width={50} height={50}
            />
            <span className='ml-2 text-xl md:text-2xl font-semibold tracking-tight'>Price Findrr</span></Link>
            <div className='flex items-center gap-5 p-4'>
              <Button label={<FaFireFlameCurved className='text-xl md:text-2xl font-semibold'/>} navigate='/trending'></Button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
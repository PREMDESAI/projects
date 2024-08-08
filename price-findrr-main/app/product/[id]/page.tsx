import { PriceCard } from '@/components/price-card'
import { getProduct, getSimilar } from '@/server/actions'
import { redirect } from 'next/navigation'
import { FaGaugeHigh } from "react-icons/fa6";
import { BsChevronDoubleUp } from "react-icons/bs";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsAlignMiddle } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdCategory } from "react-icons/md";
import { RiShareForwardBoxFill } from "react-icons/ri";
import Link from 'next/link';
import { PiGhostBold } from "react-icons/pi";
import { SimilarProductCard } from '@/components/similar-product-card';
import { DialogModal } from '@/components/dialog';
interface pageProps {
    params: {
        id: string
    }
}
const page = async ({ params: {id} } : pageProps) => {
    const product = await getProduct(id)
    if(!product) {
        redirect('/')
    }
    const substring = product.productTitle.substring(0,40)
    const similarProduct = await getSimilar(id)
    console.log(product)
  return (
    <div className='w-full min-h-screen bg-[#0B1120] text-white'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 flex-wrap px-6 md:px-20 py-24'>
           <h1 className='text-xl md:text-3xl font-bold col-span-1'>
            {product.productTitle === substring ? product.productTitle : substring+"..."}
           </h1>
           <div className='col-span-1 flex gap-4 p-3'>
                <div className='text-md p-2 text-slate-300 font-extralight flex items-center gap-2 border rounded-xl border-zinc-600 hover:bg-zinc-900/90 duration-200'>
                    <CiStar />{product.rating} 
                </div>
                <div className='bg-zinc-800 p-2 rounded-lg font-semibold hover:bg-zinc-700/90 duration-200'> 
                    <Link href={product.url} target='_blank' className='flex items-center gap-2'><RiShareForwardBoxFill /> Visit Product page</Link>
                </div>
                <div className='text-white p-2 font-bold flex items-center gap-2 rounded-lg bg-zinc-800'>
                    <MdCategory /> {product.category}
                </div>
           </div>
           <div>
             <img src={product.image} alt={product.productTitle} height={400} width={400} className='rounded-lg hover:scale-105 duration-300'/>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
                <PriceCard amount={product.current_price} type='Current Price' currency={product.currency} label={<BsChevronDoubleUp />}/>
                <PriceCard amount={product.lowestPrice} type='Lowest Price' currency={product.currency} label={<BsChevronDoubleDown />}/>
                <PriceCard  amount={product.averagePrice} type='Average Price' currency={product.currency} label={<BsAlignMiddle />}/>
                <PriceCard amount={product.highestPrice} type='Highest Price' currency={product.currency} label={<FaGaugeHigh />}/>
           </div>
           <div>
                <DialogModal id={product._id}/>
           </div>
        </div>
        <div className='flex flex-col justify-center items-center my-4'>
            <h1 className='text-xl md:text-3xl font-semibold mb-4'>Description</h1>
            <div className='max-w-[90%] border '>
                <p className='text-slate-300 font-extralight flex items-center justify-center p-4'>{product.description}</p>
            </div>
        </div>
        <div className="mb-16">
            <h1 className='text-xl md:text-3xl font-semibold flex max-w-[90%] mx-auto mt-8'>Similar Products</h1>
            {similarProduct && similarProduct?.length > 0 ? (
                <div className='flex my-4 max-w-[90%] mx-auto'>
                    {similarProduct?.map((product, index) => (
                        <SimilarProductCard product={product} key={index}/>
                    ))}
                </div>)
            : (<div className='flex flex-col items-center p-4'>
                <div className='text-slate-300 font-extralight flex items-center justify-center gap-4 p-4'>
                <PiGhostBold className="w-8 h-8 md:w-16 md:h-16 text-zinc-400" />
                <h1 className='text-md md:text-xl sm:text-lg text-zinc-400'>No similar product till now...</h1>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default page
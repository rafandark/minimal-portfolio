import React from 'react'
import SvgComponent from '../icon'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div  className='fixed left-4  bottom-4 flex md:right-7 md:left-auto md:top-0 md:bottom-auto justify-center items-center overflow-hidden '>
           <div className="w-48 md:w-24  h-auto flex justify-center items-center z-30 relative">
           <SvgComponent/>
           <Link href="mailto:rafansu@gmail.com" className='flex md:w-12 md:h-12 md:text-[10px] items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-lg border border-solid border-dark w-20 h-20 rounded-full hover:bg-slate-50 hover:text-black text-bold' > Hire me</Link>
           </div> 
    </div>
  )
}

export default Hireme
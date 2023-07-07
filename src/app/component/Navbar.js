"use client"
import {useState,React} from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Navbar = () => {

  
  const [open ,SetOpen] = useState(false)


  return (
         <>
         <div> 
         <div>
          <nav className='w-full border-b  top-0 sticky z-10'>
            <div className='justify-between text-white px-8 py-2  mx-auto md:flex md:items-center '>
                <div>
                  <div className='flex items-center justify-between py-1 md:block'>
                    {/* LOgo */}
                    <Link href='/'> <h2 className='font-bold text-xl'>Rafan </h2> </Link>
                    {/* Hamburgur menu */}
                    <div className='md:hidden'>
                        <button className='p-2 rounded-lg outline-none ' onClick={()=>SetOpen(!open)}> 
                        {open ? (<Image src={'/close.svg'} width={30} height={30}/>)
                        :(<Image src='/menu.svg' width={30 } height={30 }/>)}
                        </button>
                    </div>
                  </div>
                </div>


                <div>
                  <div id='' className={`flex-1 bg-[glass]  md:bg-transparent justify-self-center py-2 pb-3 mt-8 md:block md:mt-0 ${open ? 'p-12 md:p-0 block' : 'hidden '}`}>
                    <ul className='h-screen glass md:h-auto items-center justify-center  md:flex'>
                      <li className='pb-4 py-8 md:py-0 text-xl px-6 md:px-6 md:pb-0 text-center'> 
                         <Link href="/"  onClick={()=>SetOpen(!open)}> Home </Link>
                         </li>
                      <li className='pb-4  text-xl px-6   md:pb-0 text-center'>
                         <Link href="/About"  onClick={()=>SetOpen(!open)}> About </Link>
                         </li>
                         <li className='pb-4  text-xl px-6   md:pb-0 text-center'>
                         <Link href="/contact"  onClick={()=>SetOpen(!open)}> Contact </Link>
                         </li>
                    </ul>
                  </div>
                </div>
            </div>
          </nav>
         </div>
         </div>
         </>

      )
    }
    
  

export default Navbar
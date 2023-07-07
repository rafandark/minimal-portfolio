'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';

import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from '../icon';
import { motion } from 'framer-motion';

const CustomLink = ({href ,title , className=""}) =>{

 const router = usePathname()
 console.log(router);

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[3px] inline-block bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 absolute left-0 -bottom-0.5
             group-hover:w-full transition-[width] ease duration-300 ${router === href ? ' w-full ': 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href ,title , className=" " ,toggle}) =>{
 
    const router = usePathname()
    const router1 = useRouter()

    const handleClick = ()=>{
        toggle()
        router1.push(href)
    }
    
   
   
       return(
           <button href={href} className={`${className} cursor-pointer relative group`} onClick={handleClick}>
               {title}
   
               <span className={`h-[3px] inline-block bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300 ${router === href ? ' w-full ': 'w-0'}`}>&nbsp;</span>
           </button>
       )
   }

const Navbar1 = () => {


const [open ,SetIsOpen] = useState(false)
const handleClick = ()=>{
    SetIsOpen(!open)
}

  return (
    <>
    <header className="w-full px-28 sm:!px-8 py-4 font-medium flex items-center !bg-transparent justify-between relative">

           <button className=' flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
             <span className={`w-6 h-0.5 bg-light transition-all duration-300 ease-in-out block rounded-sm ${open ? 'rotate-45 translate-y-1' :'-translate-y-0.5'}`}></span>
             <span className={`w-6 h-0.5 bg-light transition-all duration-300 ease-in-out block rounded-sm my-0.5  ${open ? 'opacity-0' :'opacity-100'}`}></span>
             <span className={`w-6 h-0.5 bg-light transition-all duration-300 ease-in-out block rounded-sm ${open ? '-rotate-45 -translate-y-1' :'translate-y-0.5'}`}></span>


           </button>
 

      <div className='w-full flex justify-between items-center lg:hidden'>
        
       <nav>
            <CustomLink href="/" title="Home" className='mr-4'/> 
            <CustomLink href="/about"  title="About" className='mx-4'/> 
            <CustomLink href="/projects" title="Projects" className='mx-4' /> 
           <CustomLink href="/articles" title="Articles" className='ml-4'/> 
        </nav>
        <nav className='flex justify-center items-center flex-wrap '>
            <motion.a whileHover={{y:-3}} whileTap={{scale:0.9}} href="/" target={"_blank"} className='w-6 mr-3'> <TwitterIcon/> </motion.a> 
            <motion.a whileHover={{y:-3}} whileTap={{scale:0.9}} href="/" target={"_blank"} className='w-6 mx-3'> <GithubIcon/></motion.a>
            <motion.a whileHover={{y:-3}} whileTap={{scale:0.9}} href="/" target={"_blank"} className='w-6 mx-3'> <PinterestIcon/></motion.a>
            <motion.a whileHover={{y:-3}} whileTap={{scale:0.9}} href="/" target={"_blank"} className='w-6 ml-3'> <LinkedInIcon/></motion.a>
        </nav>
      </div>

      
      {
        open ?
        <motion.div 
        initial={{scale:0 , opacity:0 , x:"-50" ,y :"-50"}}
        animate={{scale:2, opacity:1  }} 
        className='min-w-[70vw] h-auto text-dark z-30  flex flex-col justify-between bg-light/80 backdrop-blur-lg rounded-2xl items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        
        <nav className='flex items-center flex-col justify-center'>
             <CustomMobileLink href="/" title="Home" className='my-2 font-bold' toggle={handleClick}/> 
             <CustomMobileLink href="/about"  title="About" className='my-2 font-bold'  toggle={handleClick}/> 
             <CustomMobileLink href="/projects" title="Projects" className='my-2 font-bold'  toggle={handleClick}/> 
            <CustomMobileLink href="/articles" title="Articles" className='my-2 font-bold ' toggle={handleClick}/> 
         </nav>
         <nav className='flex justify-center items-center flex-wrap my-4'>
             <motion.a whileHover={{y:-3}} whileTap={{scale:0.9}} href="/" target={"_blank"} className='w-6 mr-3'> <TwitterIcon/> </motion.a> 
             <motion.a whileHover={{y:-3}} whileTap={{scale:0.9}} href="https://github.com/rafandark" target={"_blank"} className='w-6 mx-3'> <GithubIcon/></motion.a>
             <motion.a whileHover={{y:-3}} whileTap={{scale:0.9}} href="/" target={"_blank"} className='w-6 mx-3'> <PinterestIcon/></motion.a>
             <motion.a whileHover={{y:-3}} whileTap={{scale:0.9}} href="/" target={"_blank"} className='w-6 ml-3'> <LinkedInIcon/></motion.a>
         </nav>
       </motion.div>  : null
      }


      



      

        

    </header>
    </>
  )
}


export default Navbar1
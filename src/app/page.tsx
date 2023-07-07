'use client'
import React from 'react'
import Cursor from './component/Cursor'
import { motion } from 'framer-motion'
import Transitioneffect from './component/Transitioneffect'
import Hireme from './component/Hireme'
import dynamic from 'next/dynamic'
import AnimatedText from './component/AnimatedText'
import Head from 'next/head'
import SplineC from './component/SplineC'
import Layout from './component/Layout'



const page = () => {


  const ComponentA = dynamic(() => import('./component/SplineC'), { ssr: false })

  return (
    <>
   <Head>
    <title>Rafan portfolio | Home page</title>
    <meta  name='description' content='any description'/>
   </Head>

   <main className='flex items-center sm:!mx-0 w-full overflow-hidden sm:pt-2  min-h-screen'>
 
      <motion.div initial={{ x: 0, opacity: 0 }}
        animate={{ x: 100 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}

        className='flex lg:flex-col w-full h-screen lg:p-0 '>
        <div className="">

        </div>
        <div className='w-1/2 flex flex-col  justify-center items-center sm:self-start  md:pt-20 md:w-[70vw] lg:text-center'>
          <AnimatedText className='text-left xl:!text-6xl  md:!text-5xl sm:!text-3xl'
            text="Crafting digital experiences with code and creativity!" />

          <p className='font-mont text-base font-medium text-left'>
            As a skilled full-stack developer, I am dedicated to turning ideas <br /> into innovative web applications. Explore my latest projects and <br /> articles, showcasing my expertise in React.js and web development.
          </p>
        </div>
        <div id='' className='w-1/2 sm:w-full '>
          <ComponentA/>
        </div>

      </motion.div>
      <Cursor />
      
      
      <Hireme />

      {/*  */}
     
      </main>
    </>
  )
}

export default page
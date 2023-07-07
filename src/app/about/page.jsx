"use client"
import React, { useEffect, useRef } from 'react'
import Transitioneffect from '../component/Transitioneffect'
import Head from 'next/head'
import Layout from '../component/Layout'
import AnimatedText from '../component/AnimatedText'
import Image from 'next/image'
import {motion, motionValue, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../component/Skill'
import Cursor from '../component/Cursor'
import Experience from '../component/Experience'
import Education from '../component/Education'



const AnimateNumbern = ({value}) =>{

  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue ,{duration:6000})
  const isinview = useInView(ref , {once:true  })

  useEffect(()=>{
    if(isinview){
         motionValue.set(value)
    }
  },[isinview ,value ,motionValue])

  useEffect(()=>{
    springValue.on("change" , (latest)=>{
      if(ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  })

  return  <span className='g1' ref={ref}></span>
}



const page = () => {
  return (
    <>

<Head>
    <title>Rafan portfolio | About page</title>
    <meta  name='description' content='any description'/>
   </Head>
  

<main className='w-full  flex flex-col items-center justify-center'>
    <Layout className='pt-24 sm:pt-20'>
    <div className='w-full '>
      <AnimatedText text=" Passion fuels Purpose"/>
            <div className='py-16 grid  w-full grid-cols-8 gap-8'>

              <div className="col-span-3 md:col-span-4 sm:col-span-8 md:order-2 flex flex-col items-start justify-start">
                <h2 className='mb-4 text-lg font-bold'>Biography</h2>
                <p className='font-medium'> Hi, I'm Rafan, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 2 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients' visions to life.</p>
<p className='my-4 font-medium'>
- I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. </p>
<p className='font-medium'>
- Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
          
        
              </div>
              <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0 , opacity: 1 }}
              transition={{ delay: 0.8 }}
             
              className='col-span-3 md:flex md:justify-center md:items-center md:col-span-4 sm:col-span-8 md:order-1 relative md:w-auto h-max rounded-2xl border-2 border-solid border-light p-4'>
                 <video src="/Hero-render.mp4" autoPlay  muted></video>
              </motion.div>
              <div className='col-span-2 md:col-span-8 sm:col-span-8  md:order-3 flex md:flex-row flex-col items-end text-light justify-between'>
              <div className='flex flex-col xl:items-center items-end justify-center xl:text-center'>
                 <span className='inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold'>
                 <AnimateNumbern value={20} />+</span>
                <h2 className='font-medium capitalize xl:text-center md:text-center sm:text-base xs:text-sm'>
                satisfied client </h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:text-center'>
                 <span className='inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold'>
                 <AnimateNumbern value={40} />+
                 </span>
                <h2 className='font-medium capitalize xl:text-center md:text-center sm:text-base xs:text-sm'>
                projects Complete</h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:text-center'> 
                 <span className='inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold'>
                 <AnimateNumbern value={2} />+
                 </span>
                <h2 className='font-medium capitalize xl:text-center md:text-center sm:text-base xs:text-sm'> Years of experience
              </h2>
            </div>
            </div>
            </div>

       
    </div>

    <Skills/>

    <Experience/>
    <Education />
    </Layout>
    </main>
    <Transitioneffect/>
    <Cursor/>
    </>
  )
}

export default page
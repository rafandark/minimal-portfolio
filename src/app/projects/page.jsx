"use client"
import React from 'react'
import Head from 'next/head'
import Layout from '../component/Layout'
import AnimatedText from '../component/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '../icon'
import Crypto from "../component/projects/Crypto-dashboard.jpg"
import { motion } from 'framer-motion'
import Transitioneffect from '../component/Transitioneffect'
import NFT from "../component/projects/nft.jpg"
import fashion from "../component/projects/fashion-studio.jpg"


const FeatureProject = ({type, title ,summary , img , link , github}) =>{
  return(
    <article className='flex justity-between items-center mt-10 relative rounded-2xl lg:flex-col border border-solid border-dark glassmo rounded-br-2xl  w-full'>
               <Link className='w-1/2 lg:w-full rounded-2xl overflow-hidden cursor-pointer' target='_blank' href={link}>
                 <Image
                 src={img} alt={title} className='w-full md:p-0 p-4' />
                  </Link>

                  <div className='w-1/2  lg:w-full flex flex-col items-start justify-between p-4 pl-4 md:p-2 lg:pl-0 lg:pt-6'>
                    <span className='text-primaryDark font-medium text-xl sm:text-sm xs:text-base'>{type}</span>
                    <Link href={link} target='_blank'><h2 className='my-2 w-full text-left text-4xl sm:text-2xl font-bold hover:underline-offset-2'>{title}</h2></Link>
                    <p className='sm:text-sm'>{summary}</p>
                    <div className='my-2 flex items-center '>
                      <Link href={github} target='_blank' className='w-10'><GithubIcon/> </Link>
                      
                      <Link href={github} target='_blank' className='ml-2 bg-dark p-2 px-4 text-lg sm:text-sm font-semibold rounded-2xl hover:bg-primaryDark'>Visit Project </Link>
                    </div>
                  </div>
    </article>
  )
}

const Project = ({title , type  , img , link , github}) =>{
 return(
  <motion.article
  
  initial={{
    y:100,
    opacity:0}}
  whileInView={{
    y:0,opacity:1,}}
  transition={{duration:1 , delay:0.4}}
  
  className='w-full flex flex-col items-center justify-center rounded-4xl border border-solid border-light bg-gradient-to-r from-rose-600 via-pink-900 to-blue-500 glassmo'>
    <Link className='w-full rounded-lg overflow-hidden cursor-pointer' target='_blank' href={link}>
                 <Image src={img} alt={title} className='w-full sm:p-2 p-6 rounded-3xl' />
                  </Link>

                  <motion.div
                  
                  className='w-full flex flex-col sm:p-2 p-4 items-start justify-between mt-4'>
                    <span className='text-primaryDark font-medium text-xl sm:text-sm'>{type}</span>
                    <Link href={link} target='_blank'><h2 className='my-2 w-full text-left text-2xl sm:text-xl font-bold hover:underline-offset-2'>{title}</h2></Link>
                
                    <div className='my-2 w-full flex justify-between items-center'>
                      <Link href={github} target='_blank' className='w-10 md:w-6'><GithubIcon/> </Link>
                      
                      <Link href={link} target='_blank' className='ml-2 bg-dark p-2 px-2 sm:text-sm text-lg font-semibold rounded-2xl hover:bg-primaryDark'>Visit Project </Link>
                    </div>
                  </motion.div>
  </motion.article>
 )
}

const page = () => {
  return (
    <>
     <Head>
    <title>Rafan | project page</title>
    <meta  name='description' content='any description'/>
   </Head>
   <main className='w-full mb-24 flex justify-center items-center flex-col'>
    <Layout className='pt-24'>
          <AnimatedText className='sm:my-5 sm:!text-5xl xs:!text-4xl' text="Imagination Trumps Knowledge! " />
          <div className='grid grid-cols-12 gap-16 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-4'>
            <div className='col-span-12'>
                     <FeatureProject
                     title="Crypto Screener Application"
                     summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                     type="Featured Project"
                     link="https://crypto-bucks.netlify.app/"
                     github="https://crypto-bucks.netlify.app/"
                     img={Crypto}
                     />
                           
            </div>
            <div className='col-span-6'>
            <Project
                     title="NFT collection Website"
                     link="/"
                     github="/"
                     
                     type="Website"
                     img={NFT}
                     />
                           

              </div>
              <div className='col-span-6'>
              <Project
                     title="Fashion Studio Website
                     Visit"
                   
                     type="Website"
                     link="/"
                     github="/"
                     img={fashion}
                     />

              </div>
            
             
          </div>
    </Layout>
    <Transitioneffect/>
   </main>
    </>
  )
}

export default page
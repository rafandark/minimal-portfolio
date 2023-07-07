import React, { useRef } from 'react'
import {motion ,useScroll} from 'framer-motion'
import Licon from '../component/Licon'


const Details = ({position ,company ,companyLink , time , address , work}) =>{

    const ref = useRef(null)

    return(
       <li ref={ref} className='my-8 w-[60%]  md:w-[80%] first:mt-0 last:mt-0 mx-auto flex flex-col items-center justify-between'>
        <Licon reference={ref}/>
        <motion.div
        
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 ,type:"spring"}}>
            <h3 className='capitalize font-bold text-primaryDark sm:text-xl xs:text-sm text-2xl'>{position}&nbsp;<a href={companyLink}>@{company}</a></h3>
            <span className='capitalize font-medium text-light/75 xs:text-sm'>{time} | {address} </span>
            <p className='font-medium w-full md:text-sm'> {work} </p>
        </motion.div>
       </li>
    )
}

const Experience = () => {

    const ref = useRef(null)
const {scrollYProgress} = useScroll(

    {target:ref,
    offset: ["start end","center start"] }
)


  return (
    <>
    <div className='my-24'>
        <h2 className='font-bold mb-32 text-7xl md:text-5xl xs:text-4xl w-full text-center'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
       
       <motion.div
       style={{scaleY:scrollYProgress}}
       
       className='absolute left-1 top-0 h-full  w-[4px] bg-primaryDark origin-top'/>

            <ul className='w-full flex flex-col justify-between ml-0'>
                    <Details  position='Software Engineer' 
                    company=' SSR IT'
                    time='2022-2021'
                    address='dhaka,rampura'
                    work='Worked on a team responsible for developing new features for Googles search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.'/>

                   <Details  position='Intern' 
                    company='Soft Tech'
                    time='2021'
                    address='dhaka,Banshree'
                    work='Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.'/>

                    <Details  position='Intern' 
                    company='MIR IT'
                    time='2020'
                    address='dhaka,Basabo'
                    work='Worked on a team responsible for developing new features for Microsofts Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.'/>

                    
                 
            </ul>
        </div>
    </div>

    </>
  )
}

export default Experience
import React, { useRef } from 'react'
import {motion ,useScroll} from 'framer-motion'
import Licon from '../component/Licon'


const Details = ({type , time ,place ,info  }) =>{

    const ref = useRef(null)

    return(
       <li ref={ref} className='my-8 w-[60%] md:w-[80%] first:mt-0 last:mt-0 mx-auto flex flex-col items-center justify-between'>
        <Licon reference={ref}/>
        <motion.div
        
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 ,type:"spring"}}>
            <h3 className='capitalize font-bold sm:text-xl xs:text-sm text-primaryDark text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-light/75'>{time} | {place} </span>
            <p className='font-medium w-full md:text-sm'> {info} </p>
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
        <h2 className='font-bold mb-32 md:text-5xl xs:text-4xl text-7xl w-full text-center'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
       
       <motion.div
       style={{scaleY:scrollYProgress}}
       
       className='absolute left-1 top-0 h-full  w-[4px] bg-primaryDark origin-top'/>

            <ul className='w-full flex flex-col justify-between ml-0'>
                    <Details  type='Bachelor Of Science In Civil Science' 
                    time =' 2017-2022'
                    place ='Dhaka,bangladesh'
                    info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.'
                  />

                  <Details  type='Diploma Of Civil Science' 
                    time =' 2013-2017'
                    place ='Dhaka,bangladesh'
                    info='Completed a masters project on deep learning, developing a new neural network architecture for natural language understanding.'
                  />

              <Details  type='Online Coursework' 
                    time =' 2022-2023'
                    place ='Dhaka,bangladesh'
                    info='Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.'
                  />

                    
                 
            </ul>
        </div>
    </div>

    </>
  )
}

export default Experience
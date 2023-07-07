import React from 'react'
import { motion } from 'framer-motion'


const Quote = {
    initial:{
        opacity:0,

    },
    animate:{
        opacity:1,
        transition:{
            delay:.5,
            staggerChildren:0.8,
        }
    }
}


const SingleWord = {
    initial:{
        opacity:0,
        y:50,

    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}
const AnimatedText = ({text , className=""}) => {
  return (
    <>
    <div className='w-full mx-auto py-2 sm:py-0  flex items-center justify-center text-center overflow-hidden'>
<motion.h1 
variants={Quote}
initial="initial"
animate="animate"

className={`inline-block w-full text-light font-bold sm:text-4xl text-6xl ${className}`}>
    { text.split(" ").map((word ,index)=>
        <motion.span
        variants={SingleWord}
        
        key={word + '-' + index} className='inline-block'>{word}&nbsp;</motion.span>
    )}
     </motion.h1>
    </div>
    </>
  )
}

export default AnimatedText
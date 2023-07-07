import React from 'react'
import { delay, motion } from 'framer-motion'




const Transitioneffect = () => {
  return (
    <>
    
    <motion.div className="
     fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1c7a94]"
     initial ={{x:'100%' ,width :'100%'}}
     animate ={{x:'0%',width :'0%'}}
     transition ={{delay:0.2, duration:1.1, ease:"easeInOut"}}
     exit={{x:['0%','100%'], width:['0%' ,'100%']}}
     />
     
    <motion.div className="
     fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#917717]"
     initial ={{x:'100%' ,width :'100%'}}
     animate ={{x:'0%',width :'0%'}}
     transition ={{duration:1.2, ease:"easeInOut"}}
     exit={{x:['0%','100%'], width:['0%' ,'100%']}}
     />
     <motion.div className="
     fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#d8b81a]"
     initial ={{x:'100%' ,width :'100%'}}
     animate ={{x:'0%',width :'0%'}}
     transition ={{delay:0.3, duration:1.2 , ease:"easeInOut"}}
     
     exit={{x:['0%','100%'], width:['0%' ,'100%']}}
     />
      <motion.div className="
    fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#e0e0e0]"
     initial ={{x:'100%' ,width :'100%'}}
     animate ={{x:'0%',width :'0%'}}
     transition ={{delay:0.4, duration:1.2 , ease:"easeInOut"}}
     
     exit={{x:['0%','100%'], width:['0%' ,'100%']}}
     />

         
    </>
  )
}

export default Transitioneffect
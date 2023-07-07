import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name , x , y}) => {

    return (
        <motion.div
        initial={{x:0 , y:0 }}
        whileInView={{x:x , y:y}}
        transition={{duration:1.5}}
        className=' flex justify-center items-center py-3 px-6 absolute rounded-xl shadow-2xl bg-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:text-xs xs:text-xs'>
             {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <div>
         <div className='my-3'>
            <h2 className=' flex justify-center  mb-32 items-center font-bold text-7xl md:text-5xl xs:text-4xl'> Skills </h2>
            <div
            className='w-full  lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] h-screen relative flex justify-center items-center mt-10 rounded-full shadow-2xl bg-circularImage  '>

             <motion.div  whileHover={{scale:1.5}} className='flex cursor-pointer justify-center items-center rounded-full bg-dark p-4 text-light 
            
             
             
             '>
                web
             </motion.div>
             <Skill name='HTML'  x="-20vw" y="2vw"/>
            <Skill name='CSS'  x="-5vw" y="-10vw"/>
            <Skill name='JAVASCRIPT'  x="20vw" y="6vw"/>
            <Skill name='REACT JS'  x="0vw" y="12vw"/>
            <Skill name='NEXT JS'  x="-20vw" y="-15vw"/>
            <Skill name='GATSBY JS'  x="15vw" y="-12vw"/>
            <Skill name='WEB DESIGN'  x="32vw" y="-5vw"/>
            <Skill name='FIGMA'  x="0vw" y="-20vw"/> 
            <Skill name='FIREBASE'  x="-25vw" y="18vw"/>
            <Skill name='TAILWIND CSS'  x="18vw" y="18vw"/> 
            </div>
          
         </div>
    </div>
  )
}

export default Skills
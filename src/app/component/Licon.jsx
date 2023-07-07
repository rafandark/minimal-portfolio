import React from 'react'
import {motion ,useScroll} from 'framer-motion'

const Licon = ({reference}) => {

    const {scrollYProgress} = useScroll(
    
        {target:reference,
        offset: ["center end","center center"] }
    )
  return (
  
        <figure className='absolute -left-12 stroke-light'>
            <svg  className='' width="75" height="75" viewBox='0 0 100 100' >
            <circle cx="75" cy="50" r="20" className='stroke-primaryDark stroke-1 fill-none'/>
            <motion.circle
            style={{
                pathLength: scrollYProgress
            }}
            cx="75" cy="50" r="20" className='stroke-[5px] fill-primary '/> 
            <circle cx="75" cy="50" r="10" className='stroke-1 animate-pulse fill-primaryDark '/>
            </svg>
        </figure>
    
  )
}

export default Licon
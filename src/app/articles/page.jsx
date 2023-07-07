"use client"
import React, { useRef } from 'react'
import Layout from "../component/Layout"
import AnimatedText from "../component/AnimatedText"
import Head from 'next/head'
import Link from 'next/link'
import rreact from "../component/projects/react.jpg"
import smooth from "../component/projects/smooth.png"
import Image from 'next/image'
import { easeInOut, motion, useMotionValue } from 'framer-motion'
import validationn from "../component/projects/from validation.png"
import Smoothy from "../component/projects/react smooth scrolling.png"
import dynamictite from '../component/projects/Dynamic title.png'
import todoList from "../component/projects/todo.jpg"
import redux from "../component/projects/Redux.jpg"
import Hoc from "../component/projects/Hoc.jpg"
import Cursor from "../component/Cursor"
import Transitioneffect from '../component/Transitioneffect'



const FramerImage = motion(Image)

const MovingIamge = ({title , img , link} ) =>{

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)
  

  function handleMOuse(event){
    
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMOuseLeave(){
   
    imgRef.current.style.display = "none";
    x.set(0)
    y.set(0)

  }


  return(


    <Link href={link} target='_blank'
    onMouseMove={handleMOuse}
    onMouseLeave={handleMOuseLeave}>

    <h2 className='capitalize tetx-2xl font-bold my-2'>{title}</h2>
    <FramerImage
    style= {{x:x , y:y}}
    ref={imgRef} src={img} alt={title} className='z-10 w-64 sm:w-32 h-auto hidden absolute rounded-lg '/> 
    </Link>

  )
}

const ArticleCom = ({img , title , time ,  link}) =>{
return(

   <li className='col-span-1 p-4 w-full border-solid border rounded-lg'>
 <Link 
 className='w-full rounded-2xl overflow-hidden cursor-pointer'
  target='_blank' href={link}>
                 <Image
                 src={img} alt={title} className='w-full p-4' />
                  </Link>
                  <Link href={link} target='_blank' >
                    <h2 className='capitalize tetx-2xl font-bold my-2'>{title}</h2>
                    <p className='text-sm mb-2'><span className='text-primaryDark font-semibold'>{time}</span></p>
                  </Link>

   </li>
)
}


const ArticleSort = ({img , title , date , link}) =>{
  return(
    <motion.li
    initial={{y:200}}
    whileInView={{y:0 , transition:{duration:0.5 , ease:easeInOut}}}
    viewport
 

    
    className='relative w-full p-4 my-8  rounded-xl flex items-center justify-between sm:text-sm border-x-orange-600  shadow-3xl first:mt-0 border border-solid border-primaryDark border-r-4 border-b-4'>
        <MovingIamge title={title} img={img} link={link} />
        <span className='text-primaryDark sm:text-sm font-medium'>{date}</span>

    </motion.li>
  )
}

const articles = () => {
  return (
    <>
     <Head>
    <title>Rafan portfolio | Article page</title>
    <meta  name='description' content='any description'/>
   </Head>
   
   <main className='w-full mt-20 flex flex-col items-center justify-center overflow-hidden'>
    <Layout className=''>
      <Cursor />
        <AnimatedText text="Words Can Change The World! " className='mb-16'/>
        <ul className='grid grid-cols-2 md:grid-cols-1 gap-16'>

          <li className='p-4'> 
            <ArticleCom
          title="Build A Custom Pagination Component In Reactjs From Scratch"
          summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          time="9 min read"
          img={rreact}
          link="/"
          />
          
          
          </li>
          <li className='p-4'>  <ArticleCom
          title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
          summary="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
          time="11 min read"
          img={smooth}
          link="/"
          /></li>
        </ul>  
              <div className='mt-24 sm:mt-18'>
              <h2 className='text-center text-4xl  w-full font-bold my-6'>All Articles</h2>
              <ul className='mt-24'>


              <ArticleSort
              title=" Build A Reusable Custom Hook For Inputs And Error Handling"
              date="January 27, 2023"
              link=""
              img={validationn}
              
              />
               <ArticleSort
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="January 30, 2023"
              link=""
              img={Smoothy}
              
              /> <ArticleSort
              title="Creating An Efficient Modal Component In React Using Hooks And Portals
              "
              date="January 26, 2023"
              link=""
              img={dynamictite}
        
              
              /> <ArticleSort
              title="Redux Simplified: A Beginner's Guide For Web Developers
              "
              date="January 28, 2023"
              link=""
              img={redux}
              
            
              
              />
              <ArticleSort
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion
              "
              date="January 28, 2023"
              link=""
              img={todoList}
            
              />


              <ArticleSort
              title="What Is Higher Order Component (Hoc) In React?
              "
              date="January 28, 2023"
              link=""
              img={Hoc}
            
              />
              </ul>
              </div>

    </Layout>
    <Transitioneffect/>
   </main>
    </>
  )
}

export default articles
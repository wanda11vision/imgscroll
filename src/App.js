import React from 'react'
import './App.css'
import {motion, useScroll, useTransform} from 'framer-motion'

function App() {
  const {scrollY}=useScroll()
  
  const ymove=useTransform(scrollY,[100,200,300,400,500,600],[0,300,0,300,0,300])

  const xmove =useTransform(scrollY,[100,200,300,400,500,600],[0,100,400,600,800,1100])
  
  return (
    <div className='main'>
      <motion.div className='m1' style={{y:ymove,x:xmove}} >
     

      </motion.div>
      </div>
  )
}



// import React from 'react'
// import './App.css'
// import {motion, useScroll, useTransform} from 'framer-motion'

// function App() {
//   const {scrollY}=useScroll()
  
//   const color=useTransform(scrollY,[100,500,1000],['red','green','blue'])

//   const move =useTransform(scrollY,[0,200,400,600,1000],[0,300,0,300,0])
//   return (
//     <div className='main'>
//       <motion.div className='m1' style={{backgroundColor:color,x:move}} >
     
        
//       </motion.div>
//       </div>
//   )
// }

export default App





// import React from 'react'
// import './App.css'
// import {motion} from 'framer-motion'

// function App() {
//   return (
//     <div className='main'>
//       <div>
//         <motion.h1
//         initial={{opacity:0,color:'white',x:50}}
//         animate={{opacity:1,y:50}}
//         transition={{duration:5}}
//         >BetterUp</motion.h1>

//         <motion.button
//         initial={{opacity:0,x:500}}
//         animate={{opacity:1,y:80}}
//         transition={{duration:5}}
//         >BetterUp Insights Report, Fall 2021</motion.button>
        
//         <motion.button
//         initial={{opacity:0,x:800}}
//         animate={{opacity:1,y:30}}
//         transition={{duration:5}}
//         >Request Demo</motion.button>
      
//       </div >

//       <div className='m2'>
//         <motion.h1
//         initial={{opacity:0,color:'white',x:100,y:300}}
//         animate={{opacity:1,y:100}}
//         transition={{duration:5}}
//         >A new kind of inclusive leadership for a new world of work</motion.h1>
//       </div>
//     </div>
//   )
// }

// export default App






// import React, { useState } from 'react'
// import {motion} from 'framer-motion'
// import "./App.css"

// function App() {
//   let [a,seta]=useState(0)
//   function chng(){
//     seta(a+45)
//   }
//   return (
//    <div>
//     <motion.div className='box'
//     initial={{rotate:0,x:0}}
//     animate={{rotate:a,x:a}}
//     whileHover={{rotate:a,x:a}}
// >

// </motion.div>
// <button onClick={chng}>click</button>
//    </div>
//   )
// }

// export default App

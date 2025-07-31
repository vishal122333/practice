
import { motion } from "motion/react"

const Header = () => {
  return (
    <div>        <div className='w-full h-10 flex  text-white justify-around items-center px-10'>
          <motion.div animate={{ y: [-30, 0], opacity: [0, 2] }} transition={{ duration: 2, ease: "easeInOut" }}
            className=' text-4xl '>yashu</motion.div>

          <motion.div animate={{ y: [-30, 0], opacity: [0, 2] }} transition={{ duration: 2, ease: "easeInOut" }}
            className='text-4xl flex list-none gap-10 '>
            <li>Explore</li>
            <li>Directory</li>
            <li>Academy</li>
            <li>Job</li>
            <li>Market</li>
          </motion.div>
        </div>

        <div className='h-40 items-center flex justify-center'>
          <motion.div initial={{ x: "100%" }}
          animate={{ x:-200, rotate: 360, scale: 1.5, transition: { duration: 2 } }}
          
            className='w-15 h-15 bg-gradient-to-tr from-blue-500 to-purple-500 '
          ></motion.div>
        </div>

        <div className='w-full h-50 flex justify-center items-center'>
          <motion.div
            animate={{ x: [-1000, 0], opacity: [0, 1,] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className='w-1/2 h-full border-1 border-amber-50 bg-amber-400'> hi</motion.div>
          <motion.div
            animate={{ x: [1000, 0], opacity: [0, 1,] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className='w-1/2 h-full border-1 border-amber-50 bg-red-600'>hello</motion.div>
        </div></div>
  )
}

export default Header
import React from 'react'
import { motion } from "framer-motion";


const Motion = (Component,Classnames) => function HOC() {
  return (
    <motion.div
    whileInView={{y:[50 ,100,0], opacity:[0,0,1]}}
    transition={{duration: 0.8}}
    className={`${Classnames} app__flex`}>
        <Component/> 

    </motion.div>
  )
}

export default Motion
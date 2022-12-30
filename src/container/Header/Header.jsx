import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { image } from '../../constants';
import { AppWrap } from '../../warpper';
const Header = () => {
  const Scalevarient = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',

      }
    }
  }
  return (
    <div className='app__header app__flex'>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.3 }}
        className='app__header-info'>

        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>⚡</span>
            <div style={{ marginLeft: 20 }}>
              <p>Hey How you doin', I am</p>
              <h1 className='header-text'>Divya Panchori</h1>
            </div>

          </div>
          <div className='tag-cmp app__flex'>
            <p>Web developer</p>
            <p>programer</p>
          </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.3, delayChildren: 0.5 }}
        className='header-img'
      >
        <img src={image.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.3, ease: 'circInOut' }}
          src={image.circle}
          className='overlay__circle'
        >

        </motion.img>

      </motion.div>

      <motion.div
        variants={Scalevarient}
        whileInView={Scalevarient.whileInView}
        className='app__header-circles'
      >
        {[image.react, image.java, image.js].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />

          </div>
        ))}

      </motion.div>




    </div>
  )
}

export default AppWrap(Header, "home") 
import React, { useState, useEffect } from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { image } from '../../constants';
import { urlFor, client } from '../../client'
import { AppWrap, Motion } from '../../warpper';
const About = () => {
  const [About, setAbout] = useState([])
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => {
        setAbout(data)
        console.log(data)
      })

  }, [])

  return (



    <>
      <h2 className='head-text'>
        A <span>user interface</span> is like a joke. <br /> If you have to explain it, it’s not that good.
      </h2>
      <div className='app__profiles'>
        {
          About.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt="" />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 20 }}>{about.description}</p>


            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(Motion(About, "app__about"), "about", "app__whitebg",)
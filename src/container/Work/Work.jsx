import React, { useState, useEffect } from 'react'
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion';
import { AppWrap, Motion } from '../../warpper';
import { urlFor, client } from '../../client'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([])
  const [workFilter, setWorkFilter] = useState([])



  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setWorkFilter(data);



      })


  }, [])
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 })
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })
      if (item === 'All') {
        setWorkFilter(works)
      } else {
        setWorkFilter(works.filter((works) => (works.tags.includes(item))))
      }
    }, 500);
  }


  return (

    <>

      <h2 className='head-text'>Things i <span>Cooked</span>🧑‍🍳</h2>
      <div className="app__work-filter">
        {
          ['All', "Vanila", "React", "ML"].map((item, index) => (
            <div key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex ${activeFilter === item ? "Item-active" : ""}`} >
              {item}
            </div>
          ))
        }
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {workFilter.map((item, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(item.imgUrl)} alt="" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={item.codelink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, }}
                    className="app__flex">
                    <AiFillEye />

                  </motion.div>
                </a>
                <a href={item.codelink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25, }}
                    className="app__flex">
                    <AiFillGithub />

                  </motion.div>
                </a>
              </motion.div>


            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{item.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}> {item.description}</p>
              <div className='app__work-tags app__flex'>
                <p className='p-text'>{item.tags[0]}</p>
              </div>

            </div>
          </div>
        ))}

      </motion.div>

    </>

  )
}

export default AppWrap(Motion(Work, "app__works"), "work");
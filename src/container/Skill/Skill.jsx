import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, Motion } from '../../warpper';
import { urlFor, client } from '../../client'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Tooltip from '@mui/material/Tooltip';
import './Skill.scss';
const Skill = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([])
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const squery = '*[_type == "skills"]';
    client.fetch(query)
      .then((data) => {
        setExperience(data);

      })
    client.fetch(squery)
      .then((data) => {
        setSkills(data);
        console.log("hey", data)
      })


  }, [])
  return (
    <>
      <h2 className='head-text'>
        Skills & Experience
      </h2>
      <div className="app__skill-conatiner">
        <motion.div className='app__skill-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {console.log(experience)}
          {

            experience.map((exp) => (
              <motion.div
                className='app__skills-exp-item'
                key={exp.year}
              >
                <div className='app__skill-exp-year'>
                  <p className='bold-text'> {exp.year}</p>
                </div>

                <motion.div
                  className='app__skills-exp-works'>

                  {
                    exp.works.map((work) => (

                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"

                          key={work.name}

                        >
                          <div>  <h4 className='bold-text' >
                            {work.name}
                          </h4>
                            <p className='p-text'>
                              {work.company}
                            </p>
                            <p className='p-text'>
                              {work.desc}
                            </p>


                          </div>

                        </motion.div>




                      </>

                    ))}

                </motion.div>
              </motion.div>

            ))
          }
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Motion(Skill, "app__skills"), "skill", "app__whitebg")


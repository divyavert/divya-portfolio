import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className='app__social'>

      <div>
        <a href="https://twitter.com/DivyaPanchori">
          <BsTwitter />
        </a>

      </div>
      <div>
        <a href="https://www.instagram.com/divyavert/">
          <BsInstagram />
        </a>

      </div>
      <div>
        <a href="https://github.com/divyavert">
          <FaGithubSquare />
        </a>

      </div>
      <div>
        <a href="https://www.linkedin.com/in/divya-panchori-1b41aa144/"></a>
        <FaLinkedin />
      </div>

    </div>
  )
}

export default SocialMedia
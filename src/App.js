import React from 'react'
import { Footer,About,Header,Skill,Work } from './container'
import { Navbar } from './components'
import './App.scss';
const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skill/>
 
    <Footer/>

    </div>
  )
}

export default App
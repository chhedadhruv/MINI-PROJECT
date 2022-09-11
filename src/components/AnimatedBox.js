import React from 'react'
import '../styles/Animation.css'
import ExperimentList from '../Pages/ExperimentList'

function AnimatedBox() {
  return (
    <>
    <div className='col'>
    <div className='box'>
      <div className='title'>
        <h1 className='line-1 anim-typewriter'>DISCRETE STRUCTURES</h1>
        <h1 className='line-1 anim-typewriter'>AND</h1>
        <h1 className='line-1 anim-typewriter'>GRAPH THEORY</h1>
        <h1 className='line-1 anim-typewriter'>VIRTUAL LAB</h1>
      </div>
    </div>
    <div className='btn'> 
      <button>Get Started</button>
    </div>
    </div>
    </>
  )
}

export default AnimatedBox
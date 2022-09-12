import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Footer.css'
import '../styles/Fonts.css'
import {MdArrowBackIosNew} from 'react-icons/md'
import {MdArrowForwardIos} from 'react-icons/md'

function ExperimentList() {
  return (
    <>
    <Navbar />
    <div className='footer-left'>
      <div className='footer-links'>
        <ul>
          <li>Introduction</li>
          <li>Theory</li>
          <li>Objective</li>
          <li>Procedure</li>
          <li>Simulation</li>
          <li>References</li>
        </ul>
      </div>
    </div>
    <button className='footer-button'><MdArrowBackIosNew /></button>
    <button className='footer-button'><MdArrowForwardIos /></button>
    </>
  )
}

export default ExperimentList
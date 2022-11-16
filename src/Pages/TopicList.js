import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/TopicList.css'
import '../styles/Fonts.css'
import { Link } from 'react-router-dom'
import '../styles/Animation.css'

function ExperimentList() {
  return (
    <>
    <Navbar />
    <div className='topic-list'>
        <h1>List Of Topics</h1>
        <div className='topic-list-item'>
            <ul>
                <li><Link to="/setsexp" className='link-topics'>1: SETS</Link></li>
                <li><Link to="/warshals" className='link-topics'>2: Warshal's Algorithm</Link></li>
                <li><Link to="/principleofinclusionexclusion" className='link-topics'>3: Principle Of Inclusion/Exclusion</Link></li>
                <li><Link to="/graphtheory" className='link-topics'>4: Graph Theory</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default ExperimentList
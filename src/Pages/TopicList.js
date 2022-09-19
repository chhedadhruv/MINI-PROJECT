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
                <li><Link to="/setssimulator" className='link-topics'>1: SETS</Link></li>
                <li>2: Warshal's Algorithm</li>
                <li>3: Priciple Of Inclusion/Exclusion</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default ExperimentList
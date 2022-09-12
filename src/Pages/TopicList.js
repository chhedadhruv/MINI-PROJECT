import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/TopicList.css'
import '../styles/Fonts.css'

function ExperimentList() {
  return (
    <>
    <Navbar />
    <div className='topic-list'>
        <h1>List Of Topics</h1>
        <div className='topic-list-item'>
            <ul>
                <li>1: SETS</li>
                <li>2: Warshal's Algorithm</li>
                <li>3: Priciple Of Inclusion</li>
                <li>4: Priciple Of Exclusion</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default ExperimentList
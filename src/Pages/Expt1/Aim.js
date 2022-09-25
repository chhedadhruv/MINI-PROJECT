import React from 'react'
import Navbar from '../../components/Navbar'
import Sets from './Sets'
import '../../styles/LeftNav.css';

function Aim() {
  return (
    <>
    <Sets />
    <div style={{position: 'absolute', top: 130, left:150}}>Aim</div>
    </>
  )
}

export default Aim
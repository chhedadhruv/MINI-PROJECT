import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
// import * as set from 'node-set-theory';
import { union } from 'node-set-theory'
// import Zet from 'zet';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../../styles/LeftNav.css';
import { Link } from 'react-router-dom';
import Aim from './Aim';

function SetsSim() {
    const [setAValue, setSetAValue] = useState('');
    const [setBValue, setSetBValue] = useState('');
    const [setUnionValue, setSetUnionValue] = useState('');
    const handleSetAValue = (event) => {
        setSetAValue(event.target.value);
        // alert(event.target.value);
    };
    const handleSetBValue = (event) => {
        setSetBValue(event.target.value);
        // alert(event.target.value);
    };
    const handleUnion = () => {
        // setSetUnionValue(event.value);
        const c = union([1,2,3], [2,3,4]);
        alert(c);
    }
    // const a = new Zet(setAValue);
    // const b = new Zet(setBValue);
    // const c = Zet.union(a, b);
    // console.log(c);
    // const onClickBtn = () => {
        // const c = union([setAValue, setBValue]);
    // alert(c);
    // }
  return (
    <>
    <div className='column'>
    <Navbar />
    <div className='left-nav'>
        {/* <div className='hamburger'>
            <GiHamburgerMenu />
        </div> */}
        <div className='link-nav'>
            <ul>
                <li><Link to='/setsexp/aim' className='link'>Aim</Link></li>
                <li><Link className='link' to='/setsexp/theory'>Theory</Link></li>
                <li><Link className='link' to='/setsexp/objective'>Objective</Link></li>
                <li><Link className='link' to='/setsexp/procedure'>Procedure</Link></li>
                <li><Link className='link' to='/setsexp/simulation'>Simulation</Link></li>
                <li><Link className='link' to='/setsexp/references'>References</Link></li>
                <li><Link className='link' to='/feedback'>Feedback</Link></li>
            </ul>
        </div>
    </div>
    </div>
    {/* <div className='simulation'>
        <div className='seta'>
        <div className='row'>
            Enter elements of set A:
            <input type="text" name='set-a' id='input-seta' onChange={ handleSetAValue } value={setAValue}></input>
        </div>
        </div>
        <div className='setb'>
        <div className='row'>
            Enter elements of set B:
            <input type="text" name='set-b' id='input-setb' onChange={handleSetBValue} value={setBValue}></input>
        </div>
        </div>
        <div className='setunion'>
        <div className='row'>
            AUB=
            <input type="number" name='set-union' id='input-setunion'></input>
        </div>
        </div>
        <button type='submit' onClick={ handleUnion }>Submit</button>
    </div> */}
    </>
  )
}

export default SetsSim
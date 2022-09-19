import React from 'react'
import Navbar from '../components/Navbar'
import * as set from 'node-set-theory';
import { intersect, union } from 'node-set-theory'

function SetsSim() {
    // const setAElem1 = document.getElementById("input-seta1").value;
    // const setAElem2 = document.getElementById("input-seta2").value;
    // const setAElem3 = document.getElementById("input-seta3").value;
    // const setAElem4 = document.getElementById("input-seta4").value;
    // const setAElem5 = document.getElementById("input-seta5").value;
    // const setBElem1 = document.getElementById("input-setb1").value;
    // const setBElem2 = document.getElementById("input-setb2").value;
    // const setBElem3 = document.getElementById("input-setb3").value;
    // const setBElem4 = document.getElementById("input-setb4").value;
    // const setBElem5 = document.getElementById("input-setb5").value;
    const a = union([1, 2], [3, 2]);
    console.log(a);
  return (
    <>
    <Navbar />
    <div className='simulation'>
        <div className='seta'>
        <div className='row'>
            Enter 1st element of set A:
            <input type="number" name='set-a' id='input-seta1'></input>
        </div>
        <div className='row'>
            Enter 2nd element of set A:
            <input type="number" name='set-a' id='input-seta2'></input>
        </div>
        <div className="row">
            Enter 3rd element of set A:
            <input type="number" name='set-a' id='input-seta3'></input>
        </div>
        <div className='row'>
            Enter 4th element of set A:
            <input type="number" name='set-a' id='input-seta4'></input>
        </div>
        <div className='row'>
            Enter 5th element of set A:
            <input type="number" name='set-a' id='input-seta5'></input>
        </div>
        <button>Submit</button>
        Set A:-
        <input type="number" name='set-a' value="" id='input-seta-final'></input>
        </div>
        <div className='setb'>
        <div className='row'>
            Enter 1st element of set B:
            <input type="number" name='set-b' id='input-setb1'></input>
        </div>
        <div className='row'>
            Enter 2nd element of set B:
            <input type="number" name='set-b' id='input-setb2'></input>
        </div>
        <div className="row">
            Enter 3rd element of set B:
            <input type="number" name='set-b' id='input-setb3'></input>
        </div>
        <div className='row'>
            Enter 4th element of set B:
            <input type="number" name='set-b' id='input-setb4'></input>
        </div>
        <div className='row'>
            Enter 5th element of set B:
            <input type="number" name='set-b' id='input-setb5'></input>
        </div>
        <button>Submit</button>
        Set B:-
        <input type="number" name='set-b' value="" id='input-setb-final'></input>
        </div>
    </div>
    </>
  )
}

export default SetsSim
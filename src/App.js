import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from "react";


function App() {
  const inputElemen = useRef()
  const inputElement = useRef()

  function submit() {
    alert(`${inputElemen.current.value}, ${inputElement.current.value} `);
    

  }

  return (
    <div className='container'>
      <div className='sign'>Sign up  <div className='line'></div> </div>
      <div className='Name'>Name</div>
      <input type='email' ref={inputElemen} className='input' />
      <div className='Name'>Email</div>
      <input type='email' ref={inputElement} className='input' />
      <div className='mini'> <button onClick={submit} className='button'>Submit</button></div>
    </div>
  )
}


export default App;



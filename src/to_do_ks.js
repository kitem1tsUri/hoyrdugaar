import logo from './logo.svg';
import React, { useState, useRef, useEffect } from "react";
import './App.css';


function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [asdvf, akjsbdnlcdvsnjbh] = useState('')

  return (
    <div id='line'>
      <div id='title'> To do list</div>
      <div id='container'>
        <input className='input' value={inputValue} placeholder='input' onChange={(e) => setInputValue(e.target.value)} />
        <Button className="button1" onClick={() => { setList([...list, inputValue]); setInputValue('') }} value="Add" />
      </div>
      <div className='tasks'>
        {list.map((todo, index) => asdvf.length > 0 ? todo.startsWith(asdvf) &&
          < Text value={todo} index={index} list={list} setList={setList} />
          : <Text value={todo} index={index} list={list} setList={setList} />)}
      </div>
      <div>
        <input onChange={(asdsad) => akjsbdnlcdvsnjbh(asdsad.target.value)} /> <button onClick={filt} />
      </div>
    </div>
    <div className='container'> 
    <div className='mini'>
    <img src={require('./star.png')} /> 
    <img src={require('./star.png')} /> 
    <img src={require('./star.png')} /> 
    <img src={require('./star.png')} /> 
    <img src={require('./star.png')} /> 
    </div>
    <div className='text'> Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
    </div>
  );
  function filt() {

  }
  function Text({ value, index, list, setList }) {
    const deleteTodo = () => {
      const newlist = list.filter((cur) => cur !== value);
      setList(newlist)
    }
    return (
      <div className='task-container'>
        <input className='checkbox' type={'checkbox'} />
        <p>{`Task # ${index + 1} ${value}`}</p>

        <Button className="button1" onClick={deleteTodo}
          value="Delete" />
      </div>
    )
  }
  function Button(props) {
    return <button className={props.className} onClick=
      {props.onClick}>{props.value} </button>
  }
}


export default App;

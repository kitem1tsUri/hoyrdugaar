import logo from './logo.svg';
import React, { useState, useRef, useEffect } from "react";
import './App.css';
import { useContext } from 'react';
import { createContext } from 'react';

export const Context = createContext()

function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [asdvf, akjsbdnlcdvsnjbh] = useState('')

  return (
    <Context.Provider value={{list, setList}}>
      <div id='line'>
        <div id='title'> To do list</div>
        <div id='container'>
          <input className='input' value={inputValue} placeholder='input'  onChange={(e) => setInputValue(e.target.value)} />
          <Button className="button1" onClick={() => { setList([...list, inputValue]); setInputValue('') }} value="Add" />
        </div>
        <div className='tasks'>
          {list.map((todo, index) => asdvf.length > 0 ? todo.startsWith(asdvf) &&
            < Text index={index} value={todo} />
            : <Text index={index} value={todo} />)}
        </div>
        <div>
          <input onChange={(asdsad) => akjsbdnlcdvsnjbh(asdsad.target.value)} /> <button onClick={filt} />
        </div>
      </div>
      
    </Context.Provider>
  );
  function filt() {

  }
  function Text({ index, value }) {
    // { value, index, list, setList }
    const {list, setList } = useContext(Context)
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

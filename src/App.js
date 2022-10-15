import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  return (
    <div id='line'>
      <div id='title'> To do list</div>
      <div id='container'>
        <input className='input' value={inputValue} placeholder='input' onChange={(e) => setInputValue(e.target.value)} />
        <Button className="button1" onClick={() => { setList([...list, inputValue]); setInputValue('') }} value="Add" />
      </div>
      <div className='tasks'>
        {list.map((todo, index) => <Text value={todo} index={index} list={list} setList={setList} />)}
      </div>
    </div>

  );
  function Text({ value, index, list, setList }) {
    const deleteTodo = () => {
      const newlist = list.filter((cur) => cur !== value);
      setList(newlist)
    }
    return (
      <div className='task-container'>
        <input className='checkbox' type={'checkbox'} />
        <p>{`Task # ${index + 1 } ${value}`}</p>

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



import { useContext,    useEffect, useState } from "react";
import axios from "axios";
import { DarkmodeContext } from "./darkModeProvider";
import { useParams } from "react-router-dom";
import { createContext } from "react";
import "./Comment.css"
export const Context = createContext();

const Comment = () => {
  const [inputValue, setInputValue] = useState("");
  const [asdvf, akjsbdnlcdvsnjbh] = useState("");
  const [list, setList] = useState([]);
  const { darkmode, setdarkmode } = useContext(DarkmodeContext);
  const { dog } = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    const res = await axios.get(`https://dummyapi.io/data/v1/post/${dog}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "636a0100b23c1794f297d097",
      },
    });
    console.log(res);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div className={`tom ${darkmode && "dark"}`}> 
              <div className="header">
                      <div className="mini">
                        <label class="switch">
                          <input type="checkbox" onClick={() => setdarkmode(!darkmode)} />
                     <span class="slider round"></span>
                   </label>
                   <div className={`texts ${darkmode && "light"}`}>team.</div>
                   <div className={`texts ${darkmode && "light"}`}>Products </div>
                   <div className={`texts ${darkmode && "light"}`}>Services </div>
                   <div className={`texts ${darkmode && "light"}`}>Contact </div>
                   <div className={`texts ${darkmode && "light"}`}>Log in </div>
                   <div className={`texts ${darkmode && "light"}`}>Get access </div>
                 </div>
      </div>
        <div>
            <img className="pic" src={data?.image}/>
        </div>
        <div className={`dog ${darkmode && "light"}`}>dog white</div>
         <div className="commen">
         <div className="comments">
            <Context.Provider value={{ list, setList }}>
              <div className={`${darkmode && "light"}`} id="line">
                <div id="title">comments</div>
                <div id="container">
                  <input
                    className="input"
                    value={inputValue}
                    placeholder="input"
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Button
                    className="button1"
                    onClick={() => {
                      setList([inputValue, ...list]);
                      setInputValue("");
                    }}
                    value="Add"
                  />
                </div>
                <div className="tasks">
                  {list.map((todo, index) =>
                    asdvf.length > 0 ? (
                      todo.startsWith(asdvf) && (
                        <Text index={list.length - index} value={todo} />
                      )
                    ) : (
                      <Text index={list.length - index} value={todo} />
                    )
                  )}
                </div>
                <div>
                  {/* <input
                    onChange={(asdsad) => akjsbdnlcdvsnjbh(asdsad.target.value)}
                  /> */}
                  {/* <button onClick={filt} /> */}
                </div>
              </div>
            </Context.Provider>
          </div>
         </div>
      </div>;
        // function filt() {}
        function Text({ index, value }) {
          // { value, index, list, setList }
          //   const {list, setList } = useContext(Context)
          const deleteTodo = () => {
            const newlist = list.filter((cur) => cur !== value);
            setList(newlist);
          };
          return (
            <div className={`task-container ${darkmode && "light"}`}>
              <p>{`nobodys comment ; ${index} ; ${value}`}</p>
    
              <Button className="button1" onClick={deleteTodo} value="Delete" />
            </div>
          );
        }
        function Button(props) {
          return (
            <button className={props.className} onClick={props.onClick}>
              {props.value}{" "}
            </button>
          );
        }

  
};
export default Comment;

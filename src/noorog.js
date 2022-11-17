import logo from "./logo.svg";
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Link, Route, redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import "./main.css";
import { useContext } from "react";
import { createContext } from "react";
import image1 from "./picture/pad/icon.png";
import Card from "./components/Card";
import axios from "axios";

export const Context = createContext();

function App() {
  const [data, setData] = useState([]);
  const [darkmode, setDarkmode] = useState(false);
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [asdvf, akjsbdnlcdvsnjbh] = useState("");
  const getData = async () => {
    const res = await axios.get("https://dummyapi.io/data/v1/post?limit=10", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "636a0100b23c1794f297d097",
      },
    });
    // let ducked;
    // ducked = res.data
    console.log(res.data.data[0].image);
    setData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
      <div className="App">
      <button onClick={getData}>eniig chini ingej shaadaggui shdee huslee durkaa tolgoi tarhia ajluulda</button>
      {
        data.map((dfgh) => <div><img src={dfgh.image}/></div>)
      }

    </div>
    return (
      <div className="tom">
        <div className={`${darkmode && "dark"}`}>
          <div className="header">
            <div></div>
            <div className="mini    ">
              <label class="switch">
                <input type="checkbox" onClick={() => setDarkmode(!darkmode)} />
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
            <div className="hi"></div>
            <div className={`blog ${darkmode && "light"}`}>Blog posts</div>
            <div className={`lorem ${darkmode && "light"}`}>
              lorem baihaa bolitsin bolu eshul ajilha bolitsim boluu ayquuu ks
            </div>
          </div>
          <div>
            <div  className="photo">
              {/* <button onClick={getData}>
                eniig chini ingej shaadaggui shdee huslee durkaa tolgoi tarhia
                ajluulda
              </button> */}
              {
                    data.map((dfgh) =>
                     <div><img src={data[0].image} /></div>)
                }  
              <div>
                <img className="picture" src={data[0]?.image} />{" "}
              </div>
            </div>
          </div>
          <div>

          </div>
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
      </div>
    );
    function filt() {}
    function Text({ index, value }) {
      // { value, index, list, setList }
      //   const {list, setList } = useContext(Context)
      const deleteTodo = () => {
        const newlist = list.filter((cur) => cur !== value);
        setList(newlist);
      };
      return (
        <div className="task-container">
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
  }
  export default App;
  return (
    <div>
      <div className="header">
        <div className="team"> </div>
        <div className="log">
          <Link className="texts" to={'/blog'}>Blog</Link>
          <div className="texts">Products </div>
          <div className="texts">Services </div>
          <div className="texts">Contact </div>
          <div className="texts">Log in </div>
          <div className="texts">Get access </div>
        </div>
      </div>
      <div className="container">
        <div className="top"></div>
        <div>
          <div className="title">Instant collaborations for remote teams</div>
          <div className="minititle">
            All in one for your remote team chats, collaboration and track
            projects
          </div>
        </div>
        <div className="bottom">
          <div>
            <input className="input" typeof="Email" />
          </div>
          <div className="get">
            <p className="ear">Get early access</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="titles">
          <div>
            <div className="your_title"> Your Hub for teamwork</div>
            <div className="give_title">
              {" "}
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
          </div>
        </div>
        <div className="Grow"></div>
        <div className="pad">
          <div className="padd"></div>
          <div className="paddd">
            <img src={image1} />{" "}
          </div>
          <div className="padddd"></div>
          <div className="bell"></div>
        </div>
      </div>
      <div className="mini_container">
        <div className="women">
          <div className="deed"></div>
          <div className="dood"></div>
        </div>
        <div className="text">
          <div className="simple">Simpe task managment</div>
          <div className="lorem">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
        </div>
      </div>
      <div className="minii_container">
        <div className="textt">
          <div className="simple">Scheduling that actually works </div>
          <div className="lorem">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
        </div>
        <div className="woman">
          <div className="calendar"></div>
        </div>
      </div>
      <div className="what">What people say about us</div>
      <div className="bottom_container">
        <Card text={"hi bro"} name={"amy"} />
        <Card text={"lorem lorem ysm iisen "} mame={"richard"} />
        <Card
          text={
            "lorem lorem ysm iisen ayquu ydarchen ih onoo taviara bagshaa huurhun shu hha "
          }
          mame={"elouna"}
        />
      </div>
      <div className="footer"></div>
   
        
    </div>
  );
}
// const App = () => {
//     return (

//     )

// }
export default App;

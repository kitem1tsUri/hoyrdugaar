import React, { useContext, useEffect, useState } from "react";
import "./Blog.css";
import { DarkmodeContext } from "./darkModeProvider";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Blog = () => {
  const [data, setData] = useState([]);
  const { darkmode, setdarkmode } = useContext(DarkmodeContext);
  const navigation = useNavigate();
  const getData = async () => {
    const res = await axios.get("https://dummyapi.io/data/v1/post?limit=1", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "636a0100b23c1794f297d097",
      },
    });
    console.log(res.data.data[0].image);
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const console1 = (id) => {
    navigation(`${id}`)
  };
  return (
    <div className={`tom ${darkmode && "dark"}`}>
      <div className="header">
        <div className="mini">
          <label class="switch">
            <input type="checkbox" onClick={() => setdarkmode(!darkmode)} checked={darkmode}/>
            <span class="slider round"></span>
          </label>
          <div className={`texts ${darkmode && "light"}`}>team.</div  >
          <Link className={`texts ${darkmode && "light"}`} to={'/'}>Home</Link>
          <div className={`texts ${darkmode && "light"}`}>Services </div>
          <div className={`texts ${darkmode && "light"}`}>Contact </div>
          <div className={`texts ${darkmode && "light"}`}>Log in </div>
          <div className={`texts ${darkmode && "light"}`}>Get access </div>
        </div>
      </div>
      <div className="blog">
        <div className={`${darkmode && "light"}`}>Blog posts</div>
        <div className={`text ${darkmode && "light"}`}>
          {" "}
          lorem kesho zza enech ajilkuul bhlda ayquu useContext ee oilgochih
          ymsn
        </div>
      </div>
      <div className="dog">
        {data.map((dfgh) => (
          <div className="dogs" onClick={() => console1(dfgh.id)}>
            <img className="hi" src={dfgh.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

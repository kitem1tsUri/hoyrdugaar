import logo from './logo.svg';
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import "./main.css";
function App() { 
    return (
        <div className='container'>
            ok
        </div>




    )
// const App = () => {
//     return (
//         <BrowserRouter>
//         <Link to="/about">about</Link>

//         <Link to="./users"> users</Link>

//         <Link to="./home"> home</Link>

//             <Routes>
//                 <Route path='/home' element={<Home />} />
//                 <Route path='/about' element={<About />} />
//                 <Route path='/users' element={<Users />} />
//                 <Route path='/' element={<Home />} />
//             </Routes>
//         </BrowserRouter>


//     )


// }
}
export default App;

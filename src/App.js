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
            <div className='top'> 
                <div className='team'> team <p className='dot'>.</p>
                </div>
                <div> team 
                </div> 

            </div>
            <div>
                <div className='title'> 
                Instant collaborations for remote teams
                </div>
                <div className='minititle'> 
                All in one for your remote team chats,
                 collaboration and track projects
                </div>
            </div>
            <div className='bottom'> 
                <div>
                    <input className='input' typeof='Email' />
                </div>
                <div className='get'>
                    <p className='ear'>Get early access</p>
                </div>
            </div>
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

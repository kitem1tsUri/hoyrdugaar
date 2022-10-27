import logo from './logo.svg';
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import "./main.css";
import image1 from './picture/pad/icon.png'

function App() {
    return (
        <div>
            <div className='header'>
                <div className='team'> </div>
                <div className='log'>
                    <div className='texts'>Products </div>
                    <div className='texts'>Services </div>
                    <div className='texts'>Contact </div>
                    <div className='texts'>Log in </div>
                    <div className='texts'>Get access </div>
                </div>
            </div>
            <div className='container'>
                <div className='top'>
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
            <div className='flex'>
                <div className='Grow'>

                </div>
                <div className='pad'>
                    <div className='padd'>h2</div>
                    <div className='paddd'><img className='image1' src={image1} /> </div>
                    <div className='padddd'><img/> </div>
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
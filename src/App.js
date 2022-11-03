import logo from './logo.svg';
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import "./main.css";
import image1 from './picture/pad/icon.png'
import Card from './components/Card';

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
                <div className='titles'>
                    <div>
                        <div className='your_title'> Your Hub for teamwork</div>
                        <div className='give_title'> Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
                    </div>
                </div>
                <div className='Grow'>

                </div>
                <div className='pad'>
                    <div className='padd'></div>
                    <div className='paddd'><img src={image1} /> </div>
                    <div className='padddd'></div>
                    <div className='bell'></div>
                </div>
            </div>
            <div className='mini_container'>
                <div className='women'>
                    <div className='deed'></div>
                    <div className='dood'></div>
                </div>
                <div className='text'>
                    <div className='simple'>
                        Simpe task managment
                    </div>
                    <div className='lorem'>
                        Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.
                    </div>

                </div>
            </div>
            <div className='minii_container'>
                <div className='textt'>
                    <div className='simple'>
                        Scheduling that actually works                    </div>
                    <div className='lorem'>
                        Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.
                    </div>

                </div>
                <div className='woman'>
                    <div className='calendar'></div>
                </div>
            </div>
            <div className='what'>
                What people say about us
            </div>
            <div className='bottom_container'>
                <Card text={"hi bro"} name={"amy"}/>
                <Card text={"lorem lorem ysm iisen "} mame={"richard"}/>
                <Card text={"lorem lorem ysm iisen ayquu ydarchen ih onoo taviara bagshaa huurhun shu hha "} mame={"elouna"}/>
            </div>
            <div className='footer'> 
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
import React from 'react'
import Bot from './component/Common/BOT/Bot';
import Home from './component/Home/Home';
import Navbar from './component/Common/Navbar/Navbar';
import Alumni from './component/Alumni/Alumni';
import Faculty from './component/Faculty/Faculty';
import Members from './component/Members/Members';
import Event from './component/Events/Event';
import {Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <Bot/>
        {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/alumni' element ={<Alumni/>}  />
        <Route path='/faculty' element ={<Faculty/>}  />
        <Route path='/members' element ={ <Members/> }  />
        <Route path='/event' element={<Event/>}  />
      </Routes>
    </>
  );
}
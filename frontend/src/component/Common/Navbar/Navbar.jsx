import React, { useEffect, useState } from 'react'
import './style.css';
import Button from './Buttons/Button';
import Button2 from './Button2/Button2';
import Heading from './Heading/Heading';

export default function Navbar() {
    const [show, setShow]= useState(false);
    const [pathName, sePathName]= useState(window.location.pathname);
  return (
    <>
    <div className="navbar-container">
        <div className="left-container">
            {/* <img src="./assets/img/img_1.jpg" alt="img" /> */}
            <Heading text={"ECE Society"} />
        </div>
        <div className="right-container">
            {!show? (<>
                <i onClick={()=>{ setShow(true) }} class="fa-solid fa-bars"></i>
            </>):(<>
            <ul>
                <li onClick={()=>{setShow(false)}}  > <Button2 text={"Home"} nav={'/'} sePathName={sePathName}  isFocus={pathName==='/' ? true: false} />  </li>
                <li onClick={()=>{setShow(false)}} > <Button2 text={"Events"} nav={'/event'}sePathName={sePathName}  isFocus={pathName.includes('event')? true: false} />  </li>
                <li onClick={()=>{setShow(false)}} > <Button2 text={"Members"} nav={'/members'}sePathName={sePathName}  isFocus={pathName.includes('members')? true: false} />  </li>
                <li onClick={()=>{setShow(false)}} > <Button2 text={"Alumni"} nav={'/alumni'}sePathName={sePathName}   isFocus={pathName.includes('alumni')? true: false} />  </li>
                <li onClick={()=>{setShow(false)}} > <Button2 text={"Faculty"} nav={'/faculty'}sePathName={sePathName}  isFocus={pathName.includes('faculty')? true: false} />  </li>
            </ul>
            </>)}
                {/* <Button text={"Admin"} /> */}
        </div>
    </div>
    </>
  )
}

import React, { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function Button2( {text , nav, isFocus, sePathName} ) {
  const [color, setColor]= useState("blue");
  const navigate= useNavigate();
  const width= window.innerWidth;
  console.log(width);
  useEffect(()=>{
    if(width<=800){
      setColor("black");
    }
  },[])
  return (
    <>
    <button className='navbar-button' style={isFocus ? {borderBottom: `2px solid ${color}`,paddingBottom: "5px" }: {paddingBottom: "inherit"} } onClick={()=>{
      navigate(nav);
      sePathName(window.location.pathname);
    }} >
       <p style={isFocus ? {color: "blue"}: {color: "black"} }> {text} &nbsp; </p>
    </button>
    </>
  )
}

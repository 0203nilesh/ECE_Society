import React from 'react';
import './style.css';

export default function Heading({text}) {
  return (
    <>
    <a className="fancy-container" href="#">
        <span className="top-key"></span>
        <span className="text">{text}</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
    </a>
    </>
  )
}

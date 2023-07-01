import React from 'react';
import './style.css';

export default function Heading({text}) {
  return (
    <>
    <button data-text="Awesome" class="hero-button">
    <span class="actual-text">&nbsp;{text}&nbsp;</span>
    <span class="hover-text" aria-hidden="true">&nbsp;{text}&nbsp;</span>
    </button>
    </>
  )
}

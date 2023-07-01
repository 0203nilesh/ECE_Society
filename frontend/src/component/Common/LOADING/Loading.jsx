import React from 'react'
import './styles.css';

export default function Loading() {
  return (
    <>
	<div className="loader-container">
		<div class="loader">
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
		</div>
	</div>
    </>
  )
}

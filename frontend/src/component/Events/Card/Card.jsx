import React from 'react'
import './style.css';
import Carousel from '../Carousel/Carousel';

export default function Card({data}) {
  return (
    <>
    <div class="event-card">
  <div class="card-inner">
    <div class="card-front">
      <p className="event-heading">Event Heading</p>
      <p className='event-venue'> <span>Date</span>  <span>Block 3 EEE Department</span> </p>
      <p className='event-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus eius accusantium distinctio neque repudiandae omnis debitis placeat. Hic placeat voluptatem fugiat quibusdam. </p>
    </div>
    <div class="card-back">
      {/* <p>Back Side</p> */}
      <Carousel data={data} />
    </div>
  </div>
</div>

    </>
  )
}

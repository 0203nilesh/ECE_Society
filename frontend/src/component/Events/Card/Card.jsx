import React from 'react'
import './style.css';
import Carousel from '../Carousel/Carousel';

export default function Card({data}) {
  return (
    <>
    <div class="event-card">
  <div class="card-inner">
    <div class="card-front">
      <p className="event-heading">{data?.name}</p>
      <p className='event-venue'> <span> {data?.date} </span>  <span> {data?.venue} </span> </p>
      <p className='event-description'> {data?.description} </p>
    </div>
    <div class="card-back">
      {/* <p>Back Side</p> */}
      <Carousel data={data.image} />
    </div>
  </div>
</div>

    </>
  )
}

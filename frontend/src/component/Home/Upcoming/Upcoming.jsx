import React from 'react'
import './style.css';
import Button from './Button/Button';

export default function Upcoming({data}) {
  return (
    <>
    <div className="event-container">
          <div className="event-heading">
            <p>Upcoming Events  &nbsp; <i class="fa-solid fa-calendar-days"></i> </p>
          </div>
          <div className="event-carousel">
                <div className='event-details'>
                    <img className='upcoming-img' src="./assets/img/upcoming.gif" alt="upcoming" />
                    <p className='event-heading'> {data?.name} </p>
                    <p className='event-date' >Event Date: {data?.date} </p>
                    <p className="event-description"> {data.description} </p>
              </div>
              <img src={data?.image} alt="" />
          </div>
              <Button/>

       </div>
    </>
  )
}

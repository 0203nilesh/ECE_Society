import React from 'react'
import './style.css';

export default function Card({data}) {
  return (
    <>
    <div class="card">
      <div className='front-card' >
      <img src={data.image} alt="" />
      </div>
  <div class="card__content">
    <p class="card__title">{data.name}</p>
    <p className="card_position">{data.position}</p>
    {/* <p class="card__description">{data.details.substring(0,120)}</p> */}
    <p className="card_contact"> <i class="fa-solid fa-envelope"> </i> &nbsp; {data.contact}  </p>
  </div>
</div>
    </>
  )
}

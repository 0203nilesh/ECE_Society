import React from 'react'
import './style.css';

export default function Card({data}) {
  // console.log(data);
  return (
    <>
    <div class="card">
      <img src={data.image} alt="" />
  <div class="card__content">
    <p class="card__title">{data.name}</p>
    <p class="card__description">{data.position}</p>
  </div>
</div>
    </>
  )
}

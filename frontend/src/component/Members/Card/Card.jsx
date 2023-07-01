import React from 'react'
import './style.css';
import { CAvatar } from '@coreui/react';
import { Link } from 'react-router-dom';

export default function Card({data}) {
  return (
    <>
    <div class="member-card">
      <div class="container-image">
        <img className="image-circle member-img" src={data.image} alt="" />
        {/* <CAvatar src='./assets/img/group.png' /> */}
      </div>
      <div class="content">
        <div class="detail">
          <span>{data.name} <br/> {data.position}</span>
          <p> {data.year} </p>
          <Link to={data.contact} > <i class="fa-brands fa-linkedin"></i></Link>
        </div>
        {/* <div class="product-image">
          <div class="box-image">
        <img className="image-circle member-img " src="./assets/img/group.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
    </>
  )
}

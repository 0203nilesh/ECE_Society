import React from 'react';
import './style.css';
import Card from './Card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetch_alumni} from '../../actions/alumni';
import Loading from '../Common/LOADING/Loading';
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';

export default function Alumni() {
  const dispatch= useDispatch();
  const {alumniData} = useSelector((state)=> state.alumni);
  useEffect(()=>{
    dispatch(fetch_alumni());
  },[])
  // console.log(alumniData);
  return (
    <>
    {alumniData?.length===0 ? (<>
    <Loading/>
    </>): (<>
    <Navbar/>
      <div className="alumni-container">
        <div className="alumni-heading">
            <img src="./assets/img/alumni.png" alt="" />
            <p>Alumni's Details</p>
        </div>
        <div className="alumni-innet-box">
          {alumniData.map((alumni)=>{
            return(
              <Card data={alumni} />
            )
          })}
        </div>
    </div>
    <hr></hr>
    <Footer/>
    </>)}
    </>
  )
}

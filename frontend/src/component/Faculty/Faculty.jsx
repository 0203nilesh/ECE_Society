import React, { useEffect } from 'react'
import Card from './Card/Card'
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import {fetch_faculty} from '../../actions/faculty';
import Loading from '../Common/LOADING/Loading';
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';

export default function Faculty() {
  const dispatch= useDispatch();
  const {facultyData}= useSelector((state)=>state.faculty);
  useEffect(()=>{
    dispatch(fetch_faculty());
  },[])
  console.log(facultyData);
  return (
    <>
    {facultyData.length===0? (<>
      <Loading/>
    </>) : (<>
    <Navbar/>
    <div className="faculty-container">
        <div className="faculty-heading">
            <img src="./assets/img/alumni.png" alt="" />
            <p>Faculty</p>
        </div>
        <div className="faculty-inner-container">
          {facultyData.map((faculty)=>{
            return (<>
            <Card data={faculty} />
            </>)
          })}
        </div>
    </div>
    <hr></hr>
    <Footer/>
    </>)}
    </>
  )
}

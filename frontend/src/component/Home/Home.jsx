import React, { useEffect } from 'react';
import './style.css';
import Heading from './Heading/Heading';
// import Carousel from './Carousel/Carousel';
import Navbar from '../Common/Navbar/Navbar';
import Upcoming from './Upcoming/Upcoming';
import GoaldAndVision from './GoalAndVision/GoaldAndVision';
import Footer from '../Common/Footer/Footer';
import  {useDispatch, useSelector } from 'react-redux';
import { fetch_upcoming } from '../../actions/upcoming';
import { fetch_society_data } from '../../actions/society';
import Loading from '../Common/LOADING/Loading';

export default function Home() {
  const {upcomingData}= useSelector((state)=>state.upcoming);
  const {societyData}= useSelector((state)=> state.society);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetch_upcoming());
    dispatch(fetch_society_data());
  }, [])
  console.log(upcomingData)
  console.log(societyData)
  return ( 
    <>
    {upcomingData.length==0 || societyData === null ? (<>
    <Loading/>
    </>) : (<>
      <Navbar/>
    <div className="home-container">
       <div className="hero-container">
          <Heading text={"ECE_Society"} />
          <p> {societyData?.about} </p>
       </div>
       <hr></hr>
       <GoaldAndVision data={societyData} />
       <hr></hr>
       {upcomingData.map((upcoming)=>{
        return (
          <Upcoming data={upcoming} /> 
        )
       })}
       <hr></hr>
       <Footer/>
    </div>
    </>)}
    </>
  )
}

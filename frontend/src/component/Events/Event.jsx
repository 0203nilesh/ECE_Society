import React, { useEffect } from 'react';
import './style.css';
import Carousel from './Carousel/Carousel';
import {useDispatch, useSelector} from 'react-redux'
import {fetch_events} from '../../actions/events';
import Navbar from '../Common/Navbar/Navbar';
import Loading from '../Common/LOADING/Loading';
import Footer from '../Common/Footer/Footer';
import Card from './Card/Card';


export default function Event() {
  const dispatch= useDispatch();
  const {eventData} = useSelector((state)=>state.events);
  useEffect(()=>{
    dispatch(fetch_events());
  },[])
  console.log(eventData);
  return (
    <>
    {eventData.length===0? (<>
    <Loading/>
    </>): (<>
    <Navbar/>
    <div className="event-container">
        <div className="event-heading">
          <img src="./assets/img/event.png" alt="event" />
            <p>Events </p>
        </div>
        <div className="event-inner-box">
            {eventData.map((event)=>{
              return (
                // <Carousel data={event}/>
                <Card data={event} />
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

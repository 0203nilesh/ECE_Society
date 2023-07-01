import React, { useEffect, useState } from 'react'
import './style.css';
import Card from './Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {fetch_members} from '../../actions/members';
import Loading from '../Common/LOADING/Loading';
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';

export default function Members() {
  const [memberYear, setMemberYear]= useState("2019");
  const dispatch= useDispatch();
  const {memberData} = useSelector((state)=>state.member);
  let newMemberData= memberData;
  useEffect(()=>{
    dispatch(fetch_members());
  },[])
  newMemberData= memberData?.filter((member)=>{
    return member.year===memberYear;
  })
  console.log(newMemberData);
  return (
    <>
    {memberData.length===0? (<>
    <Loading/>
    </>) :( <>
    <Navbar/>
    <div className="member-container">
        <div className="member-heading">
            <img src="./assets/img/alumni.png" alt="member" />
            <p>Members</p>
        </div>
        <div className="filterByYear">
          <p onClick={()=>setMemberYear("2020")}>2020</p>
          <p onClick={()=>setMemberYear("2021")} >2021</p>
          <p onClick={()=>setMemberYear("2019")} >2019</p>
        </div>
        <div className="member-inner-container">
            <div className="result-heading">
              <p>
                {memberYear} Members
              </p>
            </div>
            <div className="member-box">
              {newMemberData.length===0 ? (<>
              <img src="./assets/img/sorry.png" alt="sorry" />
              {/* <p>No Data of this batch</p */}
              </>): (<>
                {newMemberData.map((member)=>{
                if(member.year===memberYear){
                return (<>
                <Card data={member} />
                </>)
                }
              })}
              </>)}
            </div>
        </div>
    </div>
    <hr></hr>
    <Footer/>
    </>)}
    </>
  )
}

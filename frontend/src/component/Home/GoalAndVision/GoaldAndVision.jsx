import React from 'react'
import './style.css';
export default function GoaldAndVision({data}) {
  return (
    <>
    <div className="goalNvision-container">
          <div className="goalNvision-heading">
            <p>Goal and Vision &nbsp; <img src="./assets/img/goalAndVision.png" alt="goal&vision" /> </p>
          </div>
          <div className="goalNvision-content">
                <div className="goal-box">
                  <p>
                    <span className="heading">Goals</span> {data.goal} </p>
                  <img src="./assets/img/goals.png" alt="goal" />
                </div>
                <div className="vision-box">
                  <img src="./assets/img/vision.png" alt="vision" />
                  <p>
                  <span className="heading">Vision</span> {data.vision} </p>
                </div>
          </div>
       </div>
    </>
  )
}

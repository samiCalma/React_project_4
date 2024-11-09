import React from "react";
import image from "../Images/Group 77.png"


export default function Hero (props) {
   return (

    <hero>
        <div className="hero">
            <div className="hero-img-container">
                <img src={image}/>
            </div>
            <div className="details">
                <h1>Online Expreiences</h1>
                <p>Join unique interactive activites led by one of a kind hosts all without leaving home.</p>
            </div>
        </div>
    </hero>
) 
}
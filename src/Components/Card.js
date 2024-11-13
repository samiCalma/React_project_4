import React from "react";

import star from "../Images/Star 1.png"

export default function Card (props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  }
  else if(props.location === 'Online') {
    badgeText = 'ONLINE'
}
return (
        <div>
        <article className="card-container">
            <div className="image-container">
       {badgeText && <p className='badge-text'>{badgeText}</p>}
            <img src={props.coverImg}/>
          </div>
        <div className="card-info">
          <p><span><img src={star} className="star-img"/></span> {props.rating}<span className="grey"> ({props.reviewCount}).{props.location}</span></p>
          <h1 className="card-title"> {props.title}
          </h1>
        <p><strong>From ${props.price}</strong><span className="person"> / person</span>
          </p>
        </div>
        </article>
        </div>
        

    )
}


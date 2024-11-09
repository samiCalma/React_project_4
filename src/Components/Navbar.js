// import React from 'react';


// export default function Navbar() {
//     return (
//         <>
//         <div className='nav-container'>
//         <i class="fas fa-globe"></i><p>my travel journal</p>
        
//         </div>
//         </>
//     )
// }
import React from "react";
import image from "../Images/airbnb.png"

export default function Navbar () {
    return (
       
        <div>
            <div className="nav-container">
           <img src={image}/>
            </div>
        </div>
    )
}
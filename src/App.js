// import React from "react";
// import Navbar from "./Components/Navbar";
// import Card from "./Components/Card";
// import Data from "./Components/data"

// const dataNew = Data.map(function(item){
//   return <Card
//   key = {item.id}
//   {...item}
  
//   />


// })
// export default function App (){
//   return(
//     <>
//     <Navbar/>
//     {dataNew}
//     </>
//   )
// }

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Data from "./Components/data"


function App() {
  const cardData = Data.map(function(items){
    return  <Card  
         key = {items.id}
        {...items}
        />
  })
  
return (
<>
  <Navbar></Navbar> 
  <Hero></Hero>
  <div className="card-list">
   {cardData}
  </div>

</>
)
}

export default App;
 
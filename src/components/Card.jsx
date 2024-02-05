import React from "react";

export default function Card() {
  return (

  <div className="h-[300px] w-[400px] bg-green-300 rounded-t-xl absolute">
    
    <div className="top h-[50%] w-[100%] bg-blue-300 rounded-t-xl">
      <div className="bg-victor h-[100%] bg-no-repeat bg-rounded relative top-20 bottom-0 left-24 right-0">

      </div>
      
    </div>
    <div className="bot top h-[50%] w-[100%] bg-purple-300 ">

    </div>
    <div className="h-[100px] w-[400px] bg-red-300 flex justify-around items-center text-center rounded-b-xl">
    <div className="nbr">80K <br />Followers</div>
    <div className="nbr">803K <br />Likes</div>
    <div className="nbr">1.4K <br />Photos</div>
  </div>
  </div>
)}

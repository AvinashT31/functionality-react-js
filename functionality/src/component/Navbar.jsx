import React, { useState } from "react";
import './Styles.css'

function Navbar() {

  const [divisible, setdivisible] = useState(false);
  console.log(divisible, "divisible");

  function handlclick() {
    // alert("working");
    setdivisible(true);
  }


  return (
    <div>
      <div id="navbar">
        <div id="nav1">
          <p>Competition</p> 
        </div>
        <div id="nav2">

        </div>
        <div id="nav3">
          <p>Sort By</p>
        </div>
        <div id="nav4">

        </div>
        <div id="nav5">
          <p>All Filters</p>
        </div>
        <div id="nav6">
          <p>Status</p>
        </div>
        <div id="nav7">
          <p>Eligibility</p>
        </div>
        <div id="nav8">
          <p>Cateogery</p>
        </div>
      </div>
      

    </div>
  )

}

export default Navbar;
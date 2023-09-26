import React from 'react';


// let container = document.querySelector(".container");
// let btn = document.getElementById("spin");
// let number = Math.ceil(Math.random() * 1000);

// btn.onclick = function () {
//   container.style.transform = "rotate(" + number + "deg)";
//   number += Math.ceil(Math.random() * 1000);
// }

function Home () {
    return (
        
        <>
        <h1>What Are We Lifting Today</h1>
  <button id="spin">Spin</button>
  <span class="arrow"></span>
<div class="container">
  <div class="one">Shoulders</div>
  <div class="two">Chest</div>
  <div class="three">Biceps</div>
  <div class="four">Triceps</div>
  <div class="five">Legs</div>
  <div class="six">Abs</div>
  <div class="seven">Cardio</div>
  <div class="eight">sleep</div>
</div>


        </>
        
    );
}

export default Home;
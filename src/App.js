import "./App.css";
import React, { useState } from "react";
function App() {
  return (
    <div className="container">
      <nav>
        <img src="images/logo.png" className="logo" alt="logo" />
        <ul>
          <li>
            <a href="www.google.com">Travel Guide</a>
          </li>
          <li>
            <a href="www.google.com">Famous Places</a>
          </li>
          <li>
            <a href="www.google.com">Contact Us</a>
          </li>
        </ul>
        <button className="btn" >
          <img src="images/images.png" className="icon" alt="Aeroplane" />
          Bookings
        </button>
      </nav>
      <div className="content">
        <h1>Beautiful <br/>Places To Explore </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum qui necessitatibus reiciendis quidem porro voluptas nulla minus molestias odio esse rerum repellendus, fugit doloribus recusandae vitae sit, laudantium nam?</p>
        <form action="">
          <input type="text" placeholder="Country Name" />
          <button type="Submit" className="btn" >Search</button>
        </form>
      </div>
    </div>

  );
}

export default App;

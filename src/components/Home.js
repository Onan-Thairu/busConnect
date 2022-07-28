import './Home.css'
import React from "react";
import traveler from "../images/traveler.svg"
import bus from "../images/bus.svg"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <main>
        <div className="hero">
          <div className='intro'>
            <p>Online Bus Booking service.</p>
            <p>Travel hassle-free.</p>
          </div>
          <div className='images'>
            <img src={traveler} alt="traveler" width="250px" />
            <img src={bus} alt="bus" width="250px" />
          </div>
        </div>
        <div className='bookButton'>
          <Link to="/providers" className="bookBus" >
            <button>BOOK BUS</button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
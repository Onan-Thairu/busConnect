import React from "react";
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <main>
        <p>Online Bus Booking service.</p>
        <p>Travel hassle-free.</p>
        <Link to="/providers" >
          <button>BOOK BUS</button>
        </Link>
      </main>
    </div>
  )
}

export default Home
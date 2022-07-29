import "./BookingDetail.css"
import React, { useEffect, useState } from "react";

function BookingDetail({ bookings }) {
  // const [booked, setBooked] = useState([])

  // useEffect(() => {
  //   fetch("https://busconnectserver.herokuapp.com/bookings")
  //   .then((response) => response.json())
  //   .then((data) => setBooked(data))
  // }, [])

    return (
      <>
        <p>
          <span className="ul-header">{ bookings.provider}</span>:<span className="ul-header">From</span> { bookings.from}  - <span className="ul-header">To</span>{ bookings.to} <span>({bookings.tickets} ticket(s))</span>
        </p>
        <ul>
          {/* {
            
              
              // <li><span className="ul-header">{ book.provider}</span>:<span className="ul-header">From</span> { book.from}  - <span className="ul-header">To</span>{ book.to} <span>({book.tickets} ticket(s))</span></li>
            })
          } */}
        </ul>
      </>
    )
}

export default BookingDetail
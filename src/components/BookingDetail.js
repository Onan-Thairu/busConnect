import "./BookingDetail.css"
import React from "react";

function BookingDetail({ bookings }) {
    return (
      <div>
        <p>
          <span className="ul-header">{ bookings.provider}</span>:<span className="ul-header">From</span> { bookings.from}  - <span className="ul-header">To</span>{ bookings.to} <span>({bookings.tickets} ticket(s))</span>
        </p>
      </div>
    )
}

export default BookingDetail
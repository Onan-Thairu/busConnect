import React from "react";

function BookingDetail({ bookings }) {
    return (
      <>
        <ul>
          <span>{ bookings.provider}: From { bookings.from} - To { bookings.to} ({bookings.tickets} ticket(s))</span>
        </ul>
      </>
    )
}

export default BookingDetail
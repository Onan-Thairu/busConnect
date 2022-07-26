import React, { useEffect, useState } from "react";

function Providers() {
  const [transporters, setTransporters] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/transporters")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        setTransporters(data)
    })
  },[])

  return (
      <>
        <p>Please choose your favourite transport provider.</p>
      {
        transporters.map((transporter) => {
          return (
            <div key={ transporter.id }>
              <h1>{ transporter.name }</h1>
            </div>
          )
        })
      }
      </>
  )
}

export default Providers
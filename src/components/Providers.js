import "./Provider.css"
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Providers({ transporters, setTransporters }) {
  
  useEffect(() => {
    fetch("https://busconnectserver.herokuapp.com/transporters")
    .then((response) => response.json())
    .then((data) => {
        setTransporters(data)
    })
  },[])

  return (
      <>
        <p>Please choose your favourite transport provider.</p>
      {
        transporters.map((transporter) => {
          return (
            <div key={ transporter.id } className="container">
              <Link to={`${transporter.name}`}  >{ transporter.name }</Link>
            </div>
          )
        })
      }
      </>
  )
}

export default Providers
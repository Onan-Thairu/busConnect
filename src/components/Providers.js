import "./Providers.css"
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Providers({ transporters, setTransporters }) {
  
  useEffect(() => {
    fetch("https://busconnectserver.herokuapp.com/transporters")
    .then((response) => response.json())
    .then((data) => {
        setTransporters(data)
    })
  },[setTransporters])

  return (
      <div>
        <div className="choose">
          <p>Please choose your favourite transport provider.</p>
        </div>
        <div className="providerContainer">
          {
          transporters.map((transporter) => {
            return (
              <div key={ transporter.id } className="providerChild">
                <Link to={`${transporter.name}`}  >{ transporter.name }</Link>
              </div>
            )
          })
          }
        </div>
      </div>
  )
}

export default Providers
import "./ProviderDetail.css"
import React from "react";
import { useParams, Link } from "react-router-dom"

function ProviderDetail({ transporters }) {

    const { providerName } = useParams()
    
    let currentProvider = transporters.filter((transporter) => transporter.name === providerName)

    currentProvider = currentProvider[0]

    const route = currentProvider.destinations.map((destination, index) => {

      return (
        <>
          <tbody key={index}>
            <tr key="table-row">
              <td key={destination.from}>{destination.from}</td>
              <td key={destination.to}>{destination.to}</td>
              <td key={destination.seats}>{destination.seats}</td>
              <td key={destination.price}>{destination.price}</td>
              <td key="booking-form"><Link key="link" to="/booking-form">Book</Link></td>
            </tr>
          </tbody>
        </>
      )
    })
 
    return (
        <div className="tableContainer">
            <h1 className="providerName">{ currentProvider.name }</h1>
            <table>
              <thead>
                <tr>
                  <th>FROM</th>
                  <th>TO</th>
                  <th>SEATS</th>
                  <th>{`PRICE(Ksh.)`}</th>
                </tr>
              </thead>
                { route }
            </table>
        </div>
    )
}

export default ProviderDetail
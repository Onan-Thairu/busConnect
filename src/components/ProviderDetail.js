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
            <td>{destination.from}</td>
            <td>{destination.to}</td>
            <td>{destination.seats}</td>
            <td>{destination.price}</td>
            <Link to="/BookingForm">Book</Link>
          </tbody>
        </>
      )
    })
 
    return (
        <div>
            <h1>{ currentProvider.name }</h1>
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
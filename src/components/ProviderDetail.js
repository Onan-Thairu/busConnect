import React from "react";
import { useParams } from "react-router-dom"

function ProviderDetail({ transporters }) {

    const { providerName } = useParams()
    
    const currentProvider = transporters.filter((transporter) => transporter.name === providerName)

    console.log(providerName)
    return (
        <div>
            <h1>Provider Detail</h1>
            <p>{ currentProvider[0].name }</p>
        </div>
    )
}

export default ProviderDetail
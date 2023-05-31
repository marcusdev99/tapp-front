import { useState, useEffect } from "react"
import { Carrier } from "./Carrier"


export const CarrierList = ({ items }) => {

    const showCarriers = () => {
        if (items.length > 0) {
            return (
                <div className="my-2 text-center container">
                    <div className="row">
                        {items.map(({ id, carrierName, units }) => (
                            <Carrier
                                id={id}
                                carrierName={carrierName}
                                units={units}>
                            </Carrier>
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="alert alert-info my-5" role="alert">
                        No hay registros
                    </div>
                </div>
            )
        }
    }

    return (
        showCarriers()
    )

}
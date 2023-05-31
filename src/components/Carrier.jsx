
export const Carrier = ({ id, carrierName, units }) => {


    const showUnits = () => {
        if (units.length > 0) {
            return (
                units.map(({ unitId, model, description }) => (
                    <div key={unitId} className="col">
                        <div className="card m-1">
                            <div className="card-body py-1">
                                <h5 className="card-text">{description}</h5>
                                <p className="card-text">{model}</p>
                            </div>
                        </div>
                    </div>
                ))
            )
        } else {
            return (
                <div className="container">
                    <div className="alert alert-danger my-1" role="alert">
                        No hay unidades disponibles
                    </div>
                </div>


            )
        }

    }
    return (
        <div key={id} className="text-center col-6">
            <div className="my-2 card">
                <div className="card-body">
                    <h3 className="card-title">{carrierName}</h3>
                    <div className="row">
                        {showUnits()}
                    </div>
                </div>
            </div>
        </div>
    )


}
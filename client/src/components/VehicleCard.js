function VehicleCard({ vehicle, onDeleteVehicle }) {
    const { id, make, model, transmission, fuel_type} = vehicle;

    function handleDeleteVehicle() {
        fetch(`http://localhost:3000/vehicles/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteVehicle(id)
            }
        })
    }

    return (
        <ul className="card">
            <li>
            <h3>Vehicle Make: {make}</h3>
            <h4>Vehicle Model: {model}</h4>
            <h5>Vehicle Transmission: {transmission}</h5>
            <h5>Fuel Type: {fuel_type}</h5>
            <button onClick={handleDeleteVehicle}>DELETE</button>
            </li>
        </ul>
    )
}

export default VehicleCard;
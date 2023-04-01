import { useState } from "react";

function NewVehicle( {onAddVehicle }) {
    const [ make, setMake] = useState("")
    const [ model, setModel] = useState("")
    const [ transmission, setTransmission ] = useState("")
    const [ fuel_type, setFuelType ] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/vehicles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                make: make,
                model: model,
                transmission: transmission,
                fuel_type: fuel_type
            }),
        })
        .then((r) => r.json())
        .then((newVehicle) => onAddVehicle(newVehicle));
    }

    return (
        <div className="new-vehicle-form">
            <h2>New Vehicle</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="make"
                placeholder="Vehicle Make"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                />
                <input
                type="text"
                name="model"
                placeholder="Vehicle Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                />
                <input
                type="text"
                name="transmission"
                placeholder="Vehicle Transmission"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                />
                <input
                type="text"
                name="fuel_type"
                placeholder="Vehicle Fuel Type"
                value={fuel_type}
                onChange={(e) => setFuelType(e.target.value)}
                />
                <button type="submit">Add Vehicle</button>
            </form>
        </div>
    )
}

export default NewVehicle;
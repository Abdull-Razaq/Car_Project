import React, { useState } from "react";
import VehicleUpdateButton from "./VehicleUpdateButton";
import VehicleUpdateForm from "./VehicleUpdateForm";


function VehicleCard({ vehicle, onDeleteVehicle, onUpdate }) {

    const { id, make, model, transmission, fuel_type} = vehicle;
    const [isEditing, setIsEditing] = useState(false);

    function handleUpdateVehicle(id) {
        setIsEditing(true);
    }
    
    function handleUpdate(updatedVehicle) {
        // Call the onUpdate function with the updated vehicle data
          // Send a PUT request to the server with the updated vehicle data
        fetch(`http://localhost:3000/vehicles/${updatedVehicle.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedVehicle),
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            // Call the onUpdateSuccess function with the updated vehicle data
            return response.json();
        })
        .then((data) => {
            onUpdate(data);
        })
        .catch((error) => {
            console.error('There was an error updating the vehicle:', error);
        });
        onUpdate(updatedVehicle);
        setIsEditing(false);
    }

    if (isEditing) {
        return (
          <VehicleUpdateForm vehicle={vehicle} onUpdate={handleUpdate} />
        );
    }

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
            <li className="vehicle_card">
            <h3>Vehicle Make: {make}</h3>
            <h4>Vehicle Model: {model}</h4>
            <h5>Vehicle Transmission: {transmission}</h5>
            <h5>Fuel Type: {fuel_type}</h5>
            <VehicleUpdateButton id={vehicle.id} onUpdateVehicle={handleUpdateVehicle} />
            <button onClick={handleDeleteVehicle}>DELETE</button>
            </li>
        </ul>
    )
}

export default VehicleCard;
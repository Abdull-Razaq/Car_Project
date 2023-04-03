import React, { useState } from "react";

function VehicleUpdateForm({ vehicle, onUpdate }) {
    const [make, setMake] = useState(vehicle.make);
    const [model, setModel] = useState(vehicle.model);
    const [transmission, setTransmission] =useState(vehicle.transmission);
    const [fuel_type, setFuelType] = useState(vehicle.fuel_type)
  
    function handleMakeChange(e) {
      setMake(e.target.value);
    }
  
    function handleModelChange(e) {
      setModel(e.target.value);
    }
  
    function handleTransmissionChange(e) {
      setTransmission(e.target.value);
    }

    function handleFuelTypeChange(e) {
        setFuelType(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      const updatedVehicle = { id: vehicle.id, make, model, transmission, fuel_type };
      onUpdate(updatedVehicle);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input type="text" value={make} onChange={handleMakeChange} />
        </label>
        <label>
          Model:
          <input type="text" value={model} onChange={handleModelChange} />
        </label>
        <label>
          Transmission:
          <input type="text" value={transmission} onChange={handleTransmissionChange} />
        </label>
        <label>
          Fuel Type:
          <input type="text" value={fuel_type} onChange={handleFuelTypeChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    );
}
export default VehicleUpdateForm;
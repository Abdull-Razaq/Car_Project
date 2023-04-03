import React from 'react';

function VehicleUpdateButton({ id, onUpdateVehicle }) {
  function handleUpdateVehicle() {
    // Call the onUpdateVehicle function with the ID of the vehicle to update
    onUpdateVehicle(id);
  }

  return (
    <button onClick={handleUpdateVehicle}>
      Update Vehicle
    </button>
  );
}

export default VehicleUpdateButton;
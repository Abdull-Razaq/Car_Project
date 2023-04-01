import VehicleCard from "./VehicleCard"

function VehicleList ({ vehicles, onDeleteVehicle}) {
    return (
        <ul className="cards">
            {vehicles.map((vehicle) => {
                return (
                    <VehicleCard 
                    key={vehicle.id}
                    vehicle={vehicle}
                    onDeleteVehicle={onDeleteVehicle}
                    />
                )
            })}
        </ul>
    )
}

export default VehicleList;
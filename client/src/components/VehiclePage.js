import { useEffect, useState } from "react";
import NewVehicle from "./NewVehicle";
import VehicleList from "./VehicleList";
import Search from "./Search";

function VehiclePage() {
    const [ vehicles, setVehicles] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/vehicles")
        .then((r) => r.json())
        .then((vehicleArray) => {
            setVehicles(vehicleArray)
        })
    }, [])

    function handleAddVehicle(newVehicle) {
        const updatedVehicleArray = [...vehicles,newVehicle];
        setVehicles(updatedVehicleArray)
    }

    function handleDeleteVehicle(id) {
        const updatedVehicleArray = vehicles.filter((vehicle) => vehicle.id !== id)
        setVehicles(updatedVehicleArray)
    }

    const displayedVehicles = vehicles.filter((vehicle) => {
        return vehicle.make.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <main>
            <NewVehicle onAddVehicle={handleAddVehicle} />
            <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <VehicleList 
            vehicles={displayedVehicles}
            onDeleteVehicle={handleDeleteVehicle}
            />
        </main>
    )
}
export default VehiclePage;
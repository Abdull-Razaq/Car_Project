import React from "react";
import VehiclePage from "./VehiclePage";
import Header from "./Header";
import Manufacturers from "./Manufacturer";


function App() {

  return (
    <div className="App">
      <Header />
      <VehiclePage />
      <Manufacturers />
    </div>
  )

}

export  default App;
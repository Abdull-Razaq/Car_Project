import React from "react";
import VehiclePage from "./VehiclePage";
import Header from "./Header";
import Manufacturers from "./Manufacturer";
import Signup from "./Signup";
// import Login from "./Login";


function App() {

  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <Signup />
      <VehiclePage />
      <Manufacturers />
    </div>
  )

}

export  default App;
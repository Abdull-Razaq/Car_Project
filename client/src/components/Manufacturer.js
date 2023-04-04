import React, { useState, useEffect } from 'react';

const Manufacturers = () => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/manufacturers')
      .then(response => response.json())
      .then(data => setManufacturers(data));
  }, []);

  return (
    <div className='manufacturers'>
      <h1>Manufacturers</h1>
      <ul>
        {manufacturers.map(manufacturer => (
          <li key={manufacturer.id}>
            <h2>Name: {manufacturer.name}</h2>
            <p>Country of Origin: {manufacturer.country_of_origin}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Manufacturers;
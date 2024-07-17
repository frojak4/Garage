import React, {useState} from 'react';
import './App.css';
import Car from './Car.jsx';

function App() {

  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");


  function handleBrandChange(event){
    setBrand(event.target.value);
  }

  function handleModelChange(event){
    setModel(event.target.value);
  }

  function handleYearChange(event){
    setYear(event.target.value);
  }

  function addNewCar(){
    const tempCar = {brand: brand, model: model, year: year};
    setCars(c => [...c, tempCar])
    setBrand("");
    setModel("");
    setYear("");
  }

  return (
    <div>
      <div className="header">
        <h3>Your Garage</h3>
      </div>
      <div className="inputs">
        <h3>Enter a new car</h3>
        <input type="text" placeholder="Brand" value={brand} onChange={handleBrandChange}/>
        <input type="text" placeholder="Model" value={model} onChange={handleModelChange}/>
        <input type="text" placeholder="Year" value={year} onChange={handleYearChange}/>
        <button onClick={addNewCar}>Add Car</button>
      </div>
      <div className="cars">
          {cars.map((car, index) => <Car index={index} brand={car.brand} model={car.model} year={car.year}/>)}
      </div>
    </div>
  );
}

export default App;

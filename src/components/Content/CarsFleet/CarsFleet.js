import { useState, useEffect } from "react";
import CarItem from "./CarItem";
import { Cars } from "./Cars";
import CarsFilter from "./CarsFilter";
import "./CarsFleet.css";

const CarsFleet = () => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(Cars);
  }, []);

  return (
    <>
      <h3 id="availableCars" className="available__cars">
        Available cars in our rental fleet ⬇
      </h3>
      <CarsFilter setFiltered={setFiltered} />
      <div className="cars__fleet__container">
        {filtered.map((car) => {
          return car.available ? <CarItem car={car} key={car.model} /> : null;
        })}
      </div>
    </>
  );
};

export default CarsFleet;

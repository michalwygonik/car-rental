import CarItem from "./CarItem";
import { Cars } from "./Cars";
import "./CarsFleet.css";

const CarsFleet = () => {
  return (
    <>
      <h3 id="availableCars" className="available__cars">
        Available cars in our rental fleet ⬇
      </h3>

      <div className="cars__fleet__container">
        {Cars.map((car) => {
          return car.available ? (
            <CarItem
              brand={car.brand}
              model={car.model}
              year={car.year}
              image={car.image}
              gearbox={car.gearbox}
              fuelType={car.fuel_type}
              priceCategory={car.price_category}
              key={car.model}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default CarsFleet;

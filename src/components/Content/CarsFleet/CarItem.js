import "./CarsFleet.css";
import { Cars } from "./Cars";

const CarItem = () => {
  return (
    <>
      {Cars.map((car) => (
        <div className="car__card__container">
          <figure className="car__card__picture">
            <img src={car.image} alt={car.brand} />
          </figure>
          <div className="car__card__info">
            <h4>
              {car.brand} {car.model}
            </h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarItem;

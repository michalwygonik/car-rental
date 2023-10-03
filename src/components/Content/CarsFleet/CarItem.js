import "./CarsFleet.css";
import { useState } from "react";
import RentalWindow from "./RentalWindow/RentalWindow";

const CarItem = (props) => {
  const { brand, model, year, fuel_type, gearbox, price, image } = props.car;

  const [rentalActive, setRentalActive] = useState(false);

  const handleRentalActive = () => {
    setRentalActive(!rentalActive);

    rentalActive
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  };

  return (
    <>
      <div className="car__card__container" onClick={handleRentalActive}>
        <figure className="car__card__picture">
          <img src={image} alt={brand} />
        </figure>
        <div className="car__card__info">
          <h4 className="car__card__info__header">
            {brand} {model}
          </h4>

          <ul className="car__card__info__list">
            <li>
              <i className="fa-solid fa-calendar-days"></i>
              <strong> Year:</strong> {year}
            </li>
            <li>
              <i className="fa-solid fa-gear"></i>
              <strong> Gearbox:</strong> {gearbox}
            </li>
            <li>
              <i className="fa-solid fa-gas-pump"></i>
              <strong> Fuel type:</strong> {fuel_type}
            </li>
            <li>
              <i className="fa-solid fa-money-check-dollar"></i>
              <strong> Price per day:</strong> {price}$
            </li>
          </ul>
        </div>
      </div>
      {rentalActive ? (
        <RentalWindow {...props.car} endRental={handleRentalActive} />
      ) : null}
    </>
  );
};

export default CarItem;

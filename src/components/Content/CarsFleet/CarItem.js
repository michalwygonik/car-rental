import "./CarsFleet.css";
import { useState } from "react";
import RentalWindow from "./RentalWindow";

const CarItem = (props) => {
  const { brand, model, year, image, gearbox, fuelType, priceCategory } = props;

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
              <strong>year:</strong> {year}
            </li>
            <li>
              <strong>gearbox:</strong> {gearbox}
            </li>
            <li>
              <strong>fuel type:</strong> {fuelType}
            </li>
            <li>
              <strong>price category:</strong> {priceCategory}
            </li>
          </ul>
        </div>
      </div>
      {rentalActive ? <RentalWindow endRental={handleRentalActive} /> : null}
    </>
  );
};

export default CarItem;

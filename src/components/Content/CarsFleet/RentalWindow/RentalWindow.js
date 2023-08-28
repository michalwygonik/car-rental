import Form from "./Form";
import "./RentalWindow.css";
import { useState } from "react";
import { Steps } from "primereact/steps";

const RentalWindow = (props) => {
  const {
    endRental,
    brand,
    model,
    year,
    fuelType,
    horsePower,
    gearbox,
    combustion,
    priceCategory,
    price,
    image,
  } = props;

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepsItems = [
    {
      label: "Provide data",
    },
    {
      label: "Calculate the price",
    },
    {
      label: "Payment and confirmation",
    },
  ];

  return (
    <>
      <div className="rental__window__container">
        <div className="rental__window">
          <div className="chosen__car__container">
            <h3 className="chosen__car__header">Your chosen car ⬇</h3>
            <img className="chosen__car__img" src={image} alt={model} />
            <h4 className="chosen__car__model">
              {brand} {model}
            </h4>
            <ul className="chosen__car__info">
              <li>
                <i className="fa-solid fa-calendar-days"></i>
                <strong> Year:</strong> {year}
              </li>
              <li>
                <i className="fa-solid fa-gas-pump"></i>
                <strong> Fuel type:</strong> {fuelType}
              </li>
              <li>
                <i className="fa-solid fa-car"></i>
                <strong> Horse power:</strong> {horsePower}
              </li>
              <li>
                <i className="fa-solid fa-gear"></i>
                <strong> Gearbox:</strong> {gearbox}
              </li>
              <li>
                <i className="fa-solid fa-battery-half"></i>
                <strong> Combustion:</strong> {combustion}l
              </li>
              <li>
                <i className="fa-solid fa-tags"></i>
                <strong> Price category:</strong> {priceCategory}
              </li>
              <li>
                <i className="fa-solid fa-money-check-dollar"></i>
                <strong> Price per day:</strong> {price}$
              </li>
            </ul>
          </div>
          <div className="rental__window__form__container">
            <Steps
              model={stepsItems}
              activeIndex={activeStepIndex}
              className="steps"
            />
            {activeStepIndex === 0 && <Form />}
            {activeStepIndex === 1 && <span>Calculations</span>}
            {activeStepIndex === 2 && <span>Payment</span>}
            {activeStepIndex === 3 && <span>Finish</span>}
          </div>

          <div className="rental__window__buttons">
            <div className="rental__cancel__button" onClick={endRental}>
              {activeStepIndex === 3 ? (
                <span>Finish ordering</span>
              ) : (
                <span>
                  Cancel <i className="fa-solid fa-xmark"></i>
                </span>
              )}
            </div>
            {activeStepIndex <= 2 ? (
              <div
                className="rental__next__button"
                onClick={(e) => setActiveStepIndex(activeStepIndex + 1)}
              >
                {activeStepIndex === 2 ? (
                  <span>
                    Confirm <i className="fa-solid fa-check"></i>
                  </span>
                ) : (
                  <span>
                    Next Step <i className="fa-solid fa-angles-right"></i>
                  </span>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalWindow;

import Form from "./Form";
import "./RentalWindow.css";
import { useState } from "react";
import { Steps } from "primereact/steps";
import { useFormik } from "formik";
import { basicSchema } from "./FormikSchema";
import RentalDetails from "./RentalDetails";

const RentalWindow = (props) => {
  const {
    endRental,
    brand,
    model,
    year,
    fuel_type,
    horse_power,
    gearbox,
    combustion,
    price_category,
    price,
    image,
  } = props;
  const onSubmit = () => {};

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      birth: "",
      driver_licence: "",
      kilometres: 10,
      date: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

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
                <strong> Fuel type:</strong> {fuel_type}
              </li>
              <li>
                <i className="fa-solid fa-car"></i>
                <strong> Horse power:</strong> {horse_power}
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
                <strong> Price category:</strong> {price_category}
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
            {activeStepIndex === 0 && (
              <Form
                values={values}
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
            {activeStepIndex === 1 && (
              <RentalDetails
                values={values}
                price={price}
                priceCategory={price_category}
                combustion={combustion}
                fuelType={fuel_type}
              />
            )}
            {activeStepIndex === 2 && <span>Payment</span>}
            {activeStepIndex === 3 && <span>Finish</span>}
          </div>

          <div className="rental__window__buttons">
            <div className="rental__cancel__button" onClick={endRental}>
              {activeStepIndex === 3 ? (
                <button>Finish ordering</button>
              ) : (
                <button>
                  Cancel <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
            {activeStepIndex <= 2 && (
              <>
                <div
                  className="rental__return__button"
                  onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                >
                  <button disabled={activeStepIndex === 0}>
                    <i className="fa-solid fa-angles-left"></i> Return
                  </button>
                </div>
                <div
                  className="rental__next__button"
                  onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                >
                  {activeStepIndex === 2 ? (
                    <button>
                      Confirm <i className="fa-solid fa-check"></i>
                    </button>
                  ) : (
                    <button disabled={!isSubmitting}>
                      Next Step <i className="fa-solid fa-angles-right"></i>
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalWindow;

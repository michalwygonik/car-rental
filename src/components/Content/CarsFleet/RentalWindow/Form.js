import "./Form.css";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { useState } from "react";
const Form = (props) => {
  let maxDate = new Date();
  const { values, handleBlur, handleChange, handleSubmit } = props;

  const [slider, setSlider] = useState(1);

  console.log(values);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form__main">
          <div className="form__main__header">Basic information</div>

          <div className="form__main__block">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={values.name}
              onChange={handleChange}
              className="form__main__block__input"
              placeholder="Enter your name"
              onBlur={handleBlur}
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="email">E-Mail</label>
            <InputText
              id="email"
              value={values.email}
              onChange={handleChange}
              className="form__main__block__input"
              placeholder="Enter your e-mail"
              onBlur={handleBlur}
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="birth">Birth date</label>
            <Calendar
              id="birth"
              dateFormat="dd/mm/yy"
              value={values.birth}
              onChange={handleChange}
              className="form__main__block__input"
              placeholder="Enter your birth date"
              onBlur={handleBlur}
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="driver-licence">
              Date of obtaining the licence
            </label>
            <Calendar
              id="driver_licence"
              value={values.driver_licence}
              onChange={handleChange}
              view="year"
              dateFormat="dd/mm/yy"
              maxDate={maxDate}
              className="form__main__block__input"
              placeholder="Enter date of your driver licence"
              onBlur={handleBlur}
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="number-of-kilometres">
              Number of kilometres {values.kilometres}
            </label>
            <input
              type="range"
              min={0}
              max={400}
              step={10}
              value={values.kilometres}
              onChange={handleChange}
              className="kilometres"
              id="kilometres"
            />
            {/* <Slider
              value={slider}
              onChange={handleChange}
              className="kilometres"
              id="kilometres"
              step={10}
              max={400}
              onBlur={handleBlur}
            /> */}
          </div>
        </div>
        <div className="form__calendar">
          <div className="form__calendar__header">
            Date of car rental (from - to)
          </div>
          <Calendar
            value={values.date}
            onChange={handleChange}
            id="date"
            minDate={maxDate}
            selectionMode="range"
            dateFormat="dd/mm/yy"
            inline
            className="calendar"
            onBlur={handleBlur}
          />
        </div>
        <div className="submitButton">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default Form;

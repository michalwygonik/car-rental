import "./Form.css";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";

import { useState } from "react";

const Form = () => {
  const [birth, setBirth] = useState(null);
  const [driverLicence, setDriverLicence] = useState(null);
  const [dates, setDates] = useState(null);
  let maxDate = new Date();
  const [kilometres, setKilometres] = useState(10);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <form>
        <div className="form__main">
          <div className="form__main__header">Basic information</div>

          <div className="form__main__block">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form__main__block__input"
              placeholder="Enter your name"
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="email">E-Mail</label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form__main__block__input"
              placeholder="Enter your e-mail"
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="birth">Birth date</label>
            <Calendar
              id="birth"
              dateFormat="dd/mm/yy"
              value={birth}
              onChange={(e) => setBirth(e.value)}
              className="form__main__block__input"
              placeholder="Enter your birth date"
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="driver-licence">
              Date of obtaining the licence
            </label>
            <Calendar
              id="driver-licence"
              value={driverLicence}
              onChange={(e) => setDriverLicence(e.value)}
              view="year"
              dateFormat="yy"
              maxDate={maxDate}
              className="form__main__block__input"
              placeholder="Enter date of your driver licence"
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="number-of-kilometres">
              Number of kilometres {kilometres}
            </label>
            <Slider
              value={kilometres}
              onChange={(e) => setKilometres(e.value)}
              className="w-14rem"
              step={10}
              max={400}
            />
          </div>
        </div>
        <div className="form__calendar">
          <div className="form__calendar__header">
            Date of car rental (from - to)
          </div>
          <Calendar
            value={dates}
            onChange={(e) => setDates(e.value)}
            minDate={maxDate}
            selectionMode="range"
            readOnlyInput
            inline
            className="calendar"
          />
        </div>
      </form>
    </>
  );
};

export default Form;

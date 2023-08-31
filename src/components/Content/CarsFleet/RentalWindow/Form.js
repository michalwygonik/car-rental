import "./Form.css";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

const Form = (props) => {
  let maxDate = new Date();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form__main">
          <div className="form__main__header">Basic information</div>

          <div className="form__main__block">
            <label htmlFor="name">
              Name{" "}
              {errors.name && touched.name && (
                <span className="error">{errors.name}</span>
              )}
            </label>

            <InputText
              id="name"
              value={values.name}
              onChange={handleChange}
              className={
                errors.name && touched.name
                  ? "form__main__block__input__error"
                  : "form__main__block__input"
              }
              placeholder="Enter your name"
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="email">
              E-Mail{" "}
              {errors.email && touched.email && (
                <span className="error">{errors.email}</span>
              )}
            </label>
            <InputText
              id="email"
              value={values.email}
              onChange={handleChange}
              className={
                errors.email && touched.email
                  ? "form__main__block__input__error"
                  : "form__main__block__input"
              }
              placeholder="Enter your e-mail"
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="birth">
              Birth date{" "}
              {errors.birth && touched.birth && (
                <span className="error">{errors.birth}</span>
              )}
            </label>
            <Calendar
              id="birth"
              dateFormat="dd/mm/yy"
              value={values.birth}
              onChange={handleChange}
              maxDate={maxDate}
              className={
                errors.birth && touched.birth
                  ? "form__main__block__input__error"
                  : "form__main__block__input"
              }
              placeholder="Enter your birth date"
            />
          </div>

          <div className="form__main__block">
            <label htmlFor="driver-licence">
              Date of obtaining the licence{" "}
              {errors.driver_licence && touched.driver_licence && (
                <span className="error">{errors.driver_licence}</span>
              )}
            </label>
            <Calendar
              id="driver_licence"
              value={values.driver_licence}
              onChange={handleChange}
              view="year"
              dateFormat="yy"
              maxDate={maxDate}
              className={
                errors.driver_licence && touched.driver_licence
                  ? "form__main__block__input__error"
                  : "form__main__block__input"
              }
              placeholder="Enter date of your driver licence"
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
          </div>
        </div>
        <div className="form__calendar">
          <div className="form__calendar__header">
            Date of car rental (from - to){" "}
            {errors.date && touched.date && (
              <span className="error">{errors.date}</span>
            )}
          </div>
          <Calendar
            value={values.date}
            onChange={handleChange}
            id="date"
            minDate={maxDate}
            selectionMode="range"
            dateFormat="dd/mm/yy"
            inline
            className={
              errors.date && touched.date
                ? "form__main__block__input__error calendar"
                : "form__main__block__input calendar"
            }
            onBlur={handleBlur}
          />
          <div>
            <input
              type="submit"
              value="Confirm the form"
              className="submit__button"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;

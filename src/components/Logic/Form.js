import "./Form.css";
import { useState } from "react";

const Form = () => {
  const [kilometres, setKilometres] = useState(0);

  const handleKilometresChange = (e) => {
    setKilometres(e.target.value);
  };

  return (
    <>
      <div className="dateBox">
        <span>Rental start date</span>
        <input type="date" />
      </div>
      <div className="dateBox">
        <span>Rental end date</span>
        <input type="date" />
      </div>
      <div className="kilometresBox">
        <span>Number of kilometres to be travelled</span>
        <input
          type="range"
          onChange={handleKilometresChange}
          value={kilometres}
          min={0}
          max={600}
          step={10}
        />
        <span>{kilometres <= 599 ? kilometres : "600+"}</span>
      </div>
    </>
  );
};

export default Form;

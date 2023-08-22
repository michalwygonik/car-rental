import CarItem from "./CarItem";
import "./CarsFleet.css";

const CarsFleet = () => {
  return (
    <>
      <h3 id="availableCars" className="available__cars">
        Available cars in our rental fleet ⬇
      </h3>

      <div className="cars__fleet__container">
        <CarItem />
      </div>
    </>
  );
};

export default CarsFleet;

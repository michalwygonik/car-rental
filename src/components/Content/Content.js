import CarsFleet from "./CarsFleet/CarsFleet";
import "./Content.css";

const Content = () => {
  return (
    <>
      <main className="main__content">
        <video
          src="./videos/car_riding_in_the_forest.mp4"
          loop
          autoPlay
          muted
        />

        <a href="#availableCars">
          <div className="check__out__button">Check out our car fleet!</div>
        </a>

        <CarsFleet />
      </main>
    </>
  );
};

export default Content;

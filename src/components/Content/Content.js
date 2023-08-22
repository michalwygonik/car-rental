import CarsFleet from "./CarsFleet/CarsFleet";
import "./Content.css";

const Content = () => {
  return (
    <>
      <main className="mainContent">
        <video
          src="./videos/car_riding_in_the_forest.mp4"
          loop
          autoPlay
          muted
        />

        <a href="#availableCars">
          <div className="checkOutButton">Check out our car fleet!</div>
        </a>

        <h2 id="availableCars">Available cars in our rental fleet ⬇</h2>
        <CarsFleet />
      </main>
    </>
  );
};

export default Content;

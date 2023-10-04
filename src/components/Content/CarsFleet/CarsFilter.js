import { useState, useEffect } from "react";
import { Cars } from "./Cars";
import "./CarsFilter.css";

const CarsFilter = (props) => {
  const { setFiltered } = props;

  const [brand, setBrand] = useState("all");
  const [fuel, setFuel] = useState("all");
  const [gearbox, setGearbox] = useState("all");
  const [category, setCategory] = useState("all");
  useEffect(() => {
    if (
      brand !== "all" ||
      fuel !== "all" ||
      gearbox !== "all" ||
      category !== "all"
    ) {
      const filtered = Cars.filter(
        (car) =>
          (brand === "all" || car.brand.includes(brand)) &&
          (fuel === "all" || car.fuel_type.includes(fuel)) &&
          (gearbox === "all" || car.gearbox.includes(gearbox)) &&
          (category === "all" || car.price_category.includes(category))
      );
      setFiltered(filtered);
    } else {
      setFiltered(Cars);
    }
  }, [brand, fuel, gearbox, category, setFiltered]);

  return (
    <div className="cars__fleet__filter">
      <div className="filter__option filter__brand">
        <span>Car brand</span>
        <select onChange={(e) => setBrand(e.target.value)} defaultValue="">
          <option value="" disabled>
            Select a car brand
          </option>
          <option value="all" key="all">
            All
          </option>
          {[...new Set(Cars.map((car) => car.brand))].map((brand) => (
            <option value={brand} key={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className=" filter__option filter__gearbox">
        <span>Category</span>
        <select onChange={(e) => setCategory(e.target.value)} defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          <option value="all" key="all">
            All
          </option>
          {[...new Set(Cars.map((car) => car.price_category))].map(
            (category) => (
              <option value={category} key={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      <div className="filter__option filter__fuel">
        <span>Fuel type</span>
        <select onChange={(e) => setFuel(e.target.value)} defaultValue="">
          <option value="" disabled>
            Select a fuel type
          </option>
          <option value="all" key="all">
            All
          </option>
          {[...new Set(Cars.map((car) => car.fuel_type))].map((fuel) => (
            <option value={fuel} key={fuel}>
              {fuel}
            </option>
          ))}
        </select>
      </div>

      <div className=" filter__option filter__gearbox">
        <span>Gearbox</span>
        <select onChange={(e) => setGearbox(e.target.value)} defaultValue="">
          <option value="" disabled>
            Select a gearbox
          </option>
          <option value="all" key="all">
            All
          </option>
          {[...new Set(Cars.map((car) => car.gearbox))].map((gearbox) => (
            <option value={gearbox} key={gearbox}>
              {gearbox}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarsFilter;

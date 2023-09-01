import "./Calculations.css";
import { differenceInDays, differenceInYears } from "date-fns";
import { useState, useEffect } from "react";

const Calculations = (props) => {
  const URL =
    "https://creativecommons.tankerkoenig.de/api/v4/stations/search?apikey=cffa4fb8-7a16-cd85-7946-263722530f15&lat=48.8&lng=9.24&rad=10";

  const { values, price, priceCategory, combustion, fuelType } = props;
  const { driver_licence, kilometres, date } = values;

  const rentalDays = differenceInDays(date[1], date[0]);
  const driver_licence__date = differenceInYears(Date(), driver_licence);

  const [gasolincePrice, setGasolinePrice] = useState(0);
  const [petrolPrice, setPetrolPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setGasolinePrice(json.stations[1].fuels[0].price);
        setPetrolPrice(json.stations[1].fuels[1].price);
      });
    };
    fetchData();
  }, []);

  let priceCategoryMultiplier = 0;
  switch (priceCategory) {
    case "Basic":
      priceCategoryMultiplier = 1;
      break;
    case "Standard":
      priceCategoryMultiplier = 1.2;
      break;
    case "Medium":
      priceCategoryMultiplier = 1.5;
      break;
    case "Premium":
      priceCategoryMultiplier = 2;
      break;
    default:
      break;
  }
  const carPrice = price * priceCategoryMultiplier;
  const rentalDaysPrice = carPrice * rentalDays;
  let fuelPrice = 0;
  if (fuelType === "Gasoline")
    fuelPrice = kilometres * ((combustion / 100) * gasolincePrice);
  else if (fuelType === "Diesel")
    fuelPrice = kilometres * ((combustion / 100) * petrolPrice);

  let totalRentalPrice = 0;

  if (driver_licence__date <= 5) {
    totalRentalPrice = (carPrice + rentalDaysPrice + fuelPrice) * 1.2;
  } else {
    totalRentalPrice = carPrice + rentalDaysPrice + fuelPrice;
  }
  const driverAgeLess = totalRentalPrice * 1.2 - totalRentalPrice;

  return (
    <>
      <div className="calc__container">
        <h3 className="calc__container__header">Rental payment details </h3>
        <table>
          <thead>
            <tr>
              <th>Rental detail</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Car rental cost including price category</td>
              <td>{carPrice} $</td>
            </tr>
            <tr>
              <td>Rental days ({rentalDays})</td>
              <td>{rentalDaysPrice} $</td>
            </tr>
            <tr>
              <td>Driver has held the licence for less than 5 years</td>
              <td>
                {driver_licence__date <= 5
                  ? Math.round(driverAgeLess * 100) / 100
                  : "0"}{" "}
                $
              </td>
            </tr>
            <tr>
              <td>Fuel price</td>
              <td>{Math.round(fuelPrice * 100) / 100} $</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total rental price</td>
              <td>{Math.round(totalRentalPrice * 100) / 100} $</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Calculations;

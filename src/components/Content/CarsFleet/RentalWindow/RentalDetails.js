import "./RentalDetails.css";
import { differenceInDays, differenceInYears } from "date-fns";
import { useState, useEffect } from "react";
import { Calculations } from "./Calculations";

const RentalDetails = (props) => {
  const URL =
    "https://creativecommons.tankerkoenig.de/api/v4/stations/search?apikey=cffa4fb8-7a16-cd85-7946-263722530f15&lat=48.8&lng=9.24&rad=10";

  const { values } = props;
  const { driver_licence, kilometres, date } = values;

  const rentalDays = differenceInDays(date[1], date[0]);
  const driver_licence__date = differenceInYears(new Date(), driver_licence);

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

  const {
    carPrice,
    rentalDaysPrice,
    driverAgeLess,
    fuelPrice,
    totalRentalPrice,
  } = Calculations(
    props,
    kilometres,
    gasolincePrice,
    petrolPrice,
    driver_licence__date,
    rentalDays
  );

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
                  : "0"}
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

export default RentalDetails;

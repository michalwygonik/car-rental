export function Calculations(
  props,
  kilometres,
  gasolincePrice,
  petrolPrice,
  driver_licence__date,
  rentalDays
) {
  const { price, priceCategory, combustion, fuelType } = props;
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
    totalRentalPrice = (rentalDaysPrice + fuelPrice) * 1.2;
  } else {
    totalRentalPrice = rentalDaysPrice + fuelPrice;
  }

  const driverAgeLess = totalRentalPrice * 1.2 - totalRentalPrice;
  return {
    carPrice,
    rentalDaysPrice,
    driverAgeLess,
    fuelPrice,
    totalRentalPrice,
  };
}

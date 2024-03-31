// bus.js
import places from "./places";

const bus = [
  {
    number: 1,
    price: 10,
    start: "Place du Grand Socco",
    end: places[0].name, // Assuming "Place du Grand Socco" is the first place in the array
  },
  {
    number: 2,
    price: 15,
    start: "Riad el Ouarzazi",
    end: places[1].name, // Assuming "Riad el Ouarzazi" is the second place in the array
  },
  {
    number: 3,
    price: 12,
    start: "Plage Martil",
    end: places[2].name,
  },
  {
    number: 4,
    price: 18,
    start: "Parc Mohammed V",
    end: places[3].name,
  },
  {
    number: 5,
    price: 10,
    start: "Bab El Okla",
    end: places[4].name,
  },
  {
    number: 6,
    price: 15,
    start: "Souk Dakhel",
    end: places[5].name,
  },
  {
    number: 7,
    price: 20,
    start: "Avenue Mohammed V",
    end: places[6].name,
  },
  {
    number: 8,
    price: 25,
    start: "Place El Feddan",
    end: places[7].name,
  },
  {
    number: 9,
    price: 12,
    start: "Kasbah de Chefchaouen",
    end: places[8].name,
  },
  {
    number: 10,
    price: 18,
    start: "Centre commercial Ibn Batouta",
    end: places[9].name,
  },
  // Add more bus routes as needed
];

export default bus;

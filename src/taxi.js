// taxi.js
import places from "./places";

const taxi = [
  {
    price: 20,
    start: "Place du Grand Socco",
    end: places[0].name, // Assuming "Place du Grand Socco" is the first place in the array
  },
  {
    price: 25,
    start: "Riad el Ouarzazi",
    end: places[1].name, // Assuming "Riad el Ouarzazi" is the second place in the array
  },
  {
    price: 22,
    start: "Plage Martil",
    end: places[2].name,
  },
  {
    price: 28,
    start: "Parc Mohammed V",
    end: places[3].name,
  },
  {
    price: 20,
    start: "Bab El Okla",
    end: places[4].name,
  },
  {
    price: 25,
    start: "Souk Dakhel",
    end: places[5].name,
  },
  {
    price: 30,
    start: "Avenue Mohammed V",
    end: places[6].name,
  },
  {
    price: 35,
    start: "Place El Feddan",
    end: places[7].name,
  },
  {
    price: 22,
    start: "Kasbah de Chefchaouen",
    end: places[8].name,
  },
  {
    price: 28,
    start: "Centre commercial Ibn Batouta",
    end: places[9].name,
  },
  // Add more taxi routes as needed
];

export default taxi;

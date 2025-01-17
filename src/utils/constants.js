export const weatherOptions = [
  {
    condition: 800, // clear
    dayUrl: new URL("../assets/conditions/clear-day.svg", import.meta.url).href,
    nightUrl: new URL("../assets/conditions/clear-night.svg", import.meta.url)
      .href,
  },
  {
    condition: 700, // fog
    dayUrl: new URL("../assets/conditions/fog-day.svg", import.meta.url).href,
    nightUrl: new URL("../assets/conditions/fog-night.svg", import.meta.url)
      .href,
  },
  {
    condition: 600, // snow
    dayUrl: new URL("../assets/conditions/snow-day.svg", import.meta.url).href,
    nightUrl: new URL("../assets/conditions/snow-night.svg", import.meta.url)
      .href,
  },
  {
    condition: 500, // rainy
    dayUrl: new URL("../assets/conditions/rain-day.svg", import.meta.url).href,
    nightUrl: new URL("../assets/conditions/rain-night.svg", import.meta.url)
      .href,
  },
  {
    condition: 300, // cloudy
    dayUrl: new URL("../assets/conditions/cloudy-day.svg", import.meta.url)
      .href,
    nightUrl: new URL("../assets/conditions/cloudy-night.svg", import.meta.url)
      .href,
  },
  {
    condition: 200, // storm
    dayUrl: new URL("../assets/conditions/storm-day.svg", import.meta.url).href,
    nightUrl: new URL("../assets/conditions/storm-night.svg", import.meta.url)
      .href,
  },
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const APIkey = "ff9986c49a72eb05b086803193d8a4cf";
export const location = { latitude: 29.749907, longitude: -95.358421 };

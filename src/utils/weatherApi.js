export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) return res.json();
    else return Promise.reject("Error: " + res.status);
  });
};

export const processWeatherData = (weatherData) => {
  const result = {};
  result.city = weatherData.name;
  result.temp = { F: weatherData.main.temp };
  result.type = getWeatherType(result.temp.F);
  result.conditionName = weatherData.weather[0].main;
  result.conditionId = weatherData.weather[0].id;
  result.isDay = getIsDay(weatherData.sys, Date.now() / 1000);
  return result;
};

const getWeatherType = (temperature) => {
  if (temperature >= 86) {
    return "hot";
  } else if (temperature >= 66) {
    return "warm";
  } else {
    return "cold";
  }
};

const getIsDay = ({ sunrise, sunset }, time) => {
  return time > sunrise && time < sunset;
};

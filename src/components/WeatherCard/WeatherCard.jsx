import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const url = getWeatherCondition(weatherOptions, weatherData);
  return (
    <section className="weather-card">
      <p className="weather-card__temperature">{weatherData.temp.F}&deg;F</p>
      <img
        src={url}
        alt={`${weatherData.conditionName} ${
          weatherData.isDay ? "Day" : "Night"
        }`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;

function getWeatherCondition(options, data) {
  const filter = options.filter(
    (element) => data.conditionId >= element.condition
  );
  let selectedCondition = options[0];
  if (filter.length > 0) selectedCondition = filter[0];

  return data.isDay ? selectedCondition.dayUrl : selectedCondition.nightUrl;
}

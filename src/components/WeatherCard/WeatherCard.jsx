import cloudyDay from "../../assets/cloudy-day.svg";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temperature">75&deg;F</p>
      <img src={cloudyDay} alt="" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;

import style from "./SliderCard.module.css";
import rain from "../../assets/img/rainWeather.png";
import windy from "../../assets/img/windyWeather.png";
import storm from "../../assets/img/stormWeather.png";

function SliderCard(props) {
  function getNightTemp() {
    if (!props.night && props.night !== 0) return;

    return <span className={style.night}>{props.night} °C</span>;
  }

  return (
    <div className={style.card}>
      <h3 className={style.title}>{props.date}</h3>
      <div className={style.img}>
        {props.type === "rain" && <img src={rain} alt="rain" />}
        {props.type === "windy" && <img src={windy} alt="windy" />}
        {props.type === "storm" && <img src={storm} alt="rain" />}
      </div>
      <div className={style.temperature}>
        <span className={style.day}>{props.day} °C </span>
        {getNightTemp()}
      </div>
    </div>
  );
}

export default SliderCard;

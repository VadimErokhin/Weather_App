import { useState } from "react";
import Slider from "../Slider/Slider";
import SliderCard from "../SliderCard/SliderCard";
import Tabs from "../Tabs/Tabs";
import Today from "../Today/Today";
import style from "./Forecast.module.css";
import { weeklySlider, hourlySlider } from "./data.js";

function Forecast() {
  const [currentTab, setCurrentTab] = useState("weekly");
  function renderSlider() {
    if (currentTab === "weekly") {
      return (
        <Slider>
          {weeklySlider.map((card, i) => (
            <SliderCard
              key={`weeekly-${i}`}
              date={card.date}
              type={card.type}
              day={card.day}
              night={card.night}
            />
          ))}
        </Slider>
      );
    }
    return (
      <Slider>
        {hourlySlider.map((card, i) => (
          <SliderCard
            key={`daily-${i}`}
            date={card.date}
            type={card.type}
            day={card.day}
          />
        ))}
      </Slider>
    );
  }

  return (
    <div className={style.forecast}>
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {renderSlider()}
      <Today />
    </div>
  );
}

export default Forecast;

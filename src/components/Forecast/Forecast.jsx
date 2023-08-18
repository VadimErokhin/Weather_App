import { useState } from "react";
import Slider from "../Slider/Slider";
import SliderCard from "../SliderCard/SliderCard";
import Tabs from "../Tabs/Tabs";
import Today from "../Today/Today";
import style from "./Forecast.module.css";
import { weeklySlider, hourlySlider } from "./data.js";
import { SwiperSlide } from "swiper/react";

function Forecast() {
  const [currentTab, setCurrentTab] = useState("weekly");
  function renderSlider() {
    if (currentTab === "weekly") {
      return (
        <Slider>
          {weeklySlider.map((card, i) => (
            <SwiperSlide key={`weeekly-${i}`}>
              <SliderCard
                date={card.date}
                type={card.type}
                day={card.day}
                night={card.night}
              />
            </SwiperSlide>
          ))}
        </Slider>
      );
    }
    return (
      <Slider>
        {hourlySlider.map((card, i) => (
          <SwiperSlide key={`daily-${i}`}>
            <SliderCard date={card.date} type={card.type} day={card.day} />
          </SwiperSlide>
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

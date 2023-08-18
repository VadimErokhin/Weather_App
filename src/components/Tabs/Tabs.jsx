import { useMemo } from "react";
import style from "./Tabs.module.css";

function Tabs(props) {
  function tabHandlerWeekly() {
    props.setCurrentTab("weekly");
  }

  function tabHandlerHourly() {
    props.setCurrentTab("hourly");
  }

  const weeklyBtnActive = useMemo(() => {
    if (props.currentTab === "weekly") {
      return style.btnActive;
    }

    return "";
  }, [props.currentTab]);

  const hourlyBtnActive = useMemo(() => {
    if (props.currentTab === "hourly") {
      return style.btnActive;
    }

    return "";
  }, [props.currentTab]);

  return (
    <div className={style.header}>
      <h2 className={style.title}>Прогноз</h2>
      <div className={style.tubs}>
        <button
          onClick={tabHandlerWeekly}
          id="weeklyBtn"
          className={`${style.weekly} ${style.btn} ${weeklyBtnActive}`}
        >
          на неделю
        </button>
        <button
          onClick={tabHandlerHourly}
          id="hourlyBtn"
          className={`${style.hourly}  ${style.btn} ${hourlyBtnActive}`}
        >
          почасовой
        </button>
      </div>
    </div>
  );
}

export default Tabs;

import Button from "../Button/Button";
import { ReactComponent as SnowFlake } from "../../assets/img/snow_flake.svg";
import { ReactComponent as Location } from "../../assets/img/location_point.svg";

import style from "./Sidebar.module.css";
import Switcher from "../Switcher/Switcher";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import { useState } from "react";

function Sidebar(props) {
  const [isActive, setIsActive] = useState(false);

  function btnHandler() {
    console.log("btn handler", isActive);
    setIsActive(true);
    console.log("btn handler 2", isActive);
  }

  function closeModal() {
    setIsActive(false);
  }

  return (
    <div className={style.sidebar}>
      <div className={`${style.container} container`}>
        <div className={style.header}>
          <Button clickHandler={btnHandler}>Поиск города</Button>
          <Switcher
            currentTheme={props.currentTheme}
            clickHandler={props.setTheme}
          />
        </div>
        <div className={style.imgWrapper}>
          <SnowFlake />
        </div>

        <div>
          <div className={style.description}>
            <div className={style.temperature}>
              <span className={style.tempNumber}>1</span>
              <span className={style.tempDegree}>°C</span>
            </div>
            <h2 className={style.title}>Снег</h2>
            <span className={style.text}>Ощущается как -3 °C</span>
          </div>

          <div className={style.date}>
            <span>Сегодня</span>
            <span>Вс, 13 мар</span>
          </div>

          <div className={style.location}>
            <div className={style.locationImg}>
              <Location />
            </div>

            <span className={style.locationName}> Москва </span>
          </div>
        </div>
      </div>

      <Modal closeModal={closeModal} isActive={isActive}>
        <ModalContent />
      </Modal>
    </div>
  );
}

export default Sidebar;

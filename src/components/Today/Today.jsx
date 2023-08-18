import style from "./Today.module.css";
import { ReactComponent as Indicator } from "../../assets/img/indicator.svg";

function Today() {
  return (
    <section className={style.today}>
      <h2 className={style.sectionTitle}>Подробно на сегодня</h2>

      <div className={style.info}>
        <div className={style.infoCard}>
          <h3 className={style.title}>Скорость ветра</h3>
          <div className={style.cardValue}>
            7<span className={style.cardDefinition}>м/с</span>
          </div>
          <div className={style.imgWrapper}>
            <Indicator />
            <span className={style.cardSpeed}>CЗ</span>
          </div>
        </div>

        <div className={style.infoCard}>
          <h3 className={style.title}>Влажность</h3>
          <div className={style.cardValue}>
            84
            <span className={style.cardDefinition}> %</span>
          </div>
        </div>

        <div className={style.infoCard}>
          <h3 className={style.title}>Видимость</h3>
          <div className={style.cardValue}>
            6.2
            <span className={style.cardDefinition}> км</span>
          </div>
        </div>

        <div className={style.infoCard}>
          <h3 className={style.title}>Давление</h3>
          <div className={style.cardValue}>
            742
            <span className={style.cardPressure}>мм рт. ст.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Today;

import { useMemo } from "react";
import { ReactComponent as SwitcherImg } from "../../assets/img/switcher.svg";
import style from "./Switcher.module.css";

function Switcher(props) {
  function changerTheme() {
    props.clickHandler((prev) => {
      if (prev === "light") {
        return "dark";
      }
      return "light";
    });
  }

  const activeClass = useMemo(() => {
    if (props.currentTheme === "dark") {
      return style.active;
    }
    return "";
  }, [props.currentTheme]);

  return (
    <button
      onClick={changerTheme}
      className={`${style.switcher} ${activeClass}`}
    >
      <div className={style.background}>
        <SwitcherImg className={style.img} />
      </div>
    </button>
  );
}

export default Switcher;

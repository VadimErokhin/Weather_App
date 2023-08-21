import style from "./Slider.module.css";



function Slider(props) {

  return <div className={style.content}>{props.children}</div>;
}

export default Slider;

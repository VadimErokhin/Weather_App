import style from './Button.module.css';

function Button(props) {

  return (
    <button className={style.button} onClick={props.clickHandler}>{props.children}</button>
  )
}

export default Button;
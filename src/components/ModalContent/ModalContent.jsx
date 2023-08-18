import style from "./ModalContent.module.css"

function ModalContent(props) {
  return (
    <div className={style.wrapper}>
      <input className={style.input} type="text" placeholder="Москва" />
      <button className={style.button}>Найти</button>
    </div>
  );
}

export default ModalContent

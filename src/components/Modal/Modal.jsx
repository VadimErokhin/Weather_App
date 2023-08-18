import { useMemo } from "react";
import { ReactComponent as Cross } from "../../assets/img/cross.svg";
import style from "./Modal.module.css"
function Modal(props) {
  const activeModalClass = useMemo(() => props.isActive ? style.modalActive : '', [props.isActive])


  return (
    <div className={`${style.modal} ${activeModalClass}`}>
      <div className={style.modalContainer}>
        <div onClick={props.closeModal} className={style.cross}>
          <Cross />
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;

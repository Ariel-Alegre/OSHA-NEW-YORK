import Modal from "react-bootstrap/Modal";
import React from "react";
import { useSelector } from "react-redux";
import style from "./ModalTest4.module.css";
import Share from "../Share/Share3";
import { FaArrowDown } from "react-icons/fa";

function MyVerticallyCenteredModal(props) {
  const employeTestModal4 = useSelector((state) => state.DetailsEmployee);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <img
        src={employeTestModal4.test4}
        className={style.testModal4}
        alt="Not found"
      />
      <div className={style.optionContainer4}>
        <div>
          <Share />
        </div>
        <div className={style.download4}>
          <a href={employeTestModal4.test4} target="__blank" download>
            <FaArrowDown />
          </a>
        </div>

        <div className={style.closeContainer4}>
          <button className={style.btnClosed4} onClick={props.onHide}>
            x
          </button>
        </div>
      </div>
    </Modal>
  );
}

function ModalTest4() {
  const [modalShow, setModalShow] = React.useState(false);
  const employeTest4 = useSelector((state) => state.DetailsEmployee);

  return (
    <>
      <div className={style.testContainer4}>
        <img
          src={employeTest4.test4}
          className={style.test4}
          onClick={() => setModalShow(true)}
          alt="Not found"
        />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalTest4;

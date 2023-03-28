import Modal from "react-bootstrap/Modal";
import React from "react";
import { useSelector } from "react-redux";
import style from "./ModalTest3.module.css";
import Share from "../Share/Share3";
import { FaArrowDown } from "react-icons/fa";

function MyVerticallyCenteredModal(props) {
  const employeTestModal3 = useSelector((state) => state.DetailsEmployee);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <img
        src={employeTestModal3.test3}
        className={style.testModal3}
        alt="Not found"
      />
      <div className={style.optionContainer3}>
        <div>
          <Share />
        </div>
        <div className={style.download3}>
          <a href={employeTestModal3.test3} target="__blank" download>
            <FaArrowDown />
          </a>
        </div>

        <div className={style.closeContainer3}>
          <button className={style.btnClosed3} onClick={props.onHide}>
            x
          </button>
        </div>
      </div>
    </Modal>
  );
}

function ModalTest3() {
  const [modalShow, setModalShow] = React.useState(false);
  const employeTest3 = useSelector((state) => state.DetailsEmployee);

  return (
    <>
      <div className={style.testContainer3}>
        <img
          src={employeTest3.test3}
          className={style.test3}
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

export default ModalTest3;

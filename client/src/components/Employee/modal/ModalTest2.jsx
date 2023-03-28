import Modal from "react-bootstrap/Modal";
import React from "react";
import { useSelector } from "react-redux";
import style from "./ModalTest2.module.css";
import Share from "../Share/Share2";
import { FaArrowDown } from "react-icons/fa";

function MyVerticallyCenteredModal(props) {
  const employeTestModal2 = useSelector((state) => state.DetailsEmployee);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <img
        src={employeTestModal2.test2}
        className={style.testModal2}
        alt="Not found"
      />
      <div className={style.optionContainer2}>
        <div>
          <Share />
        </div>
        <div className={style.download2}>
          <a href={employeTestModal2.test2} target="__blank" download>
            <FaArrowDown />
          </a>
        </div>

        <div className={style.closeContainer2}>
          <button className={style.btnClosed2} onClick={props.onHide}>
            x
          </button>
        </div>
      </div>
    </Modal>
  );
}

function ModalTest2() {
  const [modalShow, setModalShow] = React.useState(false);
  const employeTest2 = useSelector((state) => state.DetailsEmployee);

  return (
    <>
      <div className={style.testContainer2}>
        <img
          src={employeTest2.test2}
          className={style.test2}
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

export default ModalTest2;

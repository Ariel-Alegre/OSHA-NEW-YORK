import Modal from "react-bootstrap/Modal";
import React from "react";
import { useSelector } from "react-redux";
import style from "./ModalTest.module.css";
import Share from "../Share/Share";
import { FaArrowDown } from "react-icons/fa";

function MyVerticallyCenteredModal(props) {
  const employeTestModal = useSelector((state) => state.DetailsEmployee);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={style.imgContainerModal}>

      <img
        src={employeTestModal.test}
        className={style.testModal}
        alt="Not found"
        />
        </div>
      <div className={style.optionContainer}>
        <div>
          <Share />
        </div>
        <div className={style.download}>
          <a href={employeTestModal.test} target="__blank" download>
            <FaArrowDown />
          </a>
        </div>

        <div className={style.closeContainer}>
          <button className={style.btnClosed} onClick={props.onHide}>
            x
          </button>
        </div>
      </div>
    </Modal>
  );
}

function ModalTest() {
  const [modalShow, setModalShow] = React.useState(false);
  const employeTest = useSelector((state) => state.DetailsEmployee);

  return (
    <>
      <div className={style.testContainer}>
        <img
          src={employeTest.test}
          className={style.test}
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

export default ModalTest;

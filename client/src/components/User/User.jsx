import style from "./User.module.css";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allEmployee } from "../../redux/action/index";
import { useTranslation } from 'react-i18next'


function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
  const employees = useSelector((state) => state.AllEmployees);

  const [input, setInput] = useState({
    name: "",
    idSST: "",
  });



  useEffect(() => {
    dispatch(allEmployee());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //let error = Object.keys(validate(input));

    if (!input.name.length || !input.idSST.length) {
      alert("incomplete data error");
      return;
    }
    const checkEmployeeCard = employees.find(
      (data) => data.idSST === input.idSST
    );
    const checkEmployeeName = employees.find(
      (data) => data.name === input.name
    );

    if (!checkEmployeeCard && !checkEmployeeName) {
      navigate(`/error`);
    } else {
      navigate(`/employee/${input.idSST}`);
      return;
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  const handleOnCard = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      idSST: e.target.value,
    });
  };

  return (
    <div className={style.formContainer} name = "viewport" >
      <form action="" onSubmit={handleSubmit}>
        <p className={style.title}>{t("card.title")}</p>
        <p className={style.decription}>
        {t("card.subTitle")}
        </p>
        <div className={style.inputContainer}>
          <input
            onChange={handleOnChange}
            value={input.name}
            type="text"
            placeholder={t("card.input.name")}
            name="name"
            autoComplete="off"
          />
          <input
            className={style.inputCard}
            type="text"
            placeholder={t("card.input.number")}
            name="idSST"
            onChange={handleOnCard}
            value={input.idSST}
            autoComplete="off"

          />
        </div>
        <button type="submit" className={style.btn_employee}>
          <GrSearch />
        </button>
      </form>
    </div>
  );
}

export default User;

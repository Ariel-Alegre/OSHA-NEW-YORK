import style from "./UserCardOrange.module.css";
import { GrSearch } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allCardOrangeDetail } from "../../redux/action/index";
import { useTranslation } from 'react-i18next';

function UserCardOrange() {
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.AllTargetOrange);

  const [target, setTarget] = useState({
    name: "",
    card: "",
  });

  useEffect(() => {
    dispatch(allCardOrangeDetail());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!target.name.length || !target.card.length) {
      alert("incomplete data error");
      return;
    }
    const checkEmployeeName = employees.find(
      (data) => data.name === target.name
    );
    const checkEmployeeCard = employees.find(
      (data) => data.card === target.card
    );
    if (checkEmployeeCard && checkEmployeeName) {
      navigate(`/target/${target.card}`);
      return;
    } else {
      navigate(`/error`);
    }
  };

  const handleName = (e) => {
    e.preventDefault();
    setTarget({
      ...target,
      name: e.target.value,
    })
  };

  const handleCard = (e) => {
    e.preventDefault();
    setTarget({
      ...target,
      card: e.target.value
    })
  };

  return (
    <div className={style.formContainer30}>
      <form onSubmit={handleSubmit}>
        <p className={style.title}>{t("target.title")}</p>
        <div className={style.inputContainer30}>
          <input
            onChange={handleName}
            type="text"
            placeholder={t("target.input.name")}
            value={target.name}
            name= "name"
            autoComplete="off"

          />
          <input
            className={style.inputCard}
            type="text"
            placeholder={t("target.input.number")}
            onChange={handleCard}
            value={target.card}
            name="card"
            autoComplete="off"

          />
        </div>
        <button type="submit" className={style.btnCard30}>
          <GrSearch />
        </button>
      </form>
    </div>
  );
}

export default UserCardOrange;

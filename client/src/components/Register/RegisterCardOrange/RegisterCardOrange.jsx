import { useState } from "react";
import { useDispatch } from "react-redux";
import { cardEmployee } from "../../../redux/action/index";
import Button from "react-bootstrap/Button";
import style from "./RegisterCardOrange.module.css";

export default function RegisterCardOrange() {
  const dispatch = useDispatch();
  const [target, setTarget] = useState({
    name: "",
    card: "",
    hours: "",
    date: "",
    amORpm: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(cardEmployee(target));
    alert("Saved to database successfully");
    setTarget({
      name: "",
      card: "",
      hours: "",
      date: "",
      amORpm: ""

    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTarget((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={style.Register_Container}>
      <form onSubmit={handleSubmit}>
        <div className={style.Input_Container}>
          <div>
            <p>Name:</p>
            <input
              onChange={handleChange}
              value={target.name}
              type="text"
              placeholder="name..."
              name="name"
              autoComplete="off"

            />
          </div>
          <div>
            <p>Card Number:</p>
            <input
              onChange={handleChange}
              type="text"
              placeholder="card number..."
              name="card"
              value={target.card}
              autoComplete="off"


            />
          </div>
          <div>
            <p>hours:</p>
            <input
              onChange={handleChange}
              value={target.hours}
              type="time"
              name="hours"
              autoComplete="off"

            />
          </div>
          <div>
            <p>am or pm:</p>
            <input
              onChange={handleChange}
              value={target.amORpm}
              type="text"
              name="amORpm"
              placeholder="am or pm"
              autoComplete="off"

            />
          </div>
          <div>
            <p>Date:</p>
            <input
              onChange={handleChange}
              value={target.date}
              type="date"
              name="date"
              placeholder="am or pm"
              autoComplete="off"
            />
          </div>

          <Button type="submit" className={style.bg_button}>
            Register
          </Button>
        </div>
      </form>{" "}
    </div>
  );
}

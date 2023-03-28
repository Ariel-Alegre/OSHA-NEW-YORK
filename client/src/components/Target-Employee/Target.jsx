import Card from "react-bootstrap/Card";
import "./Target.css";
import Table from "react-bootstrap/Table";
import { cardOrangeDetail } from "../../redux/action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Target() {
  const [t, i18n] = useTranslation("global");

  const { cardTarget } = useParams();
  const dispatch = useDispatch();
  const cardOrange = useSelector((state) => state.DetailCardOrange);

  useEffect(() => {
    dispatch(cardOrangeDetail(cardTarget));
  }, [dispatch, cardTarget]);

  return (
    <div className="target">
      <Card className="card">
        <Card.Body>
          <Card.Title>{t("target-detail.title")}</Card.Title>
          <h4>{cardOrange.name}</h4>
          <Table striped bordered hover className="table_target">
            <thead className="thead">
              <tr>
                <th>{t("target-detail.status")}</th>
                <th>{t("target-detail.number")}</th>
                <th>{t("target-detail.date")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>activo</td>
                <td>{cardOrange.card}</td>
                <td>
                   {cardOrange.date} {cardOrange.hours} {cardOrange.amORpm}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <div className="home">
          <strong>
            <a href="/">{t("target-detail.home")}</a>
          </strong>
        </div>
      </Card>
    </div>
  );
}

export default Target;

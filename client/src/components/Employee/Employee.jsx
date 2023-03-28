/* eslint-disable jsx-a11y/anchor-is-valid */
import Table from "react-bootstrap/Table";
import "./Employee.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { employeeDetail } from "../../redux/action/index";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import ModalTest from './modal/ModalTest';
import ModalTest2 from './modal/ModalTest2'
import ModalTest3 from './modal/ModalTest3'


export default function Employee() {
  const [t, i18n] = useTranslation("global");

  const { employeCard } = useParams();
  const dispatch = useDispatch();
 
  const employee = useSelector((state) => state.DetailsEmployee);

  useEffect(() => {
    dispatch(employeeDetail(employeCard));
  }, [dispatch, employeCard]);


  return (
    <div className="employeeContainer">
      <div>
        <div className="image_name">
          <img src={employee.urlFile} alt="" />
          <h3 className="name">{employee.name}</h3>
        </div>
      </div>

     <div>
      <div className="specifications">
        <h5>
          {t("employee.IDSST")}: {employee.idSST}
        </h5>
        <h5>
          {t("employee.eye")}: {employee.eyeColor}
        </h5>
      </div>
        <h5 className="height">
          {t("employee.height")}: {employee.height}
        </h5>
  </div>
      <div className="Issued_Expires">
        <h5 className="security">
          <strong>{t("employee.security")}</strong>
        </h5>
        <p>{t("employee.Approved")}</p>
        <p>
          {t("employee.issued")}: {employee.issued}
        </p>
        <p>
          {" "}
          {t("employee.Expires")}: {employee.expires}
        </p>
      </div>
      <strong className="training">{t("employee.HISTORY")}</strong>

      <Table responsive bordered className="table">
        <thead>
          <tr>
            <th>
              <MdOutlineFileDownload />

              {t("employee.Test")}
            </th>
            <th> {t("employee.certification")}</th>
            <th>{t("employee.Issued by")}</th>
            <th>{t("employee.Verified by")}</th>
            <th>{t("employee.Issued on")}</th>
            <th>{t("employee.Behavior")}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg">
            <td>     
                  <ModalTest />
                 
            </td>
            <td className="activate_osha">
              <strong className="activate"> {t("employee.Activate")} </strong>|{" "}
              {employee.certification}
            </td>
            <td classname="osha">{employee.issuedBy}</td>
            <td>{employee.verifiedBy}</td>
            <td>{employee.issuedOn}</td>
            <td>-</td>
          </tr>
          <tr className="bg">
            <td>     
                  <ModalTest2 />
                 
            </td>
            <td className="activate_osha">
              <strong className="activate"> {t("employee.Activate")} </strong>|{" "}
              {employee.ctf2}
            </td>
            <td classname="osha">{employee.iBy2}</td>
            <td>{employee.vrf2}</td>
            <td>{employee.iuOn2}</td>
            <td>-</td>
          </tr>
          <tr className="bg">
            <td>     
                  <ModalTest3 />
                 
            </td>
            <td className="activate_osha">
              <strong className="activate">  {t("employee.Activate")}</strong>|{" "}
              {employee.ctf3}
            </td>
            <td classname="osha">{employee.iBy3}</td>
            <td>{employee.vrf3}</td>
            <td>{employee.iuOn3}</td>
            <td>-</td>
          </tr>
        </tbody>
      </Table>
      <div className="return_home">
        <a href="/">
          <strong>{t("employee.home")}</strong>
        </a>
      </div>
    </div>
  );
}

import * as React from "react";
import Button from "react-bootstrap/Button";
import styles from "./AllEmployee.module.css";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  allEmployee,
  employeeDetail,
} from "../../redux/action";
import { Link } from 'react-router-dom'



export default function AllEmployee() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState("");
  const AllEmployees = useSelector((state) => state.AllEmployees);
  const DetailsEmployee = useSelector((state) => state.DetailsEmployee);
  const [employee, setEmployee] = React.useState({
    name: "",
    idSST: "",
    eyeColor: "",
    height: "",
    issued: "",
    expires: "",
    certification: "",
    ctf2: "",
    ctf3: "",
    ctf4: "",
    issuedBy: "",
    iBy2: "",
    iBy3: "",
    iBy4: "",
    verifiedBy: "",
    vrf2: "",
    vrf3: "",
    vrf4: "",
    issuedOn: "",
    iuOn2: "",
    iuOn3: "",
    iuOn4: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleOpen = (idsst) => {
    dispatch(employeeDetail(idsst));

    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    dispatch(allEmployee());
  }, [dispatch]);

  React.useEffect(() => {
    setEmployee({
      name: DetailsEmployee.name,
      idSST: DetailsEmployee.idSST,
    });
  }, [DetailsEmployee]);

  const handleChange = (e) => {
    e.preventDefault();

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const filteredEmployees = AllEmployees.filter((employee) => {
    const name = employee.name ? employee.name.toLowerCase() : "";
    const idSST = employee.idSST ? employee.idSST.toLowerCase() : "";
    const term = searchTerm.toLowerCase();
    return name.includes(term) || idSST.includes(term);
  });

  

  return (
    <>
      <div className={styles.AllEmployee_container}>
        <div className={styles.search}>
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            label="Buscar por nombre o ID SST..."
          />
        </div>

        {filteredEmployees.length > 0 ? (
          <div className={styles.boletin_container}>
            <table className={styles.boletin_table}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>IDSST</th>
                  <th>Ver</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((row) => (
                  <>
                    <tr key={row.id}>
                      <td>{row.name}</td>
                      <td>{row.idSST}</td>
                      <td>
                        <Button
                          href={`/employee/${row.idSST}`}
                          target="_blank"
                          type="submit"
                          variant="primary"
                        >
                          VER
                        </Button>
                      </td>
                      <td>

                        <Button
                          type="submit"
                          variant="primary"
                          className={styles.edit}
                          href={`/admin/update-employee/${row.idSST}`}
                          >
                          EDITAR
                        </Button>
                      </td>
                    </tr>
                 
                  </>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No hay empleados que coincidan con el término de búsqueda.</p>
        )}
      </div>
    </>
  );
}

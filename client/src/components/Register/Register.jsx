import "./Register.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newEmployee, Avatar } from "./../../redux/action/index";
import Button from "react-bootstrap/Button";
import RegisterCardOrange from "./RegisterCardOrange/RegisterCardOrange";

function Register() {
  const dispatch = useDispatch();
  const [employe, setEmploye] = useState({
    name: "",
    urlFile: "",
    idSST: "",
    eyeColor: "",
    height: "",
    issued: "",
    expires: "",
    test: "",
    test2: "",
    test3: "",
    test4: "",

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

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(newEmployee(employe));
    alert("Saved to database successfully");
    setEmploye({
      name: "",
      urlFile: "",
      idSST: "",
      eyeColor: "",
      height: "",
      issued: "",
      expires: "",
      test: "",
      test2: "",
      test3: "",
      test4: "",

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
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEmploye((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  


  return (
    <div>
      <div className="Register-Container">
        <form onSubmit={handleSubmit}>
          <div className="Input-Container">
            <div>
              <p>Name:</p>
              <input
                key="image"
                onChange={handleChange}
                value={employe.name}
                type="text"
                placeholder="name..."
                name="name"
                autoComplete="off"
              />
            </div>
            <div>
              <p>Photo:</p>
              <input
                onChange={handleChange}
                value={employe.urlFile}
                type="text"
                name="urlFile"
                placeholder="URL.."
                autoComplete="off"
              />
            </div>
            <div>
              <p>height:</p>
              <input
                onChange={handleChange}
                value={employe.height}
                type="text"
                placeholder="height"
                name="height"
                autoComplete="off"
              />
            </div>
            <div>
              <p>IDSST:</p>
              <input
                onChange={handleChange}
                value={employe.idSST}
                type="text"
                placeholder="idSST"
                name="idSST"
                autoComplete="off"
              />
            </div>
            <div>
              <p>Eye Color:</p>
              <input
                onChange={handleChange}
                value={employe.eyeColor}
                type="text"
                placeholder="eyeColor"
                name="eyeColor"
                autoComplete="off"
              />
            </div>
            <div>
              <p>Issued:</p>
              <input
        onChange={handleChange}
        value={employe.issued}
        type="text" // Usa un input de tipo texto para mostrar la fecha formateada
        placeholder="issued"
        name="issued"
        autoComplete="off"
      />
            </div>
            <div>
              <p>Expires:</p>
              <input
                onChange={handleChange}
                value={employe.expires}
                type="text"
                placeholder="expires"
                name="expires"
                autoComplete="off"
              />
            </div>
            <div>
              <p>Test:</p>
              <input
                onChange={handleChange}
                value={employe.test}
                type="text"
                placeholder="test"
                name="test"
                autoComplete="off"
              />
              <input
                type="text"
                name="test2"
                value={employe.test2}
                onChange={handleChange}
                placeholder="test2"

                autoComplete="off"
              />
              <input
                type="text"
                name="test3"
                value={employe.test3}
                onChange={handleChange}
                placeholder="test3"

                autoComplete="off"
              />
                 <input
                type="text"
                name="test4"
                value={employe.test4}
                onChange={handleChange}
                placeholder="test4"

                autoComplete="off"
              />
            </div>
            <div>
              <p>Certification</p>
              <input
                onChange={handleChange}
                type="text"
                placeholder="certification"
                name="certification"
                value={employe.certification}
                autoComplete="off"
              />

              <input
                type="text"
                name="ctf2"
                value={employe.ctf2}
                onChange={handleChange}
                autoComplete="off"
                placeholder="certification2"

              />
              <input
                type="text"
                name="ctf3"
                value={employe.ctf3}
                onChange={handleChange}
                autoComplete="off"
                placeholder="certification3"

              />
                    <input
                type="text"
                name="ctf4"
                value={employe.ctf4}
                onChange={handleChange}
                autoComplete="off"
                placeholder="certification4"

              />
            </div>
            <div>
              <p>Verified By:</p>
              <input
                onChange={handleChange}
                type="text"
                placeholder="verifiedBy"
                name="verifiedBy"
                value={employe.verifiedBy}
                autoComplete="off"
              />
              <input
                type="text"
                name="iBy2"
                value={employe.iBy2}
                onChange={handleChange}
                autoComplete="off"
                placeholder="verifiedBy2"

              />
              <input
                type="text"
                name="iBy3"
                value={employe.iBy3}
                onChange={handleChange}
                autoComplete="off"
                placeholder="verifiedBy3"

              />
                   <input
                type="text"
                name="iBy4"
                value={employe.iBy4}
                onChange={handleChange}
                autoComplete="off"
                placeholder="verifiedBy4"

              />
            </div>
            <div>
              <p>Issued By: </p>
              <input
                onChange={handleChange}
                type="text"
                name="issuedBy"
                placeholder="issuedBy"
                value={employe.issuedBy}
                autoComplete="off"
              />
              <input
                type="text"
                name="vrf2"
                value={employe.vrf2}
                onChange={handleChange}
                autoComplete="off"
                placeholder="issuedBy2"

              />
              <input
                type="text"
                name="vrf3"
                value={employe.vrf3}
                onChange={handleChange}
                autoComplete="off"
                placeholder="issuedBy3"

              />
                    <input
                type="text"
                name="vrf4"
                value={employe.vrf4}
                onChange={handleChange}
                autoComplete="off"
                placeholder="issuedBy4"

              />
            </div>
            <div>
              <p>Issued On:</p>
              <input
                onChange={handleChange}
                type="text"
                placeholder="issuedOn"
                name="issuedOn"
                value={employe.issuedOn}
                autoComplete="off"

              />
              <input
                onChange={handleChange}
                type="text"
                placeholder="issuedOn"
                name="iuOn2"
                value={employe.iuOn2}
                autoComplete="off"
              />
              <input
                onChange={handleChange}
                type="text"
                placeholder="issuedOn3"
                name="iuOn3"
                value={employe.iuOn3}
                autoComplete="off"
              />
                    <input
                onChange={handleChange}
                type="text"
                placeholder="issuedOn4"
                name="iuOn4"
                value={employe.iuOn4}
                autoComplete="off"
              />
              
            </div>
            <Button className="button-Register" type="submit" variant="primary">
              Register
            </Button>
          </div>
        </form>
      </div>
      <RegisterCardOrange />
    </div>
  );
}

export default Register;

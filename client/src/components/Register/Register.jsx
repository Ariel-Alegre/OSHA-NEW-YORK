import "./Register.css";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { newEmployee } from "./../../redux/action/index";
import Button from "react-bootstrap/Button";
import CircularProgress from "@mui/material/CircularProgress";

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
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState({
    urlFile: null,
    test: null,
    test2: null,
    test3: null,
    test4: null,
  });
  const handleImageRemove = (name) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [name]: null,
    }));
    setEmploye((prevEmploye) => ({
      ...prevEmploye,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", employe.name);
      formData.append("avatarValue", employe.urlFile);
      formData.append("test1", employe.test);
      formData.append("test2", employe.test2);
      formData.append("test3", employe.test3);
      formData.append("test4", employe.test4);
      formData.append("idSST", employe.idSST);
      formData.append("eyeColor", employe.eyeColor);
      formData.append("height", employe.height);
      formData.append("issued", employe.issued);
      formData.append("expires", employe.expires);
      formData.append("certification", employe.certification);
      formData.append("ctf2", employe.ctf2);
      formData.append("ctf3", employe.ctf3);
      formData.append("ctf4", employe.ctf4);
      formData.append("issuedBy", employe.issuedBy);
      formData.append("iBy2", employe.iBy2);
      formData.append("iBy3", employe.iBy3);
      formData.append("iBy4", employe.iBy4);
      formData.append("verifiedBy", employe.verifiedBy);
      formData.append("vrf2", employe.vrf2);
      formData.append("vrf3", employe.vrf3);
      formData.append("vrf4", employe.vrf4);
      formData.append("issuedOn", employe.issuedOn);
      formData.append("iuOn2", employe.iuOn2);
      formData.append("iuOn3", employe.iuOn3);
      formData.append("iuOn4", employe.iuOn4);
  
      await dispatch(newEmployee(formData));
  
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
      setSelectedImages({
        test: null,
        test2: null,
        test3: null,
        test4: null,
      });
  
      alert("Empleado registrado correctamente");
    } catch (error) {
      alert("Hubo un error al registrar el empleado. Por favor, intenta de nuevo más tarde.");
      console.error("Error al registrar empleado:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmploye((prevEmploye) => ({
      ...prevEmploye,
      [name]: value,
    }));
  };

  const handleImageChange = useCallback((e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImages((prevSelectedImages) => ({
        ...prevSelectedImages,
        [name]: {
          file,
          imageUrl,
        },
      }));
      setEmploye((prevEmploye) => ({
        ...prevEmploye,
        [name]: file,
      }));
    }
  }, []);

  return (
      <div className="Register-Container">
        <form onSubmit={handleSubmit}>
          
          <div className="Input-Container">
          <div className="select-file">
              <p>Photo:</p>

              <input
                id="urlFile-file-input"
                type="file"
                name="urlFile"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <label htmlFor="urlFile-file-input" className="file-label">
                {selectedImages.urlFile
                  ? "Cambiar archivo..."
                  : "Seleccionar archivo..."}
              </label>
              {selectedImages.urlFile && (
                <div className="image-preview">
                  <br />
                  <img src={selectedImages.urlFile.imageUrl} alt="Selected" />
                  <br />

                  <button onClick={() => handleImageRemove("urlFile")}>
                    Remove
                  </button>
                </div>
              )}
            </div>
            <div>
              <p>Name:</p>
              <input
                onChange={handleChange}
                value={employe.name}
                type="text"
                placeholder="name..."
                name="name"
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
                type="text"
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
              <div className="select-file">
                <p>Test:</p>

                <input
                  id="test1-file-input"
                  type="file"
                  name="test"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label htmlFor="test1-file-input" className="file-label">
                  {selectedImages.test
                    ? "Cambiar archivo..."
                    : "Seleccionar archivo..."}
                </label>

                {selectedImages.test && (
                  <div className="image-preview">
                    <br />
                    <img src={selectedImages.test.imageUrl} alt="Selected" />
                    <br />

                    <button onClick={() => handleImageRemove("test")}>
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <div className="select-file">
                <p>Test 2:</p>

                <input
                  id="test2-file-input"
                  type="file"
                  name="test2"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label htmlFor="test2-file-input" className="file-label">
                  {selectedImages.test2
                    ? "Cambiar archivo..."
                    : "Seleccionar archivo..."}
                </label>
                {selectedImages.test2 && (
                  <div className="image-preview">
                    <br />

                    <img src={selectedImages.test2.imageUrl} alt="Selected" />
                    <br />

                    <button onClick={() => handleImageRemove("test2")}>
                      Remove
                    </button>
                  </div>
                )}
              </div>
              <div>
                <div className="select-file">
                  <p>Test 3:</p>

                  <input
                    id="test3-file-input"
                    type="file"
                    name="test3"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <label htmlFor="test3-file-input" className="file-label">
                    {selectedImages.test3
                      ? "Cambiar archivo..."
                      : "Seleccionar archivo..."}
                  </label>
                  {selectedImages.test3 && (
                    <div className="image-preview">
                      <br />

                      <img src={selectedImages.test3.imageUrl} alt="Selected" />
                      <br />

                      <button onClick={() => handleImageRemove("test3")}>
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div className="select-file">
                  <p>Test 4:</p>

                  <input
                    id="test4-file-input"
                    type="file"
                    name="test4"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <label htmlFor="test4-file-input" className="file-label">
                    {selectedImages.test4
                      ? "Cambiar archivo..."
                      : "Seleccionar archivo..."}
                  </label>

                  {selectedImages.test4 && (
                    <div className="image-preview">
                      <br />

                      <img src={selectedImages.test4.imageUrl} alt="Selected" />
                      <br />

                      <button onClick={() => handleImageRemove("test4")}>
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="Input-Container2">
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

            <div className="Input-Container2">
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
                name="vrf2"
                value={employe.vrf2}
                onChange={handleChange}
                autoComplete="off"
                placeholder="verifiedBy2"
              />
              <input
                type="text"
                name="vrf3"
                value={employe.vrf3}
                onChange={handleChange}
                autoComplete="off"
                placeholder="verifiedBy3"
              />
              <input
                type="text"
                name="vrf4"
                value={employe.vrf4}
                onChange={handleChange}
                autoComplete="off"
                placeholder="verifiedBy4"
              />
            </div>
            <div className="Input-Container2"> 
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
                name="iBy2"
                value={employe.iBy2}
                onChange={handleChange}
                autoComplete="off"
                placeholder="issuedBy2"
              />
              <input
                type="text"
                name="iBy3"
                value={employe.iBy3}
                onChange={handleChange}
                autoComplete="off"
                placeholder="issuedBy3"
              />
              <input
                type="text"
                name="iBy4"
                value={employe.iBy4}
                onChange={handleChange}
                autoComplete="off"
                placeholder="issuedBy4"
              />
            </div>
            <div className="Input-Container2">
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
            <Button  type="submit" variant="primary">
              {loading ? (
                <CircularProgress
                  size={25}
                  thickness={5}
                  sx={{ color: "#fff" }}
                />
              ) : (
                <span>Register</span>
              )}
            </Button>
          </div>
        </form>
      </div>
  );
}

export default Register;

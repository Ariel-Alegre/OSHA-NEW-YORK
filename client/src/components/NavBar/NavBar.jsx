import Container from "react-bootstrap/Container";
import image from "../../image/dob-logo-white.png";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { useTranslation } from 'react-i18next';


function NavBar() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Navbar className="navBar">
        <Container className="container-navbar">
          <div className="brand">
            <img src={image} alt="Not found" />
          </div>
          <div className="training-connect">
            <strong>
              <h4>{t("navbar.title")} </h4>
            </strong>
          </div>
          <div className="btnContainer">
            <a href="/">{t("navbar.search")}</a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

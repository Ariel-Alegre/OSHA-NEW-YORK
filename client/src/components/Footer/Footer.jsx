import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import style from "./Footer.module.css";
import image from "../../image/nyc_white@x2.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Navbar  className = {style.footer} bg="black" variant="black">
        <Container className={style.container}>
          <Navbar.Brand>
            <div className={style.directions}>
              <div >
                <a
                  href="https://www.nyc.gov/nyc-resources/agencies.page"
                  target="_blanck"
                >
                  <h5 className={style.h5}>{t("footer.Directory")}</h5>
                </a>
                <a
                  href="http://a856-citystore.nyc.gov/"
                  target="_blanck"
                  rel="noreferrer"
                  >
                  <h5  className={style.h5}>{t("footer.City")}</h5>
                </a>
                <a
                  href="https://www.nyc.gov/nyc-resources/resident-toolkit.page"
                  target="_blank"
                  rel="noreferrer"
                  >
                  <h5  className={style.h5}>{t("footer.Recidents")}</h5>
                </a>
                <a
                  href="https://a127-ess.nyc.gov/"
                  target="_blanck"
                  rel="noreferrer"
                  >
                  <h5  className={style.h5}>{t("footer.City Employees")}</h5>
                </a>
                <a
                  href="https://www.nyc.gov/connect/mobile-applications.page"
                  target="_blanck"
                  rel="noreferrer"
                  >
                  <h5  className={style.h5}>{t("footer.NYC Mobile Apps")}</h5>
                </a>
              <br/>
              </div>
              <div className={style.direction_right}>
                <a
                  href="https://www.nyc.gov/home/contact-us.page"
                  target="_blanck"
                  rel="noreferrer"
                  >
                  <h5  className={style.h5}>{t("footer.Contact NYC Government")}</h5>
                </a>
                <a
                  href="https://www.nyc.gov/connect/social-media.page"
                  target="_blanck"
                  rel="noreferrer"
                  >
                  <h5  className={style.h5}>{t("footer.Stay Connected")}</h5>
                </a>

                <a
                  href="https://a858-nycnotify.nyc.gov/notifynyc/"
                  target="_blanck"
                  rel="noreferrer"
                >
                  <h5  className={style.h5}>{t("footer.Notify NYC")}</h5>
                </a>
                <a
                  href="https://www.nyc.gov/nyc-resources/nyc-maps.page"
                  target="_blanck"
                  rel="noreferrer"
                >
                  <h5  className={style.h5}>{t("footer.Maps")}</h5>
                </a>
                <a
                  href="https://www.nyc.gov/nyc-resources/send-feedback.page"
                  target="_blanck"
                  rel="noreferrer"
                >
                  <h5  className={style.h5}>{t("footer.Feedback")}</h5>
                </a>
              </div>
            </div>
      
           <hr />
        
            <div className={style.lenguaje}>
              <button onClick={() => i18n.changeLanguage("ar")}>
                <h5>Arabic</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("yi")}>
                <h5>Yiddish</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("en")}>
                <h5>English</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("be")}>
                <h5>Bengali</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("ru")}>
                <h5>Russian</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("ch")}>
                <h5>Chinese(Simplified)</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("fr")}>
                <h5>French</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("ha")}>
                <h5>Haitian Creole</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("it")}>
                <h5>Italian</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("co")}>
                <h5>Korean</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("po")}>
                <h5>Polish</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("es")}>
                <h5>Spanish</h5>
              </button>
              <button onClick={() => i18n.changeLanguage("ur")}>
                <h5>Urdu</h5>
              </button>
            </div>
            <hr />
            <div  className={style.complete}>
              <img src={image} alt="Not Found" className={style.img} />
              <div className={style.reserved}>
                <h5 >{t("footer.copy.copiRight.reserved")}</h5>

                <h5 >{t("footer.copy.copiRight.reser")}</h5>
              </div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;

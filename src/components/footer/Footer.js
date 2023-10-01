import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row footer mt-5">
        <div className="col-lg-3 col-md-12 col-sm-12 text-center mb-4">
          <div className="d-flex justify-content-center">
            <img
              src="/images/footer-logo.png"
              alt=""
              className="footer-logo"
            />
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 main-footer-social text-center mb-4">
          <div className="d-flex flex-column justify-content-center h-100">
            <h3 className="white-color mb-3" style={{color:"#DFE2DB", fontWeight:"bold"}}>Skills</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <p className="white-color">React.js</p>
              </li>
              <li className="mb-2">
                <p className="white-color">HTML / CSS</p>
              </li>
              <li className="mb-2">
                <p className="white-color">Bootstrap</p>
              </li>
              <li className="mb-2">
                <p className="white-color">GitHub & Git Version Control</p>
              </li>
              <li className="mb-2">
                <p className="white-color">Canva</p>
              </li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4 mt-5">
          <div className="d-flex flex-column align-items-center h-100">
            <h3 className="white-color mb-3" style={{color:"#DFE2DB", fontWeight:"bold"}}>Contacts</h3>
            <div className="d-flex align-items-center mb-2">
              <i className="fa fa-envelope white-color me-3 mt-1"></i>
              <p className="white-color mt-3">muhammadrabeet@gmail.com</p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="fa fa-phone white-color me-3 mt-1"></i>
              <p className="white-color mt-3" style={{ whiteSpace: "nowrap" }}>
                +92 321 422 5299
              </p>
            </div>
            {/* Facebook and LinkedIn icons */}
            <div className="d-flex align-items-center">
              <a
                href="https://www.facebook.com/rabeet.leo"
                className="white-color links-footer me-3"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="fa fa-facebook white-color-hover me-2"
                  style={{ fontSize: "24px" }}
                ></i>
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/hafiz-rabeet-ahmad-29a2327a/"
                className="white-color links-footer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="fa fa-linkedin white-color-hover me-2"
                  style={{ fontSize: "24px" }}
                ></i>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <div className="d-flex flex-column justify-content-center h-100">
            <h5 className="white-color mb-3">Quote</h5>
            <p className="white-color">
              "The only way to do great work is to love what you do."
            </p>
            <p className="white-color mt-2">- Steve Jobs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

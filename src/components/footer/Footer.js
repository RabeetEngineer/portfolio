import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row footer mt-5">
          <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div className="d-flex justify-content-center">
              <img
                src="/images/footer-logo.png"
                alt=""
                className="footer-logo"
                style={{ color: "white" }}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 main-footer-social">
            <div className="d-flex align-items-center">
              <a
                href="https://www.linkedin.com/in/hafiz-rabeet-ahmad-29a2327a/"
                target="_blank"
              >
                <i
                  class="fa fa-linkedin me-3 white-color "
                  style={{ fontSize: "24px" }}
                ></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hafiz-rabeet-ahmad-29a2327a/"
                className="links-footer "
                target="_blank"
              >
                <p className="white-color me-5">https://bit.ly/3KZFmNT</p>
              </a>
              <a href="https://www.facebook.com/rabeet.leo" target="_blank">
                <i
                  class="fa fa-facebook-f me-3 ms-5 white-color"
                  style={{ fontSize: "24px" }}
                ></i>
              </a>
              <a
                href="https://www.facebook.com/rabeet.leo"
                target="_blank"
                className="links-footer"
              >
                <p className="white-color">
                  Facebook
                </p>
              </a>
            </div>

            <div className="footer-social d-flex mt-3">
              <div className="d-flex ">
                <a href="muhammadrabeet@gmail.com"></a>
                <i class="fa fa-envelope white-color me-3 mt-1"></i>
                <p className="me-5  white-color">muhammadrabeet@gmail.com</p>
              </div>
              <div className="d-flex ">
                <i class="fa fa-phone white-color me-3 mt-1"></i>
                <p className="white-color ">+92-321-4225299</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

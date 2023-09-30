import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <a href="https://www.linkedin.com/in/hafiz-rabeet-ahmad-29a2327a/" target="_blank"><i class="fa fa-linkedin me-3"  style={{ fontSize: "24px" }}></i></a>
            <a href="https://www.facebook.com/rabeet.leo" target="_blank"><i class="fa fa-facebook-f me-3" style={{ fontSize: "24px" }}></i></a>
            <a href="https://web.whatsapp.com/send?phone=923214225299" target="_blank"><i class="fa fa-whatsapp" style={{ fontSize: "24px" }}></i></a>
            
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="d-flex ">
              <i class="fa fa-envelope me-3 mt-1"></i>
              <p className="me-5">muhammadrabeet@gmail.com</p>
            </div>
            <div className="d-flex">
            <i class="fa fa-phone me-3 mt-1"></i>
              <p>+92-321-4225299</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

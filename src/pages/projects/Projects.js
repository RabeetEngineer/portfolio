import React from "react";
import "./Projects.css";
import "../home/Home.css";

const Projects = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-3">/Work</h3>
        <p className="text-center">Selected Work i have done in the past</p>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card nft-proj mb-3">
              <div className="inside-card text-center">
                <img src="/images/nft-proj-logo.png" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">NFT Website</h3>
                <p className="card-text">
                  <strong>Technologies Used:</strong> React.js, HTML, CSS,
                  Bootstrap, and Responsive Design
                </p>
                <a
                  href="https://nft-by-rabeet.netlify.app/"
                  className="nft-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the NFT Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div className="inside-card text-center">
                <img src="/images/cleveland-proj-logo.png" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Cleveland Clinic Clone</h3>

                <p className="card-text">
                  <strong>Technologies Used:</strong> HTML, CSS, Bootstrap, and
                  Responsive Design
                </p>
                <a
                  href="https://bit.ly/3OLukOl"
                  className="nft-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the Cleveland Clinic Clone
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div className="inside-card text-center">
                <img src="/images/olx-proj-logo.png" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">OLX Clone</h3>

                <p className="card-text custom-margin">
                  <strong>Technologies Used:</strong> HTML, CSS, Bootstrap
                </p>
                <a
                  href="https://rabeetengineer.github.io/Olx-clone-htmlcss-webpage-responsive/"
                  className="nft-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Page
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-3">
              <div className="inside-card text-center">
                <img src="/images/google-proj-logo.png" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Google Webpage Clone</h3>

                <p className="card-text custom-margin">
                  <strong>Technologies Used:</strong> Responsive, HTML/CSS,
                </p>
                <a
                  href="https://rabeetengineer.github.io/google-clone/"
                  className="nft-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

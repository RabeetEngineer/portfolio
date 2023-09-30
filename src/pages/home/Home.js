import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [projects,setProjects] = useState(0);
  const [ongoingProjects,setOngoingProjects] = useState(0);
  const [jobSuccess,setJobSuccess] = useState(0);

  let projectsInterval, onGoingProjectsInterval, jobSuccessInterval;

  useEffect(()=>{
    projectsInterval = setInterval(() => {
      // setProjects(Math.min(project => project+1,520))
      setProjects(project => Math.min(project+1,5))
    }, 200);

    onGoingProjectsInterval = setInterval(() => {
     // setOngoingProjects(Math.min(project => project+1, 200))
     setOngoingProjects(project => Math.min(project+1,2))
    }, 250);

    jobSuccessInterval = setInterval(() => {
     // setJobSuccess(Math.min(project => project+1,95))
     setJobSuccess(project => Math.min(project+1,94))
    }, 10);

    return() => {
      clearInterval(projectsInterval);
      clearInterval(onGoingProjectsInterval);
      clearInterval(jobSuccessInterval);
    }

  },[])

  return (
    <>
      <div className="container-fluid">

      <div className="container">
      <div className="row mt-5">
        <div className=" col-lg-8 col-md-12 col-sm-12 mt-3">
          <h1>Hey, I'm Hafiz Rabeet, A</h1>
          <h1 className="mt-2">
           <strong className="highlight"> Frontend  </strong>{" "}
            Web Developer
          </h1>
          <div className="mt-3 d-flex align-items-center">
            <img src="/images/progressing.png" className="progressing-img" alt="" />
            <h5 className="">"Progressing towards becoming a MERN stack developer."</h5>
          </div>

          <div className="btn-home mt-5">
            <button type="button" className="btn discuss ">
              Want to Discuss?
            </button>
            <button type="button" className="btn btn-navbar ms-3 ">
              Let's Talk.
            </button>
          </div>
        </div>
        <div className=" col-lg-4 col-md-12 col-sm-12 mt-3 text-center">
          <img src="./images/rabeet-pic.jpg" className="rabeet-img" alt="" />
        </div>
      </div>
    </div>
    {/* Technologies Portion React.js HTML CSS Bootstrap*/}
    <div class="row tech-items mt-5 mb-5">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="tech-item">
          <span
            class="fa fa-star"
            style={{ color: "#FFDA0B", fontSize: "20px" }}
          ></span>
          <h2>React.Js</h2>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="tech-item">
          <span
            class="fa fa-star"
            style={{ color: "#FFDA0B", fontSize: "20px" }}
          ></span>
          <h2>HTML/CSS</h2>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="tech-item">
          <span
            class="fa fa-star"
            style={{ color: "#FFDA0B", fontSize: "20px" }}
          ></span>
          <h2>Bootstrap</h2>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="tech-item">
          <span
            class="fa fa-star"
            style={{ color: "#FFDA0B", fontSize: "20px" }}
          ></span>
          <h2>Responsive Designs</h2>
        </div>
      </div>
    </div>
        {/* Projects Portion */}
        <div className="container">
          <div className="proj-heading text-center mb-4">
            <h1 className="highlight-proj">Projects</h1>
          </div>

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
                    <strong>Technologies Used:</strong> HTML, CSS, Bootstrap,
                    and Responsive Design
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
          </div>
          <div className="view-all text-center">
            <Link to="/projects">
              <button type="button" className="btn btn-navbar mb-5 mt-3 ">
                View All
              </button>
            </Link>
          </div>
        </div>

        {/* Services Portion */}
        <div className="container mt-5">
          <div className="project-text text-center">
            <h1 className="highlight-proj">Services</h1>
            <div className="row text-center">
              <div className="col-12 horizontal-line d-none d-md-none d-lg-block "></div>
            </div>

            <div className="row">
              <div class="col-lg-5 col-md-12 col-sm-12 ">
                <div class="card1 d-flex flex-column">
                  <img
                    src="/images/web-dev-services.png"
                    alt=""
                    class="card-images "
                  />
                  
                </div>
              </div>

              <div className="col-lg-1 col-md-1 d-none d-md-none d-lg-block column-divider-vertical"></div>

              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="card2">
                  <img
                    src="/images/uiuxservices.png"
                    alt=""
                    class="card-images "
                    
                  />
                  
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 horizontal-line d-none d-md-none d-lg-block  mt-0"></div>
            </div>

            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="card3">
                <img
                src="/images/problem-solving-services.png"
                alt=""
                class="card-images "
                
              />
                
                </div>
              </div>

              <div className="col-lg-1 col-md-1 d-none d-md-none d-lg-block column-divider-vertical"></div>

              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="card4">
                  <div className="images d-flex">
                    <img
                      src="/images/digital-marketing-services.png"
                      alt=""
                      class=""
                   
                    />
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 horizontal-line d-none d-md-none d-lg-block mb-3  mt-0"></div>
            </div>
          </div>
          
        </div>

        {/*No of Projects */}
        <div className="container mb-5">
        <div className="proj-heading text-center mt-5 mb-3">
            <h1 className="highlight-proj">No of Projects</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <h1>{projects}+</h1>
              <p className="text-secondary">Total Projects</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <h1>{ongoingProjects}</h1>
              <p className="text-secondary">Ongoing Projects</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <h1>{jobSuccess}%</h1>
              <p className="text-secondary">Job Success</p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Home;

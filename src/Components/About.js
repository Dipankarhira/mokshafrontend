import React from "react";
import about from "./about.jpg";
function About() {
  return (
    
    <div className="bg-dark text-light vh-100 d-flex justify-content-center ">
      <div className="site-section d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="row align-items-center d-flex justify-content-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                src={about}
                alt="Image"
                className="img-fluid image-absolute"
              />
            </div>
            <div className="col-md-5 ml-auto   ">
              <div className="section-heading text-left">
                <h2 className="mb-5 display-3 ">About Us</h2>
              </div>
              <p className="mb-4 lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Odit nobis magni eaque velit eum, id rem eveniet dolor possimus
                voluptas..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

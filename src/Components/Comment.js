import React from "react";

import comment1 from "./comment1.png";
import comment2 from "./comment2.png";
function Comment() {
  return (
    <>
    <div className="bg-light mb-3">
    <div className="container text-center mt-4 pt-4 text-dark ">
      <h2 className="display-3">What People Say</h2>
    </div>
      <div className="container  ">
        <div className="site-section block-14 bg-light ">
          <div className="container">
            <div className="row ">
              {/* <div className="col-md-6 mx-auto my-4 text-center  mb-5 section-heading">
                <h2 className="">What People Say</h2>
              </div> */}

              <div
                id="carouselExampleFade"
                className="carousel slide "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={comment1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={comment2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={comment1} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Comment;

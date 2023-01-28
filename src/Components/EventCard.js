import React from "react";
// import "./EventCard.css";
// "#f2f2f2"
import MOKSHA from "./MOKSHA.jpg";
import MOKSHA2 from "./MOKSHA2.jpg";
import trayaksh1 from "../Components/trayaksh1.jpeg";
import trayaksh2 from "../Components/trayaksh2.jpeg";
import trayaksh3 from "../Components/trayaksh3.jpeg";
function EventCard() {
  return (
    <>
      <div className="">
        <div className="bg-light text-dark d-flex   justify-content-center ">
          <b>
            <h1 className="display-1 mt-5">Welcome to Moksha</h1>
          </b>
        </div>
        <div className=" bg-light text-dark d-flex justify-content-center mb-2   border-bottom border-4 info">
          <p className="lead ">
            This is a lead paragraph. It stands out from regular paragraphs.
          </p>
        </div>

        <div className="row row-cols-3 vw-100 bg-dark">
          <div className="col bg-dark d-flex flex-column justify-content-end vh-100 ">
            <div className="d-flex flex-column justify-content-evenly vh-100 bg-dark ">
              <div className="d-flex justify-content-end">
                <div className="bg-dark  text-light w-50 ">
                  <h1 className=" d-flex justify-content-end">Wifi</h1>
                  <p
                    className="lead  d-flex  justify-content-end "
                    style={{ direction: "rtl" }}
                  >
                    This is a lead paragraph. It stands out from regular
                    paragraphs
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <div className="bg-dark text-light w-50 ">
                  <h1 className=" d-flex justify-content-end">Parking</h1>
                  <p
                    className="lead d-flex justify-content-end"
                    style={{ direction: "rtl" }}
                  >
                    This is a lead paragraph. It stands out from regular
                    paragraphs.
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <div className="bg-dark text-light w-50 ">
                  <h1 className=" d-flex justify-content-end">Kitchen</h1>
                  <p
                    className="lead d-flex justify-content-end"
                    style={{ direction: "rtl" }}
                  >
                    This is a lead paragraph. It stands out from regular
                    paragraphs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col bg-dark d-flex  justify-content-center vh-100">
            <img
              className="w-75 h-75  m-auto rounded-pill d-flex  justify-content-center "
              src={MOKSHA2}
            />
          </div>
          <div className="col bg-dark vh-100 d-flex justify-content-start">
            <div className="col bg-dark d-flex flex-column justify-content-evenly vh-100 ">
              <div className="d-flex flex-column justify-content-evenly vh-100 bg-dark ">
                <div className="bg-dark text-light w-50">
                  <h1 className=" d-flex justify-content-start">
                    Party & Celebrations
                  </h1>
                  <p className="lead d-flex justify-content-start">
                    This is a lead paragraph. It stands out from regular
                    paragraphs.
                  </p>
                  {/* <p className="lead d-flex justify-content-start">
                    jkjhjkhjhjkhfdjlhjhf gsaegg
                  </p>
                  <p className="lead d-flex justify-content-start">
                    jkjhjkhjhjkhfdjlhjhf shhs
                  </p> */}
                </div>
                <div className="bg-dark text-light w-50">
                  <h1 className=" d-flex justify-content-start ">Privacy</h1>
                  <p className="lead d-flex justify-content-start">
                    This is a lead paragraph. It stands out from regular
                    paragraphs.
                  </p>
                  {/* <p className="lead d-flex justify-content-start">
                    jkjhjkhjhjkhfdjlhjhf hgsghh shd
                  </p>
                  <p className="lead d-flex justify-content-start">
                    jkjhjkhjhjkhfdjlhjhf dsssd
                  </p> */}
                </div>
                <div className="bg-dark text-light w-50">
                  <h1 className=" d-flex justify-content-start">Wifi</h1>
                  <p className="lead d-flex justify-content-start">
                    This is a lead paragraph. It stands out from regular
                    paragraphs.
                  </p>
                  {/* <p className="lead d-flex justify-content-start">
                    jkjhjkhjhjkhfdjlhjhf hsh ggsssa
                  </p>
                  <p className="lead d-flex justify-content-start">
                    jkjhjkhjh jkhfdjlhjhf xsdszx
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;

{
  /* <div className="container text-center  ">
        <div className="my-4 py-4">
          <p className="display-4 fw-bold ">Our Units</p>
          <p className="display-5 ">Trayaksh homestay</p>
        </div>

        <div className="container bg-light text-dark py-4 text-center d-flex justify-content-center">
          <div className="row ">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={trayaksh1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">MODERN LUXURIOUS</p>
                  <p>2000/per night</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={trayaksh2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">MODERN CLASSIC</p>
                  <p>1600/per night</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={trayaksh2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">SOFT CLASSIC</p>
                  <p>1600/per night</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 py-4">
          <p className="display-5 ">Desire Duplex</p>
        </div>

        <div className="container bg-light text-dark py-4 text-center d-flex justify-content-center">
          <div className="row ">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={trayaksh1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">MODERN LUXURIOUS</p>
                  <p>2000/per night</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={trayaksh2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">MODERN CLASSIC</p>
                  <p>1600/per night</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={trayaksh2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">SOFT CLASSIC</p>
                  <p>1600/per night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}

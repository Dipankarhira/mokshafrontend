import React from "react";
import map1 from "./map1.jpg";
const Findus = () => {
  return (
    <div className="">
      <div className="row row-cols-3 vw-100 bg-dark d-flex justify-content-evenly">
        <div className="col bg-dark d-flex flex-column justify-content-between vh-100 ">
          <div className="d-flex flex-column justify-content-evenly vh-100 bg-dark ">
            <div className="d-flex justify-content-center ">
              <div className="bg-dark  text-light  ">
                <div className="d-flex m-2 " style={{ height: 65 }}>
                  <div className="vr bg-light " style={{ width: 3 }} />
                </div>

                <h1 className=" d-flex justify-content-start  display-4">
                  Our Locations
                </h1>
                <p className="lead  d-flex  justify-content-end w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
            </div>

            <div className="d-flex justify-content-start">
              <div className="bg-dark  text-light d-flex justify-content-evenly ">
                <i className="fa-solid fa-map-location-dot d-flex flex-column justify-content-evenly me-3 " />

                <div>
                  <a href="https://www.google.com/maps/place/NIRMAL+BHAVAN/@26.1700332,91.7648399,17z/data=!3m1!4b1!4m5!3m4!1s0x375a597a615fa883:0xc5629e18f477d63d!8m2!3d26.1700332!4d91.7670279" 
                  style={{textDecoration: "none"}}>
                  <p className="lead  d-flex  justify-content-end ">
                    Desire Duplex
                  </p>
                  </a>
                  
                  <a href="https://www.google.com/maps/place/Hill+View+Apartment/@26.1666588,91.7812943,17z/data=!3m1!4b1!4m5!3m4!1s0x375a5906069f3827:0x6f0b842f22f9ca!8m2!3d26.1666588!4d91.783483"
                  style={{textDecoration: "none"}}>
                  <p className="lead  d-flex  justify-content-start ">
                    Trayaksh
                  </p>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="bg-dark  text-light d-flex justify-content-evenly ">
                <i className="fas fa-envelope fa-lg me-3 fa-fw d-flex flex-column justify-content-evenly" />
                <div>
                  <p className="lead  d-flex  justify-content-end ">
                    somthing@gmail.com
                  </p>
                  <p className="lead  d-flex  justify-content-end ">
                    somthing@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col bg-dark d-flex  justify-content-center vh-75">
          <img
            className="w-100 h-75  m-auto rounded-circle d-flex  justify-content-center "
            src={map1}
          />
        </div>
      </div>
    </div>
  );
};

export default Findus;

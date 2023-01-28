import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../Components/img1.jpeg";
import background from "../Components/background.jpg";
import "../Components/Button.css";
import "./Description.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
function Description() {
  const [openDate, setOpenDate] = useState(false);
  const [property, setProperty] = useState("");
  const [guest, setGuest] = useState();
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleclick = () => {
    navigate("/booknow");
  };

  return (
    // <div className=" d-flex flex-row justify-content-center vh-100  bg-dark p-5 ">
    //   <div className="col-md-5 vh-75 mt-5 w-75 overflow-hidden">
    //     <div
    //       id="carouselExampleFade"
    //       className="carousel slide carousel-fade"
    //       data-bs-ride="carousel"
    //     >
    //       <div className="carousel-inner">
    //         <div className="carousel-item active">
    //           <img src={background} className="d-block w-100" alt="..." />
    //         </div>
    //         <div className="carousel-item">
    //           <img src={img1} className="d-block w-100" alt="..." />
    //         </div>
    //         {/* <div className="carousel-item">
    //           <img src="..." className="d-block w-100" alt="..." />
    //         </div> */}
    //       </div>
    //       <button
    //         className="carousel-control-prev"
    //         type="button"
    //         data-bs-target="#carouselExampleFade"
    //         data-bs-slide="prev"
    //       >
    //         <span className="carousel-control-prev-icon" aria-hidden="true" />
    //         <span className="visually-hidden">Previous</span>
    //       </button>
    //       <button
    //         className="carousel-control-next"
    //         type="button"
    //         data-bs-target="#carouselExampleFade"
    //         data-bs-slide="next"
    //       >
    //         <span className="carousel-control-next-icon" aria-hidden="true" />
    //         <span className="visually-hidden">Next</span>
    //       </button>
    //     </div>
    //   </div>

    //   <div className="col-md-5 border mt-5 bg-light p-4 w-25 ">
    //     <div className="d-flex justify-content-center border-bottom mt-2">
    //       <h1 className="display-6">Book Your Room</h1>
    //     </div>

    //     <div className="container mt-4 index  ">
    //       <div className=" mb-2">
    //         <label className="lead d-block" style={{ color: "#0b6354" }}>
    //           Check-in :
    //         </label>
    //         <input
    //           type="text"
    //           value={`${format(date[0].startDate, "dd/MM/yyyy")}`}
    //           onClick={() => setOpenDate(!openDate)}
    //           className="w-100"
    //         />
    //         {openDate && (
    //           <DateRange
    //             className="date"
    //             editableDateInputs={true}
    //             onChange={(item) => setDate([item.selection])}
    //             moveRangeOnFirstSelection={false}
    //             ranges={date}
    //           />
    //         )}
    //       </div>

    //       <div className=" mb-2">
    //         <label className="lead d-block" style={{ color: "#0b6354" }}>
    //           Check-out :
    //         </label>
    //         <input
    //           type="text"
    //           value={`${format(date[0].endDate, "dd/MM/yyyy")}`}
    //           onClick={() => setOpenDate(!openDate)}
    //           className="w-100"
    //         />
    //       </div>

    //       <div className="mb-2">
    //         <label className="lead d-block" style={{ color: "#0b6354" }}>
    //           Property :
    //         </label>
    //         <select
    //           id="property"
    //           className="border w-100"
    //           style={{ height: "40px" }}
    //           onClick={(e) => setProperty(e.target.value)}
    //         >
    //           <option value="all">All</option>
    //           <option value="desireDuplex">Desire-Duplex</option>
    //           <option value="trayaksh">Trayaksh</option>
    //         </select>
    //       </div>

    //       <div className="mb-2">
    //         <label className="lead d-block" style={{ color: "#0b6354" }}>
    //           Guests :
    //         </label>
    //         <select
    //         onClick={(e) => setGuest(e.target.value)}
    //           id="guest"
    //           className="border w-100"
    //           style={{ height: "40px" }}
    //         >
    //           <option value="1">1</option>
    //           <option value="2">2</option>
    //           <option value="3">3</option>
    //         </select>
    //       </div>
    //       <div className="mb-2">
    //         <label className="lead d-block" style={{ color: "#0b6354" }}>
    //           Type :
    //         </label>
    //         <select
    //         onClick={(e) => setType(e.target.value)}
    //           id="type"
    //           className="border w-100"
    //           style={{ height: "40px" }}
    //         >
    //           <option value="all">All</option>
    //           <option value="delux">Delux</option>
    //           <option value="nonDelux">Non-Delux</option>
    //         </select>
    //       </div>

    //       <div className="d-flex justify-content-center ">

    //           <button
    //           onClick={handleclick}
    //             className="p-3 w-100 "
    //             style={{
    //               backgroundColor: "#0b6354",
    //               color: "white",
    //               border: "none",
    //             }}
    //           >
    //             Availability
    //           </button>

    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div
        className="vh-75 "
        style={{
          backgroundImage: `url("https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/h1-img1.jpg")`,
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: " center center",
          
        }}
      >
        <div className=" container vh-100 d-flex  align-items-center">
          <div className="d-flex w-100 flex-column align-items-center  vh-25">
            <button
              onClick={handleclick}
              className="p-3"
              style={{
                backgroundColor: "#0b6354",
                color: "white",
                border: "none",
                width:"200px",
                borderRadius:"5px"
              }}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;

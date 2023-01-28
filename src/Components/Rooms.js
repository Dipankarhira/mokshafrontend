import React from "react";
import { Link } from "react-router-dom";
const Rooms = ({ room, fromDate, toDate }) => {
  return (
    <div className="container d-flex justify-content-center ">
      <div
        className="card container m-1 shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "55rem" }}
      >
        <img src={room?.imgUrls[0]} className="card-img-top h-100" alt="..." />
        <div className="card-body m-1 p-1">
          <h5 className="card-title">{room?.name}</h5>
          <p className="card-text">Room-Type : {room?.roomType}</p>
          <p className="card-text">Max-People : {room?.maxPeople}</p>

          <p className="card-text">Contact : {room?.contactNumber}</p>

          {fromDate && toDate && (
            <Link
              to={`/bookingscreen/${room?._id}/${fromDate?._i}/${toDate?._i}`}
            >
              <button
                type="button"
                className="btn  mx-2"
                style={{
                  backgroundColor: "#0b6354",
                  color: "white",
                  border: "none",
                }}
              >
                Book Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;

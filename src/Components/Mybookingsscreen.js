import React, { useEffect, useState } from "react";
import { Tag } from "antd";
const Mybookingsscreen = () => {
  const [bookings, setbookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const mybookings = async () => {
    try {
      setLoading(true);
      const res = await fetch("/getbookingsbyuserid", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setbookings(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    mybookings();
  }, []);

  console.log(bookings);

  async function cancelbooking(bookingid, roomid) {
    try {
      setLoading(true);
      const res = await fetch("/cancelbooking", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookingid, roomid }),
      });

      const data = await res.json();
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <div
      className="row  justify-content-center mt-5"
     
    >
      {loading ? (
        <h1>Loading..</h1>
      ) : error ? (
        <h1>Error..</h1>
      ) : (
        bookings?.map((bookings) => {
          return (
            <div className=" w-75 bg-light  mt-2" style={{height:"500px"}}>
              <div className=" container m-1 shadow-lg  mb-3 text-dark rounded b">
                <div className=" m-1 ">
                  <p className="lead">Booking Id : {bookings._id} </p>
                  <p className="lead">Room Id : {bookings.roomid} </p>
                  <p className="lead">Check-In :{bookings.fromdate} </p>
                  <p className="lead">Check-Out :{bookings.todate} </p>
                  <p className="lead">Total Days :{bookings.totaldays}</p>
                  <p className="lead">Total Amount : {bookings.totalamount} </p>
                  <p className="lead">
                    transactionid : {bookings.transactionid}{" "}
                  </p>
                  <p className="lead">
                    Status :
                    {bookings.status == "booked" ? (
                      <Tag color="#87d068">confirmed</Tag>
                    ) : (
                      <Tag color="#f50">cancelled</Tag>
                    )}{" "}
                  </p>
                  {bookings.status !== "cancelled" && (
                    <div className="text-right d-flex justify-content-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          cancelbooking(bookings._id, bookings.roomid);
                        }}
                        style={{
                          backgroundColor: "#0b6354",
                          color: "white",
                          border: "none",
                          width:"200px",
                          borderRadius:"5px"
                        }}
                      >
                        Cancel Booking
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Mybookingsscreen;

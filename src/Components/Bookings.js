import React, { useState, useEffect } from "react";

const Bookings = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [bookings, setbookings] = useState([]);
  const callallbookings = async () => {
    try {
      setLoading(true);
      const res = await fetch("/getallbookings", {
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
    callallbookings();
  },[]);

  return (
    <div className="container mt-5">
       <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Booking ID</th>
            <th scope="col">Room ID</th>
            <th scope="col">User ID</th>
            <th scope="col">From Date</th>
            <th scope="col">To Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            return (
              <tr>
                <th scope="row">{booking._id}</th>
                <td> {booking.roomid} </td>
                <td> {booking.userid} </td>
                <td> {booking.fromdate} </td>
                <td> {booking.todate} </td>
                <td> {booking.status} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;

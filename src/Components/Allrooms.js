import React, { useState, useEffect } from "react";

const Allrooms = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rooms, setrooms] = useState([]);
  const callallrooms = async () => {
    try {
      setLoading(true);
      const res = await fetch("/getallrooms", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setrooms(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    callallrooms();
  }, []);
  return (
    <div className="container mt-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Room-Type</th>
            <th scope="col">Rent perday</th>
            <th scope="col">Current bookings</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => {
            return (
              <tr>
                <th scope="row">{room._id}</th>
                <td> {room.name} </td>
                <td> {room.roomType} </td>
                <td> {room.rentPerDay} </td>
                <td>
                {room["currentBookings"]["bookingid"]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Allrooms;

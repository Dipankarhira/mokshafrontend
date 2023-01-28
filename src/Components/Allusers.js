import React, { useRef, useState, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";

const Allusers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [users, setusers] = useState([]);
  const callallusers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/getallusers", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setusers(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    callallusers();
  }, []);

 

  return (
    <div className="container mt-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <th scope="row">{user._id}</th>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td> {user.phone} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;

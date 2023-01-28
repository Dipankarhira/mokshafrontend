import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import Bookings from "./Bookings";
import Allrooms from "./Allrooms";
import Allusers from "./Allusers";
import Addroom from "./Addroom";
const Adminscreen = () => {
  const navigate = useNavigate();
  const callAdmin = async () => {
    try {
      const res = await fetch("/admin", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAdmin();
  }, []);

  return (
    
    <div className=" vh-100 w-100 bg-dark ">
      <div className="pt-5 container ">
        <div className="p-5 shadow-lg  ">
          <Tabs
            className="text-light "
            defaultActiveKey="1"
            size="large"
            items={[
              {
                label: `Bookings`,
                key: "1",
                children: <Bookings />,
              },
              {
                label: `Rooms`,
                key: "2",
                children: <Allrooms />,
              },
              {
                label: `Users`,
                key: "3",
                children: <Allusers />,
              },
              {
                label: `Add room`,
                key: "4",
                children: <Addroom />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Adminscreen;

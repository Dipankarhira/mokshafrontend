import React, { useEffect, useState } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { Tabs } from "antd";
import Profiledata from "./Profiledata";
import Mybookingsscreen from "./Mybookingsscreen";
import Adminscreen from "./Adminscreen";
const Profile = () => {
  return (
    <>
      <div
        className="p-5 "
        style={{
          backgroundImage:
            'url("https://augustine.qodeinteractive.com/wp-content/uploads/2020/01/room_title_1.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: " center center",
        }}
      >
        <Tabs
          className="text-light"
          defaultActiveKey="1"
          size="large"
          centered
          items={[
            {
              label: `My Profile`,
              key: "1",
              children: <Profiledata />,
            },
            {
              label: `My Bookings`,
              key: "2",
              children: <Mybookingsscreen />,
            },
            // {
            //   label: `Admin`,
            //   key: "3",
            //   children: <Adminscreen />,
            // },
          ]}
        />
      </div>
    </>
  );
};

export default Profile;

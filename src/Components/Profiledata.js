import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Profiledata = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const callProfilePage = async () => {
    try {
      setLoading(true);
      const res = await fetch("/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setUserData(data);
      setLoading(false);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);
  return (
    <div className="vh-100">
      <form
        className="main-body text-bg-dark p-3 d-flex justify-content-center"
        method="GET"
      >
        <div className="d-flex justify-content-center">
          <div className="col-md-8">
            <div className="col-md-4 mb-3">
              <div className="card-body d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3 pt-3">
                    <h4 className="mb-1">{userData.name}</h4>
                    <p className="text-secondary mb-1 text-light">
                      USERID : {userData._id}
                    </p>
                    <p className=" font-size-sm text-light">
                      EMAIL : {userData.email}{" "}
                    </p>
                    <p className=" font-size-sm text-light">
                      PHONE : {userData.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profiledata;

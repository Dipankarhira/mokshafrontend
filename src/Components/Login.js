import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/signin", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        window.alert("Login failed");
      } else {
        dispatch({ type: "USER", payload: true });
        window.alert("Login Sucessful");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section
      className="vh-75  bg-dark align-middle"
      style={{
        backgroundImage:
          'url("https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/Room-img23.jpg")',
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: " center center",
      }}
    >
      <div className="container vh-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="container w-75 card text-black">
              <div className="card-body p-md-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">
                      Login
                    </p>
                    <form className="mx-1 mx-md-4" method="POST">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example1c"
                            className="form-control "
                            placeholder="Email here..."
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="Password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center ">
                        <button
                          type="button"
                          className=" btn p-3 w-100 "
                          onClick={loginUser}
                          style={{
                            backgroundColor: "#0b6354",
                            color: "white",
                            border: "none",
                          }}
                        >
                          Login
                        </button>
                      </div>
                      <div>
                        <p className="mt-2 pt-2">
                          Not a user? <Link to="/signup">Sign Up</Link>{" "}
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

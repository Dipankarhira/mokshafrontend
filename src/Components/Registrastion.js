import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Registrastion = () => {
  const navigate = useNavigate();

  let name, value;
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    const { name, email, phone, password, cpassword } = user;
    try {
      const res = await fetch("/register", {
        method: "POST",
        mode:'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password, cpassword }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Registration fail");
      } else {
        window.alert("Registration Sucessful");
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
   
  };

  //  https://augustine.qodeinteractive.com/wp-content/uploads/2020/12/Room-single-15.jpg
  return (
    <div
      className="vh-100  align-middle bg-dark"
      style={{
        backgroundImage:
          'url("https://augustine.qodeinteractive.com/wp-content/uploads/2020/12/Room-single-15.jpg")',
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:" center center"
      }}
      
      method="POST"
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="container w-75 card text-black"
              
            >
              <div className="card-body p-md-4">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            placeholder="Name here..."
                            value={user.name}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email here..."
                            value={user.email}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-phone fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="phone"
                            type="number"
                            className="form-control"
                            placeholder="Your phone here..."
                            value={user.phone}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="password"
                            type="Password"
                            className="form-control"
                            placeholder="password"
                            value={user.password}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input
                            name="cpassword"
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            value={user.cpassword}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn w-100"
                          onClick={handleRegistration}
                          style={{
                            backgroundColor: "#0b6354",
                            color: "white",
                            border: "none",
                          }}
                        >
                          Register
                        </button>
                      </div>
                      <div>
                        <p className="mt-2 pt-2">
                          Already a user? <Link to="/login">Sign In</Link>{" "}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrastion;
 
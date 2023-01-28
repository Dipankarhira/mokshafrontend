import React, { useEffect, useState } from "react";
import "./Contact.css";
function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          mode: "cors",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await res.json();
      if (!data) {
        console.log("message not sent");
      } else {
        window.alert("message sent");
        setUserData({ ...userData, message: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // <div className="bg-dark">
    //   <div
    //     className="container  mt-5 pt-5 w-50  "
    //     style={{ borderRadius: "5px" }}
    //   >
    //     <div className=" bg-dark">
    //       <h1 className="display-4 text-light border-bottom border-success m-2">CONTACT US &nbsp;</h1>
    //       <h3 className="lead text-dark" >Your Feedback!</h3>
    //     </div>
    //     <div className="row body bg-light p-5 text-dark vh-auto ">
    //       <form method="POST">
    //         <ul>
    //           <li>
    //             <p className="left lead">
    //               <label htmlFor="first_name" style={{color:"#0b6354"}}>Name</label>
    //               <input
    //                 type="text"
    //                 name="name"
    //                 placeholder="John"
    //                 value={userData.name}
    //                 onChange={handleInputs}
    //               />
    //             </p>
    //             <p className="pull-right lead" >
    //               <label htmlFor="last_name" style={{color:"#0b6354"}}>Phone</label>
    //               <input
    //                 type="number"
    //                 name="phone"
    //                 placeholder="9876543210"
    //                 value={userData.phone}
    //                 onChange={handleInputs}
    //               />
    //             </p>
    //           </li>
    //           <li>
    //             <p className="lead" >
    //               <label htmlFor="email" style={{color:"#0b6354"}}>Email</label>
    //               <input
    //                 type="email"
    //                 name="email"
    //                 placeholder="john.smith@gmail.com"
    //                 value={userData.email}
    //                 onChange={handleInputs}
    //               />
    //             </p>
    //           </li>

    //           <li>
    //             <label className="lead" htmlFor="comments" style={{color:"#0b6354"}}>Comments</label>
    //             <textarea
    //               cols={46}
    //               rows={3}
    //               name="message"
    //               value={userData.message}
    //               onChange={handleInputs}
    //             />
    //           </li>
    //           <li>
    //             <input
    //               className="btn btn-submit"
    //               style={{
    //                 backgroundColor: "#0b6354",
    //                 color: "white",
    //                 border: "none",
    //               }}
    //               type="submit"
    //               onClick={contactForm}
    //             />
    //           </li>
    //         </ul>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className=" vh-auto"
    style={{
      backgroundImage:
        'url("https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/h1-img1.jpg")',
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition:" center center"
    }}
    >
      <h1 className="display-1 d-flex justify-content-center  text-light p-4 border-bottom">
        CONTACT US{" "}
      </h1>
      <h3 className="lead text-light d-flex justify-content-center mb-2 mt-4">
        Your Feedback!
      </h3>
      <div className=" container  w-50  d-flex flex-coloumn justify-content-center p-5 ">
        <form method="POST " className="border p-2 bg-light">
          <ul>
            <li>
              <label
                className="lead"
                htmlFor="first_name"
                style={{ color: "#0b6354" }}
              >
                Name :
              </label>
              <br/>
              <input
                type="text"
                name="name"
                placeholder="John"
                value={userData.name}
                onChange={handleInputs}
              />
<br/>
              <label
                className="lead"
                htmlFor="last_name"
                style={{ color: "#0b6354" }}
              >
                Phone :
              </label>
              <br/>
              <input
                type="number"
                name="phone"
                placeholder="9876543210"
                value={userData.phone}
                onChange={handleInputs}
              />
              <br/>
            </li>
            <li>
              <label
                className="lead"
                htmlFor="email"
                style={{ color: "#0b6354" }}
              >
                Email :
              </label>
              <br/>
              <input
                type="email"
                name="email"
                placeholder="john.smith@gmail.com"
                value={userData.email}
                onChange={handleInputs}
              />
            </li>
            <li>
              <label
                className="lead"
                htmlFor="comments"
                style={{ color: "#0b6354" }}
              >
                Comments :
              </label>
              <textarea
                cols={46}
                rows={3}
                name="message"
                value={userData.message}
                onChange={handleInputs}
              />
            </li>
            <li>
              <input
                className="btn btn-submit w-25"
                style={{
                  backgroundColor: "#0b6354",
                  color: "white",
                  border: "none",
                }}
                type="submit"
                onClick={contactForm}
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Contact;

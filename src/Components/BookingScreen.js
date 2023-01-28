import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import moment from "moment";

const BookingScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState({});
  const { roomid, fromDate, toDate } = useParams();
  const fromdate = moment(fromDate, "DD-MM-YYYY");
  const todate = moment(toDate, "DD-MM-YYYY");
  const totalDays = moment.duration(todate.diff(fromdate)).asDays();
  const [userData, setUserData] = useState({});
  const [totalamount, settotalamount] = useState();

  const callUserData = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  const callOneRooms = async () => {
    try {
      setLoading(true);
      const res = await fetch("/getroombyid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomid }),
      });
      const data = await res.json();

      setRoom(data);
      settotalamount(data.rentPerDay * totalDays);
      setLoading(false);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      setError(true);
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    callUserData();
    callOneRooms();
  }, []);

  const bookroom = async () => {
    try {
      setLoading(true);
      const result = await fetch("/bookroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room: room.name,
          roomid: room._id,
          userid: userData._id,
          fromdate: fromDate,
          todate: toDate,
          totalamount,
          totaldays: totalDays,
        }),
      });
      const data = await result.json();
      setLoading(false);

      if (!result.status === 200) {
        const error = new Error(result.error);
        throw error;
      }
    } catch (err) {
      setError(true);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="  ">
      {loading ? (
        <h1>Loading..</h1>
      ) : error ? (
        <h1>Error..</h1>
      ) : (
        // <div
        //   className="card container mt-5  shadow-lg p-3 mb-5 bg-body rounded "
        //   style={{ width: "80rem" }}
        // >
        //   <img
        //     src={room?.imgUrls[0]}
        //     className="card-img-top h-100"
        //     alt="..."
        //   />
        //   <div className="card-body m-1 p-1">
        //     <h5 className="card-title">{room?.name}</h5>

        //     <b>
        //       <p className="card-text">Name : {userData.name}</p>
        //       <p className="card-text">Room-Type : {room?.roomType}</p>
        //       <p className="card-text">Max-People : {room?.maxPeople}</p>

        //       <p className="card-text">From : {fromDate} </p>
        //       <p className="card-text">To : {toDate} </p>
        //     </b>
        //     <hr/>
        //     <h5 className="card-text">Amount</h5>
        //     <hr/>
        //     <p className="card-text">Total days: {totalDays} </p>
        //     <p className="card-text">Rent per day: {room?.rentPerDay} </p>
        //     <p className="card-text">Total Amount: {totalamount} </p>

        //     <button type="button" className="btn btn-primary mx-2" onClick={bookroom} >
        //       Pay Now
        //     </button>
        //   </div>
        // </div>
        <div className=" vh-auto">
          <div
            className="d-flex justify-content-center"
            style={{
              backgroundImage:
                'url("https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/Room-single-02.jpg")',
              height: "520px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h1 className="display-2 text-white mt-5 p-5"><br/>
              Nice to see you {userData?.name}!!
            </h1>
          </div>

          <div className=" d-flex vh-auto">
            <div className="mt-5 border p-5 w-75 ">
              <h1 className="display-6">{room?.name}</h1>
              <p className="lead mt-5 "> {room?.description} </p>
              <b>
                <p >Rent/Day : INR {room?.rentPerDay} </p>
              </b>
              <br />
              <br />

              <div>
                <span className="display-6  border-bottom border-success mb-5">
                  Amenities
                </span>
                <div className="row mt-5">
                  <div className="col-md-3">
                    <i class="fa-solid fa-snowflake me-3"></i>
                    <span className="lead">Air Conditioner</span>
                    <br />
                    <br />

                    <i class="fa-solid fa-wifi me-3"></i>
                    <span className="lead">High Speed WiFi</span>
                    <br />
                    <br />
                    <i class="fa-solid fa-square-parking me-3"></i>
                    <span className="lead">Parking</span>
                    <br />
                    <br />
                  </div>
                  <div className="col-md-3">
                    <i class="fa-solid fa-snowflake me-3"></i>
                    <span className="lead">Air Conditioner</span>
                    <br />
                    <br />
                    <i class="fa-solid fa-snowflake me-3"></i>
                    <span className="lead">Air Conditioner</span>
                    <br />
                    <br />
                    <i class="fa-solid fa-snowflake me-3"></i>
                    <span className="lead">Air Conditioner</span>
                  </div>
                </div>
              </div>

              <br />
              <span className="display-6  border-bottom border-success mb-5">
                House Rules
              </span>
              <br />
              <div className="mt-5 row">
                <div className="col-md-3">
                  <i class="fa-solid fa-check me-3"></i>
                  <span className="lead">Check-in: 12:00 PM - 9:00 PM</span>
                  <br />
                  <br />
                  <i class="fa-solid fa-check me-3"></i>
                  <span className="lead">Checkout: 11:00 AM </span>
                  <br />
                  <br />
                  <i class="fa-solid fa-check me-3"></i>
                  <span className="lead">NO loud music after 11:00 PM </span>
                  <br />
                  <br />
                </div>
                <div className="col-md-3">
                  <i class="fa-solid fa-check me-3"></i>
                  <span className="lead">Air Conditioner</span>
                  <br />
                  <br />
                  <i class="fa-solid fa-check me-3"></i>
                  <span className="lead">Air Conditioner</span>
                  <br />
                  <br />
                  <i class="fa-solid fa-check me-3"></i>
                  <span className="lead">Air Conditioner</span>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              <span className="display-6  border-bottom border-success mb-5">
                Cancellation
              </span>
              <p className="lead mt-5">
                Lorem ipsum dolor sit amet, in nam denique suavitate
                repudiandae, homero dictas omnesque duo et. Novum dignissim
                consectetuer ei mel. Ne patrioque consequat persequeris usu, duo
                inani imperdiet deseruisse in, no tation conclusionemque vis. Ea
                labitur efficiantur ius. Pri ei meis perpetua pericula.
              </p>
            </div>

            <div
              className="w-25 mt-5 vh-100 bg-dark"
              style={{ position: "sticky", height: "max-content", top: "10px" }}
            >
              <div className="p-5 m-5 border-bottom border-top border-success border-3 vh-100 bg-light">
                <h1 className=" border-bottom border-success">Details</h1>
                <p className="lead">
                  Welcome, <b>{userData.name}</b> . Thanks for Choosing Us !!{" "}
                </p>
                
                <p className="lead">
                  You choose <b>{room?.name}</b> for <b>{(totalDays)===0?`${1}`:`${totalDays}`}</b>  days, i.e, from <b>{fromDate}</b> to <b>{toDate}</b>,
                  inclusive .
                </p>
                <p className="lead">
                  You have to pay us only <b>₹{(totalDays)===0?`${room?.rentPerDay}`:`${totalamount}`}</b> considering rent/day is{" "}
                  <b>{room?.rentPerDay}</b>{" "}
                </p>

                
                <button type="button" className="btn  mx-2"  style={{
                    backgroundColor: "#0b6354",
                    color: "white",
                    border: "none",
                  }}
                  onClick={bookroom} 
                  >
                Pay Now
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingScreen;

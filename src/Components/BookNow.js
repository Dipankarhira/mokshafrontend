import React, { useEffect, useState } from "react";
import { DatePicker, Space } from "antd";
import "./BookNow.css";
import Rooms from "./Rooms";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
const { RangePicker } = DatePicker;

const BookNow = () => {



  const [openDate, setOpenDate] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const [duplicaterooms, setduplicaterooms] = useState([]);
  const [type, settype] = useState("all");

  useEffect(() => {
    const callAllRooms = async () => {
      try {
        setLoading(true);
        const res = await fetch("/getallrooms", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();

        setRooms(data);
        setduplicaterooms(data);
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
    callAllRooms();
  }, []);

// console.log(moment('09-01-2023').isBetween(duplicaterooms[0]?.currentBookings[0]?.fromdate,duplicaterooms[0]?.currentBookings[0]?.todate))

// console.log(duplicaterooms[0]?.currentBookings[0].fromdate._i)

  const filterByDate = (dates) => {
    setfromDate(moment(dates[0].format("DD-MM-YYYY")));
    // setfromDate(moment(dates[0]),"DD-MM-YYYY")
    settoDate(moment(dates[1].format("DD-MM-YYYY")));
    // settoDate(dates[1].format("DD-MM-YYYY"))
 
    console.log(moment(dates[0].format('DD-MM-YYYY')).isBetween(duplicaterooms[0]?.currentBookings[0].fromdate._i,duplicaterooms[0]?.currentBookings[0].todate._i));
    

    var temprooms = [];
    var availability = false;
    for (const room of duplicaterooms) {
      if (room?.currentBookings.length > 0) {
        for (const booking of room.currentBookings) {
          if (
            !moment(dates[0].format("DD-MM-YYYY")).isBetween(
              booking?.fromdate._i,
              booking?.todate._i
            ) &&
            !moment(dates[1].format("DD-MM-YYYY")).isBetween(
            booking?.fromdate._i,
              booking?.todate._i
            )
          ) {
            if (
              // moment(dates[0].format("DD-MM-YYYY")) !== booking.fromdate &&
              // moment(dates[0].format("DD-MM-YYYY")) !== booking.todate &&
              // moment(dates[1].format("DD-MM-YYYY")) !== booking.fromdate &&
              // moment(dates[1].format("DD-MM-YYYY")) !== booking.todate
              !moment(dates[0].format("DD-MM-YYYY")).isSame(booking.fromdate._i) &&
              !moment(dates[0].format("DD-MM-YYYY")).isSame(booking.todate._i) &&
              !moment(dates[1].format("DD-MM-YYYY")).isSame(booking.fromdate._i) &&
              !moment(dates[1].format("DD-MM-YYYY")).isSame(booking.todate._i)
            ) {
              availability = true;
            }
          }
        }
      }
      if (availability === true || room.currentBookings.length === 0) {
        temprooms.push(room);
      }
      setRooms(temprooms);
    }

   
  };

  function filterByType(e) {
    
    settype(e);

    if (e !== "all") {
      var temprooms = duplicaterooms.filter(
        (room) => room.roomType.toLowerCase() === e.toLowerCase()
      );
      setRooms(temprooms);
      // console.log(temprooms);
    } else {
      setRooms(duplicaterooms);
    }
  }

  

  const location = useLocation();
  

 
  // const[guest, setGuest]= useState(location.state.guest);
 
  // const[type , setType] = useState(location.state.type);
  
 



  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{
          backgroundImage:
            'url("https://augustine.qodeinteractive.com/wp-content/uploads/2020/11/h1-img1.jpg")',
          height: "520px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        
        <h1 className="display-2 text-white mt-5 p-5"><br/>Available Rooms</h1>
      </div>
   
<div className="row">

<div className="w-75 col-md-5">
      <div className=" mt-5">
        <div className="mt-5">
          {loading ? (
            <h1>Loading..</h1>
          ) : error ? (
            <h1>Error..</h1>
          ) : (
            rooms?.map((room, index) => {
              return (
                <div className=" mt-2 d-flex align-items-center" key={index}>
                  <Rooms room={room} fromDate={fromDate} toDate={toDate} />
                </div>
              );
            })
          )}
        </div>
        </div>
      </div>




      <div className="w-25 col-md-5 " style={{position:"sticky", height:"max-content", top:"10px"}}>
        <div className=" border rounded mt-5 bg-light p-4  " >
          <div className="d-flex justify-content-center border-bottom border-success mt-2">
            <h1 className="display-6">Book Your Room</h1>
          </div>

          <div className="container mt-4 index  ">
            <div className=" mb-2">
              <label className="lead d-block" style={{ color: "#0b6354" }}>
                Check-in : ---- Check-out :
              </label>
              <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
              {/* <input
                type="text"
                // value={`${format(date[0].startDate, "dd/MM/yyyy")}`}
                value={fromDate}
                onClick={() => setOpenDate(!openDate)}
                className="w-100"
              /> */}
              {/* {openDate && (
                <DateRange
                  className="date"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />

                <RangePicker format="DD-MM-YYYY" onChange={filterByDate} /> 
              )} */}
            </div>

            {/* <div className=" mb-2">
              <label className="lead d-block" style={{ color: "#0b6354" }}>
                Check-out :
              </label>
              <input
                type="text"
                // value={`${format(date[0].endDate, "dd/MM/yyyy")}`}
                value={toDate}
                onClick={() => setOpenDate(!openDate)}
                className="w-100"
              />
            </div> */}

            <div className="mb-2">
              <label className="lead d-block" style={{ color: "#0b6354" }}>
                Property :
              </label>
              <select
                id="property"
                className="border w-100"
                style={{ height: "40px" }}
               
              
              >
                <option value="All"  >All</option>
                <option value="desireDuplex">Desire-Duplex</option>
                <option value="trayaksh">Trayaksh</option>
              </select>
            </div>

            <div className="mb-2">
              <label className="lead d-block" style={{ color: "#0b6354" }}>
                Guests :
              </label>
              <select
                id="guest"
                className="border w-100"
                style={{ height: "40px" }}
               
                
                
              >
                <option value={1}>1</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="lead d-block" style={{ color: "#0b6354" }}>
                Type :
              </label>
              <select
                id="type"
                className="border w-100"
                style={{ height: "40px" }}
                
                value={type}
                onChange={(e) => {
                  filterByType(e.target.value);
                }}
              >
                {/* <option value="all">All</option>
                <option value="delux">Delux</option>
                <option value="nonDelux">Non-Delux</option> */}
                 <option value="all"  >
                  All
                </option>
                <option value="delux">Delux</option>
                <option value="non-delux">Non--Delux</option>
              </select>
            </div>

            {/* <div className="d-flex justify-content-center ">
              
                <button
                  className="p-3 w-100 "
                  style={{
                    backgroundColor: "#0b6354",
                    color: "white",
                    border: "none",
                  }}

                 
                >
                  Availability
                </button>
             
            </div> */}
          </div>
        </div>
      </div>

</div>

      
    </div>
  );
};

export default BookNow;

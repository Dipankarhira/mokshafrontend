import React ,{useState} from "react";

const Addroom = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [maxpeople, setMaxpeople] = useState();
    const [contact, setContact] = useState();
    const [rent, setRent] = useState();
    const [description, setDescription] = useState("");
    const [imgurl1, setimgurl1] = useState("");
    const [imgurl2, setimgurl2] = useState("");
    const [imgurl3, setimgurl3] = useState("");

     const addroom= async()=>{


        const newroom={
            name,
            type,
            maxpeople,
            contact,
            rent,
            description,
            imgUrls:[imgurl1,
            imgurl2,
            imgurl3]
        }

        try {
            const res = await fetch("/addroom", {
              method: "POST",
              mode:'cors',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newroom),
            });
      
            const data = await res.json();
      
            if (res.status === 422 || !data) {
              window.alert("Room added");
            } else {
              window.alert("Something went Wrong");
           
            }
          } catch (e) {
            console.log(e);
          }
     }


  return (
    <div className="row">
      <div className="col-md-5">
        <input
          type="text"
          className=" form-control  mb-3"  placeholder = "Room Name"
          id="roomname"
          aria-describedby="roomname"
          value={name} onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="text"
          className=" form-control  mb-3"  placeholder = "Room Type"
          id="roomtype"
          aria-describedby="roomname"
          value={type} onChange={(e)=>setType(e.target.value)}
        />

        <input
          type="number"
          className=" form-control  mb-3"  placeholder = "Max-people"
          id="maxpeople"
          aria-describedby="maxpeople"
          value={maxpeople} onChange={(e)=>setMaxpeople(e.target.value)}
        />

        <input
          type="number"
          className=" form-control  mb-3"  placeholder = "Contact number"
          id="contact"
          aria-describedby="contact"
          value={contact} onChange={(e)=>setContact(e.target.value)}
        />

        <input
          type="number"
          className=" form-control  mb-3"  placeholder = "Rent per day"
          id="rent"
          aria-describedby="rent"
          value={rent} onChange={(e)=>setRent(e.target.value)}
        />
      </div>

      <div className="col-md-5">
        <input
          type="text"
          className=" form-control  mb-3"  placeholder = "Description"
          id="description"
          aria-describedby="description"
          value={description} onChange={(e)=>setDescription(e.target.value)}
        />

        <input
          type="text"
          className=" form-control  mb-3"  placeholder = "Image 1"
          id="imgurl1"
          aria-describedby="imgurl1"
          value={imgurl1} onChange={(e)=>setimgurl1(e.target.value)}
        />

        <input
          type="text"
          className=" form-control  mb-3"  placeholder = "Image 2 "
          id="imgurl2"
          aria-describedby="imgurl2"
          value={imgurl2} onChange={(e)=>setimgurl2(e.target.value)}
        />

        <input
          type="text"
          className=" form-control  mb-3"  placeholder = "Image 3 "
          id="imgurl3"
          aria-describedby="imgurl3"
          value={imgurl3} onChange={(e)=>setimgurl3(e.target.value)}
        />

         <button type="submit" className="btn btn-primary" onClick={addroom}>
        Submit
      </button>
      </div>

     
    </div>
  );
};

export default Addroom;

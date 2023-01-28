import { createContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";
import BookNow from "./Components/BookNow";

import Footer from "./Components/Footer";
import Registrastion from "./Components/Registrastion";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Profile from "./Components/Profile";
import { reducer, initialState } from "./reducer/UseReducer";
import BookingScreen from "./Components/BookingScreen";
import Mybookingsscreen from "./Components/Mybookingsscreen";
import Adminscreen from "./Components/Adminscreen";
import Bookings from "./Components/Bookings";
import Allrooms from "./Components/Allrooms";
import Allusers from "./Components/Allusers";
import Addroom from "./Components/Addroom";
import Profiledata from "./Components/Profiledata";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/booknow" element={<BookNow />} />
            <Route exact path="/signup" element={<Registrastion />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/gallery" element={<Gallery />} />

            <Route exact path="/profile" element={<Profile />} />

            <Route path="/profiledata" element={<Profiledata />} />
            <Route path="/mybookingscreen" element={<Mybookingsscreen />} />

            <Route exact path="/logout" element={<Logout />} />

            <Route
              exact
              path="/bookingscreen/:roomid/:fromDate/:toDate"
              element={<BookingScreen />}
            />
            <Route exact path="*" element={<ErrorPage />} />
            <Route exact path="/admin" element={<Adminscreen />}>
              <Route path="bookings" element={<Bookings />} />
              <Route path="allrooms" element={<Allrooms />} />
              <Route path="allusers" element={<Allusers />} />
              <Route path="addroom" element={<Addroom />} />
            </Route>
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

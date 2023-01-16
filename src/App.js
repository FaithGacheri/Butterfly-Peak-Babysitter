import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import ForgotPasswordForm from "./Components/ForgotPasswordForm";
import Blog1 from "./Components/Blog1";
import Blog2 from "./Components/Blog2";
import Blog3 from "./Components/Blog3";
import Cards from "./Components/Cards";
import Favourite from "./Components/Favourite";
import Caregiver from "./Components/CaregiverForm";
import CardItem from "./Components/CardItem";
import CheckoutstatusPage from "./Components/CheckoutStatusPage";
import Profile from "./Components/Profile";
import CaregiverReviewsPage from "./Components/CaregiverReviewsPage";
import CaregiverPage from "./Components/CaregiverPage";
import AppointmentTable from './Components/AppointmentTable';

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/caregivers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout_status" element={<CheckoutstatusPage user={user} />} />
        <Route path="/caregiver" element={<AppointmentTable user={user}/>} />
        <Route path="caregiver">
          <Route path="bookings" element={<CaregiverPage/>}/>
        </Route>
        <Route path="blog">
          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
          <Route path="blog3" element={<Blog3 />} />
        </Route>
        <Route path="userprofile" element={<Profile user={user} />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/login/forgot_password" element={<ForgotPasswordForm />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route exact path="/">
          <Route
            exact
            path="/cards"
            element={<Cards user={user} />}
          />
          <Route exact path="/favourite" element={<Favourite />} />
        </Route>
        <Route path="sign_up">
          <Route path="caregiver" element={<Caregiver />} />
        </Route>
        <Route path="cards">
          <Route path="card-item">
            <Route path="reviews" element={<CaregiverReviewsPage />} />
          </Route>
        </Route>

        <Route exact path="cards/:id" element={<CardItem data={data} user={user} />} />

      </Routes>
    </div>
  );
}

export default App;


import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Blog from './Components/Blog'; 
import Contact from './Components/Contact';
import ForgotPasswordForm from './Components/ForgotPasswordForm'
import Blog1 from './Components/Blog1';
import Blog2 from './Components/Blog2';
import Blog3 from './Components/Blog3';
import AvailableNannys from "./Components/AvailableNannys";
import Favourite from "./Components/Favourite";
import Caregiver from "./Components/CaregiverForm";
import CardItem from './Components/CardItem'
import Checkout from './Components/Checkout'


function App() {
  return (
  <div >
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="blog">
      <Route path="blog1" element={<Blog1/>} />
      <Route path="blog2" element={<Blog2/>} />
      <Route path="blog3" element={<Blog3/>} />
    </Route>
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path='/login/forgot_password' element={<ForgotPasswordForm/>}/>
    <Route path="/sign_up" element={<Signup/>} />
    <Route exact path="/">
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/cards" element={<AvailableNannys />} />
          <Route exact path="/favourite" element={<Favourite />} />
        </Route>
        <Route path="sign_up">
          <Route path="caregiver" element={<Caregiver />} />
        </Route>
        <Route path="cards">
          <Route path="card-item" element={<CardItem />} />
        </Route>
  </Routes>
  </div>


  )
}

export default App;

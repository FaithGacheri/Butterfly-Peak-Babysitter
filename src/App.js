
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Blog from './Components/Blog'; 
import Contact from './Components/Contact';
import CardItem from  './Components/CardItem'
import AddNanny from './Components/AddNanny';
import ForgotPasswordForm from './Components/ForgotPasswordForm'
import AvailableNannys from './Components/AvailableNannys'
import Favourite from './Components/Favourite'

function App() {
  return (
  <div >
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route exact path='/'>
      <Route exact path='/card-item' element={<CardItem/>}/>
      <Route exact path='/cards' element={<AvailableNannys/>} />
      <Route exact path='/favourite' element={<Favourite/>} />
      <Route exact path='/addNanny' element={<AddNanny/>} />
      
    </Route>
    <Route path="/about" element={<About/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path='/login/forgot_password' element={<ForgotPasswordForm/>}/>
    <Route path="/sign_up" element={<Signup/>} />
  </Routes>
  </div>
  );
}

export default App;

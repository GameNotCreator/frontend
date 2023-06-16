import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login/LoginPage";
import Signup from "./components/Auth/Signup/SignupPage"
import AdminHome from './components/Admin/Admin'; // Importez AdminHome ici
import UserContext from './UserContext';
import NoProduct from "./components/ProductErrors/NoProduct/NoProduct";
import ProductComingSoon from "././components/ProductErrors/ProductCommingSoom/ProductCommingSoon";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Naigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);

    
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/admin/homepage" element={<AdminHome/>} />
            <Route path="/comingsoon" element={<ProductComingSoon/>} />
            <Route path="/notavailable" element={<NoProduct/>} />


          </Routes>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
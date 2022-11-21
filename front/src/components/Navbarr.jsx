import React, { useState, useEffect,useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import orange from "../assets/orange.jpg"
import { useDispatch, useSelector, } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { TbLogout } from "react-icons/tb";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  // const { user } = useSelector((state) => state.auth);


  const log={
    width:'200%',
    height:'100vh',
    marginLeft:'7px',
  }
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
    
       
          <h4 style={{fontSize:'25px', paddingLeft:'330px', color:'#EF5B0C'}}>Orange Stock Management System</h4>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light" style={{backgroundColor:'#EF5B0C'}}>
                  <TbLogout/>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <header>
			<div>
         <NavLink to="/dashboard" className="navbar-item" >
          <img src={orange} style={log} alt="logo of the project" />
          </NavLink>
      </div>
			<nav ref={navRef}>
         <h4 
         style={{
          fontSize:'25px',
          color:'#EF5B0C',
          textAlign:'center'
        }}>Orange Stock Management System</h4>
         <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light" style={{backgroundColor:'#EF5B0C'}}>
                  <TbLogout/>
                </button>
              </div>
            </div>
          </div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header> */}
      </nav>
    </div>
  );
};

export default Navbar;

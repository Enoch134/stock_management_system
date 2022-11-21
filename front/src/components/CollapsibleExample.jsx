import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect,useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import logo from "../logo.png";
import orange from "../assets/orange.jpg"
import { useDispatch, useSelector, } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { TbLogout } from "react-icons/tb";
import axios from "axios";
import "./Navbarr.css";

function CollapsibleExample() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
  
    
  
    const logout = () => {
      dispatch(LogOut());
      dispatch(reset());
      navigate("/");
    };

    const [isOpen, setIsOpen] = useState(false);
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //     <NavLink to="/dashboard" className="navbar-item" >
    //     <h4 style={{fontSize:'25px', textAlign:'center', color:'#EF5B0C'}}>Orange Stock Management System</h4>
    //       </NavLink>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
          
    //       </Nav>
    //       <Nav>
    //       <div className="buttons">
    //             <button onClick={logout} className="button is-light" style={{backgroundColor:'#EF5B0C'}}>
    //               <TbLogout/>
    //             </button>
    //         </div>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
//     <Navbar bg="light" expand="lg">
//     <Container fluid>
//       <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse id="navbarScroll">
//         <Nav
//           className="me-auto my-2 my-lg-0"
//           style={{ maxHeight: '100px' }}
//           navbarScroll
//         >
//           <Nav.Link href="#action1">Home</Nav.Link>
//           <Nav.Link href="#action2">Link</Nav.Link>
//           <NavDropdown title="Link" id="navbarScrollingDropdown">
//             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//             <NavDropdown.Item href="#action4">
//               Another action
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item href="#action5">
//               Something else here
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link href="#" disabled>
//             Link
//           </Nav.Link>
//         </Nav>
//         <Form className="d-flex">
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//           />
//           <Button variant="outline-success">Search</Button>
//         </Form>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>

<div className="Navbar">
      <span className="nav-logo">DevLHB</span>

      <h5>stock management system</h5>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default CollapsibleExample;
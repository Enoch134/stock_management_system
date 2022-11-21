import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import AllStock from "../pages/inventory/AllStock"
import { NavLink, Link } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoMan, IoPeopleCircle, IoGitBranchSharp, IoAddCircleOutline, IoAccessibilityOutline } from "react-icons/io5";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Doughnut, Bar } from 'react-chartjs-2';
import Chart from "react-apexcharts";
import "./Board.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import "../Welcome.css"
import DirectorRequest from "../../pages/directorDashboard/DirectorRequest";
import DirectorRequestList from "./DirectorRequestList";



const DirectorDashboard = () => {

  
  const { user } = useSelector((state) => state.auth);
//   const [allStock, setAllStock,] = useState([]);
//   useEffect(() => {
//     getAllStock();
//   }, []);

//   const getAllStock = async () => {
//     const response = await axios.get("http://localhost:5000/allStock");
//     setAllStock(response.data);
//   };


 // Admin Dashboard End here
//   const [request, setRequest] = useState([]);
//   useEffect(() => {
//     getRequest();
//   }, []);

//   const getRequest = async () => {
//     const response = await axios.get("http://localhost:5000/request");
//     setRequest(response.data);
//   };

const [requestApproved, setRequestByManagerReqApproved] = useState([]);

  useEffect(() => {
    getRequestByManagerReqApproved();
  }, []);

  const getRequestByManagerReqApproved = async () => {
    const response = await axios.get("http://localhost:5000/requestByManagerReqApproved");
    setRequestByManagerReqApproved(response.data);
  };


 

  const [requestDirectorPending, setRequestDirectorReqPending] = useState([]);

  useEffect(() => {
    getRequestDirectorReqPending();
  }, []);

  const getRequestDirectorReqPending = async () => {
    const response = await axios.get("http://localhost:5000/requestDirectorReqPending");
    setRequestDirectorReqPending(response.data);
  };


 

  const [requestDirectorRejected, setRequestDirectorReqRejected] = useState([]);
  useEffect(() => {
    getRequestDirectorReqRejected();
  }, []);

  const getRequestDirectorReqRejected = async () => {
    const response = await axios.get("http://localhost:5000/requestDirectorReqRejected");
    setRequestDirectorReqRejected(response.data);
  };

  // Director Dashboard Design Start here
  const [requestDirectorAll, setDirectorRequestAll] = useState([]);

  useEffect(() => {
    getDirectorRequestAll();
  }, []);

  const getDirectorRequestAll = async () => {
    const response = await axios.get("http://localhost:5000/directorRequestAll");
    setDirectorRequestAll(response.data);
  };




 













  const welcome = {
    height: "90vh",
    width: 'auto',
    marginLeft:'50px',
    // marginTop: "30px"
  }
  const sty={

  }

  return (
    <div>

        {user && user.role === "director" && (
        <div style={{ display: "flex" }}>

           <div className="featured">
           
           <div className="featuredItem">
            
           <div className="featuredMoneyContainer">
             <NavLink to={"/directorPendingRequest"} className="nav">
             <span className="featuredTitle">Request</span><br/>
             <span className="featuredMoney">{" " + " " + requestDirectorPending.length}
             <IoGitBranchSharp  className="featuredIcon negative"/>
             </span>
             <span className="featuredMoneyRate">
             <span className="featuredSub">Compared to last month</span>
           </span>
          
           
           </NavLink>
         </div>
       
        </div>
        </div>
       


           <div className="featured">
           
          <div className="featuredItem">
           
          <div className="featuredMoneyContainer">
            <NavLink to={"/directorPendingRequest"} className="nav">
            <span className="featuredTitle">Request</span><br/>
            <span className="featuredMoney">{" " + " " + requestDirectorPending.length}
            <IoGitBranchSharp  className="featuredIcon negative"/>
            </span>
            <span className="featuredMoneyRate">
            <span className="featuredSub">Compared to last month</span>
          </span>
          
          </NavLink>
        </div>
       
       </div>
       </div>
      

       <div className="featured">
           
           <div className="featuredItem">
            
           <div className="featuredMoneyContainer">
             <NavLink to={"/directorPendingRequest"} className="nav">
             <span className="featuredTitle">Request</span><br/>
             <span className="featuredMoney">{" " + " " + requestDirectorPending.length}
             <IoGitBranchSharp  className="featuredIcon negative"/>
             </span>
             <span className="featuredMoneyRate">
             <span className="featuredSub">Compared to last month</span>
           </span>
           
           </NavLink>
         </div>
        
        </div>
        </div>
       
       
    
        

          <div className="featured">
           
          <div className="featuredItem">
           
          <div className="featuredMoneyContainer">
            <NavLink to={"/directorPendingRequest"} className="nav">
            <span className="featuredTitle">Request</span><br/>
            <span className="featuredMoney">{" " + " " + requestDirectorPending.length}
            <IoGitBranchSharp  className="featuredIcon negative"/>
            </span>
            <span className="featuredMoneyRate">
            <span className="featuredSub">Compared to last month</span>
          </span>
          
          </NavLink>
        </div>
        
       </div>
       </div>
      
     
        </div>
      )}
       <div>
        <DirectorRequestList/>

      </div>
    </div>
    
  );
};

export default DirectorDashboard;

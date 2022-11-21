import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Doughnut, Bar } from 'react-chartjs-2';
import Chart from "react-apexcharts";
import "./Welcome.css"
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoMan, IoPeopleCircle, IoGitBranchSharp, IoAddCircleOutline, IoAccessibilityOutline } from "react-icons/io5";




const AdminWelcome = () => {

  
  const { user } = useSelector((state) => state.auth);

 // Manager Dashboard Design Start here

  const [requestManager, setManagerRequestAll] = useState([]);

  useEffect(() => {
    getManagerRequestAll();
  }, []);

  const getManagerRequestAll = async () => {
    const response = await axios.get("http://localhost:5000/managerRequestAll");
    setManagerRequestAll(response.data);
  };



  const [requestApproved, setRequestByManagerReqApproved] = useState([]);

  useEffect(() => {
    getRequestByManagerReqApproved();
  }, []);

  const getRequestByManagerReqApproved = async () => {
    const response = await axios.get("http://localhost:5000/requestByManagerReqApproved");
    setRequestByManagerReqApproved(response.data);
  };


  const [requestPending, setRequestByManagerReqPending] = useState([]);
  useEffect(() => {
    getRequestByManagerReqPending();
  }, []);

  const getRequestByManagerReqPending = async () => {
    const response = await axios.get("http://localhost:5000/requestByManagerReqPending");
    setRequestByManagerReqPending(response.data);
  };

  const [requestDirectorPending, setRequestDirectorReqPending] = useState([]);

  useEffect(() => {
    getRequestDirectorReqPending();
  }, []);

  const getRequestDirectorReqPending = async () => {
    const response = await axios.get("http://localhost:5000/requestDirectorReqPending");
    setRequestDirectorReqPending(response.data);
  };


  const [requestManagerRejected, setRejectedRequest] = useState([]);

  useEffect(() => {
    getRejectedRequest();
  }, []);

  const getRejectedRequest = async () => {
    const response = await axios.get("http://localhost:5000/rejectedRequest");
    setRejectedRequest(response.data);
  };

  const [requestDirectorRejected, setRequestDirectorReqRejected] = useState([]);
  useEffect(() => {
    getRequestDirectorReqRejected();
  }, []);

  const getRequestDirectorReqRejected = async () => {
    const response = await axios.get("http://localhost:5000/requestDirectorReqRejected");
    setRequestDirectorReqRejected(response.data);
  };







 const welcome = {
    height: "90vh",
    width: 'auto',
    marginLeft:'50px',
    // marginTop: "30px"
  }


  return (
    <div style={welcome}>

    {user && user.role === "admin" && (
        <div style={{ display: "flex", flexDirection:'column' }}>
            <h4 style={{paddingLeft:'40px'}}>Manager Dashboard</h4>

        
          <div style={{display:'flex', flexDecoration:'row',marginLeft:'40px'}}>
            
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


        <div style={{display:'flex', flexDecoration:'row', marginTop:'10px', marginLeft:'40px'}}>
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

    

          {/* <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Request Rejected</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Director</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorRejected.length}</MDBCardText>
                <MDBBtn href={"/dirRequestRejected"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div> */}
          
       
        </div>
      )}

         
   
    </div>
    
  );
};

export default AdminWelcome;

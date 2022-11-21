import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AllStock from "../pages/inventory/AllStock"
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Doughnut, Bar } from 'react-chartjs-2';
import Chart from "react-apexcharts";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./Welcome.css"



const Welcome = () => {

  
  const { user } = useSelector((state) => state.auth);
  const [allStock, setAllStock,] = useState([]);
  useEffect(() => {
    getAllStock();
  }, []);

  const getAllStock = async () => {
    const response = await axios.get("http://localhost:5000/allStock");
    setAllStock(response.data);
  };

  const [stock, setStock,] = useState([]);
  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const response = await axios.get("http://localhost:5000/stock");
    setStock(response.data);
  };



  const [stockInUse, setStockInUse,] = useState([]);
  useEffect(() => {
    getStockInUse();
  }, []);

  const getStockInUse = async () => {
    const response = await axios.get("http://localhost:5000/stockInUse");
    setStockInUse(response.data);
  };


  const [request, setAdminRequest] = useState([]);
  useEffect(() => {
    getAdminRequest();
  }, []);


  const getAdminRequest = async () => {
    const response = await axios.get("http://localhost:5000/adminRequest");
    setAdminRequest(response.data);
  };

  // Admin Dashboard End here
  const [requests, setRequest] = useState([]);
  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    const response = await axios.get("http://localhost:5000/request");
    setRequest(response.data);
  };


  const [requestM, setManagerRequestRejected] = useState([]);

  useEffect(() => {
    getManagerRequestRejected();
  }, []);

  const getManagerRequestRejected = async () => {
    const response = await axios.get("http://localhost:5000/managerRequestRejected");
    setManagerRequestRejected(response.data);
  };



  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };



  const [requestA, setRequestByBothApproved] = useState([]);

  useEffect(() => {
    getRequestByBothApproved();
  }, []);

  const getRequestByBothApproved = async () => {
    const response = await axios.get("http://localhost:5000/requestByBothApproved");
    setRequestByBothApproved(response.data);
  };


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

  // Director Dashboard Design Start here
  const [requestDirectorAll, setDirectorRequestAll] = useState([]);

  useEffect(() => {
    getDirectorRequestAll();
  }, []);

  const getDirectorRequestAll = async () => {
    const response = await axios.get("http://localhost:5000/directorRequestAll");
    setDirectorRequestAll(response.data);
  };




  const [state, setState] = useState({

    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [`${allStock.length}`, "Stock Not in Use", "Stock In Use", "Approved Stock"]
      }
    },
    series: [
      {
        // {allStock.length}
        // {stock.length}
        // {stockInUse.length}
        // {request.length}
        name: "series-1",
        data: [10, 20, 30, 40]
      }
    ]
  })













  const welcome = {
    height: "90vh",
    width: 'auto',
    marginLeft:'50px',
    // marginTop: "30px"
  }


  return (
    <div style={welcome}>

      {user && user.role === "admin" && (
        <div>
          <div style={{ display: "flex" }}>

            <div class="adminStockDetails">
              <MDBCard alignment='center'>
                <MDBCardHeader alignment='center'>Stock Details</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>All Stock</MDBCardTitle>
                  <MDBCardText class="length">{" " + " " + allStock.length}</MDBCardText>
                  <MDBBtn href={"/allStock"}>View Stock</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
              </MDBCard>
            </div>


            <div class="adminStockDetails">
              <MDBCard alignment='center'>
                <MDBCardHeader>Stock Details</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Not In Use</MDBCardTitle>
                  <MDBCardText class="length">{" " + " " + stock.length}</MDBCardText>
                  <MDBBtn href={"/stockIn"}>View</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
              </MDBCard>
            </div>

            <div class="adminStockDetails">
              <MDBCard alignment='center'>
                <MDBCardHeader>Stock Details</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Stock In Use</MDBCardTitle>
                  <MDBCardText class="length">{" " + " " + stockInUse.length}</MDBCardText>
                  <MDBBtn href={"/stockInUse"}> View</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
              </MDBCard>
            </div>


            <div class="adminStockDetails">
              <MDBCard alignment='center'>
                <MDBCardHeader>Stock Details</MDBCardHeader>
                <MDBCardBody>
                  <MDBCardTitle>Request</MDBCardTitle>
                  <MDBCardText class="length">{" " + " " + request.length}</MDBCardText>
                  <MDBBtn href={"/adminRequest"}> View</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
              </MDBCard>
            </div>


            <div class="adminStockDetails">
              <MDBCard class="bg1">
                <MDBCard alignment='center'>
                  <MDBCardHeader>Users Details</MDBCardHeader>
                  <MDBCardBody>
                    <MDBCardTitle>Users</MDBCardTitle>
                    <MDBCardText class="length">{" " + " " + users.length}</MDBCardText>
                    <MDBBtn href={"/users"}> View Users</MDBBtn>
                  </MDBCardBody>
                  <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
                </MDBCard>
              </MDBCard>
            </div>
          </div>

          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />

        </div>
      )}


      {user && user.role === "user" && (
        <div style={{ display: "flex" }}>

          <div class="adminStockDetails" >
            <MDBCard alignment='center'>
              <MDBCardHeader>Users Request Details</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Total Number of All Request Sent</MDBCardTitle>
                <MDBCardText>{" " + " " + requests.length}</MDBCardText>
                <MDBBtn href={"/userRequest"} style={{backgroundColor:'orangered'}}> All Request</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>Users Request Details</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>View All Request Rejected By Manager</MDBCardTitle>
                <MDBCardText>{" " + " " + requestM.length}</MDBCardText>
                <MDBBtn href={"/managerRequestRejected"}>View All</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>Approved Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Total Number of All Approved Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestA.length}</MDBCardText>
                <MDBBtn href={"/request"}> Approved Request</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

        </div>
      )}


      {user && user.role === "manager" && (
        <div style={{ display: "flex" }}>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Request Approved</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Manager</MDBCardTitle>
                <MDBCardText>{" " + " " + requestManager.length}</MDBCardText>
                <MDBBtn href={"/managerRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Request Approved</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Director</MDBCardTitle>
                <MDBCardText>{" " + " " + requestApproved.length}</MDBCardText>
                <MDBBtn href={"/managerApprovedRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Pending Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>All Pending</MDBCardTitle>
                <MDBCardText>{" " + " " + requestPending.length}</MDBCardText>
                <MDBBtn href={"/managerReqPending"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>
        
         
          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Pending Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Director</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorPending.length}</MDBCardText>
                <MDBBtn href={"/dirRequestPending"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Rejected Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Manager</MDBCardTitle>
                <MDBCardText>{" " + " " + requestManagerRejected.length}</MDBCardText>
                <MDBBtn href={"/managerReqRejected"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader class="header">Request Rejected</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Director</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorRejected.length}</MDBCardText>
                <MDBBtn href={"/dirRequestRejected"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


       
        </div>
      )}


      {user && user.role === "director" && (
        <div style={{ display: "flex" }}>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>All Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>All Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorAll.length}</MDBCardText>
                <MDBBtn href={"/directorRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>


          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>All Approved Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Approved</MDBCardTitle>
                <MDBCardText>{" " + " " + requestApproved.length}</MDBCardText>
                <MDBBtn href={"/directorAppRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>Pending Request</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Pending Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorPending.length}</MDBCardText>
                <MDBBtn href={"/directorPendingRequest"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>

          <div class="adminStockDetails">
            <MDBCard alignment='center'>
              <MDBCardHeader>All Rejected</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Rejected Request</MDBCardTitle>
                <MDBCardText>{" " + " " + requestDirectorRejected.length}</MDBCardText>
                <MDBBtn href={"/directorRequestRejectAll"}>View Details</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
            </MDBCard>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Welcome;

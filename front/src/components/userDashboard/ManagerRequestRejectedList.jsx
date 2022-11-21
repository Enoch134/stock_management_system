

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const ManagerRequestRejectedList = () => {
  const [request, setManagerRequestRejected] = useState([]);

  useEffect(() => {
    getManagerRequestRejected();
  }, []);

  const getManagerRequestRejected = async () => {
    const response = await axios.get("http://localhost:5000/managerRequestRejected");
    setManagerRequestRejected(response.data);
  };

  // const deleteRequest = async (requestId) => {
  //   await axios.delete(`http://localhost:5000/request/${requestId}`);
  //   getRequest();
  // };

  const lnk={
    backgroundColor:'black',
    textDecoration:'none',
    padding:'10px',
    color:'white',
    marginLeft:'10px',
    borderRadius:'10px',
    boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
   }

   const lnk1={
    backgroundColor:'black',
    textDecoration:'none',
    marginLeft:'10px',
    padding:'10px',
    color:'white',
    borderRadius:'10px',
    // width:'80%',
    boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
   }
   const tbl={
    width:'90%',
    fontSize:'13px',
    marginLeft:'auto',
    marginRight:'auto',
    // marginTop:'20px',
    boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
    marginTop:'20px',
   }
   const btn={
    // width:'40%',
   marginLeft:'200px',
  //  marginRight:'auto',
  // margin:'30px'
   }

   const txt={
    paddingLeft:'60px'

   }

  return (
    <div>
        <h1 className="title" style={txt}>Request</h1>
      
      <h2 className="subtitle" style={txt}>List of Request</h2>
      {/* <Link to="/request/add" style={lnk1}>
        Send New Request
      </Link> */}
      <div style={btn}>


        <NavLink to={"/request"} style={lnk}>
          Approved Request
        </NavLink>

        <NavLink to={"/managerRequestPending"} style={lnk1}>
          Manager Pending
        </NavLink>

        <NavLink to={"/directorRequestPending"} style={lnk1}>
          Director Pending
        </NavLink>

        <NavLink to={"/managerRequestRejected"} style={lnk1}>
          Manager Decline
        </NavLink>

        <NavLink to={"/directorRequestRejectedForUser"} style={lnk1}>
          Director Decline
        </NavLink>

      </div>
      <table className="table is-striped is-fullwidth" style={tbl}>
        <thead>
          <tr>
            <th>No</th>
            <th>Staff ID</th>
            <th>Staff Name</th>
            <th>Item Name</th>
            <th>Description</th>
            <th>Requested At</th>
            <th>Manager Action</th>
            <th>Director Action</th>
          </tr>
        </thead>
        <tbody>
          {request.map((request, index) => (
            <tr key={request.uid}>
              <td>{index + 1}</td>
              <td>{request.staffid}</td>
              <td>{request.staffName}</td>
              <td>{request.itemName}</td>
              <td>{request.descri}</td>
              <td>{request.requestAt}</td>
              <td style={{ backgroundColor: 'orange', color: 'White', fontWeight: 500, fontSize: '20px', }}>{request.managerApproved}</td>
              <td style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '20px', }}>{request.directorApproved}</td>

              <td>
                {/* <Link
                  to={`/request/edit/${request.uid}`}
                  className="button is-small is-info"
                  style={{backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '20px',}}
                >
                  Take Action
                </Link> */}
                {/* <button
                  onClick={() => deleteRequest(request.uid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerRequestRejectedList;

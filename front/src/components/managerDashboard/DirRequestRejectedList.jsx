

import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const DirRequestRejectedList = () => {
    const [request, setRequestDirectorReqRejected] = useState([]);
    const[query, setQuery] = useState([]);

    useEffect(() => {
        getRequestDirectorReqRejected();
    }, []);

    const getRequestDirectorReqRejected = async () => {
        const response = await axios.get("http://localhost:5000/requestDirectorReqRejected");
        setRequestDirectorReqRejected(response.data);
    };

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:5000/requestDirectorReqRejected/?q=${query}`);
          setRequestDirectorReqRejected(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
      }, [query]);
   
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
       marginLeft:'170px',
      //  marginRight:'auto',
    
       
          
       }
       const lnk={
        backgroundColor:'black',
        textDecoration:'none',
        padding:'10px',
        color:'white',
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
        width:'80%',
        boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
       }

       const txt ={
        paddingLeft:'60px',
       }
    return (
        <div>
            
                <h1 className="title" style={txt}>Director</h1>
                <div style={{display:'flex'}}>
                <h2 className="subtitle" style={txt}>Rejected Request</h2>
                  <input
                  className="search"
                  placeholder="Search..."
                  // FaSearch
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    marginLeft:'520px',
                    marginTop:'-30px',
                    borderRadius:'5px',
                    width:'25%',
                    height:'7vh',
                    backgroundColor:'#F6F5F5',
                    border:'none',
                    boxShadow: 'rgba(0, 0, 0, 0.0) 0px 25px 50px -12px',
                    
                }}
                />
                </div>
            <div style={btn}>


                <NavLink to={"/managerApprovedRequest"} style={lnk}>
                    Approved Request
                </NavLink>

                <NavLink to={"/managerReqPending"} style={lnk1}>
                    Manager Pending
                </NavLink>

                <NavLink to={"/dirRequestPending"} style={lnk1}>
                    Director Pending
                </NavLink>

                <NavLink to={"/managerReqRejected"} style={lnk1}>
                    Manager Decline
                </NavLink>

                <NavLink to={"/dirRequestRejected"} style={lnk1}>
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
                    {request.filter(request=>
                       request.staffid.toLowerCase().includes(query)||
                       request.staffName.toLowerCase().includes(query)||
                       request.itemName.toLowerCase().includes(query)||
                       request.requestAt.toLowerCase().includes(query)
                       )
                    
                       .map((request, index) => (
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

export default DirRequestRejectedList;

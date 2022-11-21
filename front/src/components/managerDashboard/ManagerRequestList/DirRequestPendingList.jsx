

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const DirectorRequestPendingList = () => {
    const [request, setDirectorRequestPending] = useState([]);

    useEffect(() => {
        getDirectorRequestPending();
    }, []);

    const getDirectorRequestPending = async () => {
        const response = await axios.get("http://localhost:5000/directorRequestPending");
        setDirectorRequestPending(response.data);
    };

    // const deleteRequest = async (requestId) => {
    //   await axios.delete(`http://localhost:5000/request/${requestId}`);
    //   getRequest();
    // };

    return (
        <div>
            <h1 className="title">Request</h1>
            <Link to="/request/add" className="button is-primary mb-2">
                Send New Request
            </Link>
            <h2 className="subtitle">List of Request</h2>

            <div style={{ width: "100%", padding: '25px' }} className="button is-primary mb-2">


                <NavLink to={"/request"} className="button is-primary mb-2">
                    Approved Request
                </NavLink>

                <NavLink to={"/managerRequestPending"} className="button is-primary mb-2">
                    Manager Pending
                </NavLink>

                <NavLink to={"/directorRequestPending"} className="button is-primary mb-2">
                    Director Pending
                </NavLink>

                <NavLink to={"/managerRequestRejected"} className="button is-primary mb-2">
                    Manager Decline
                </NavLink>

                <NavLink to={"/directorRequestRejected"} className="button is-primary mb-2">
                    Director Decline
                </NavLink>

            </div>
            <table className="table is-striped is-fullwidth">
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

export default DirectorRequestPendingList;

import React, { useState, useEffect,useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";

const AdminRequestList = () => {
    const [request, setAdminRequest] = useState([]);
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const requestPerPage = 10;
  
    const pagesVisited = pageNumber * requestPerPage;

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    useEffect(() => {
        getAdminRequest();
    }, []);

    const getAdminRequest = async () => {
        const response = await axios.get("http://localhost:5000/adminRequest");
        setAdminRequest(response.data);
    };

    const deleteRequest = async (requestId) => {
        await axios.delete(`http://localhost:5000/request/${requestId}`);
        getAdminRequest();
    };

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`http://localhost:5000/request/?q=${query}`);
        setAdminRequest(res.data);
      };
      if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

    let componentRef=useRef()

    const tbl={
      width:'90%',
      fontSize:'13px',
      marginLeft:'auto',
      marginRight:'auto',
      // marginTop:'20px',
      boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
      marginTop:'20px',
     }
     const pageCount = Math.ceil(request.length / requestPerPage);

     const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

    return (
        <div>
            {/* <h1 className="title">Request</h1>
      <Link to="/request/add" className="button is-primary mb-2">
        Send New Request
      </Link>
      <h2 className="subtitle">List of Request</h2>

      <div style={{ width: "100%",  padding: '25px'}} className="button is-primary mb-2">


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
 */}

      <div style={{display:'flex'}}>
       <h1 className="title" style={{paddingLeft:'50px'}}>Users Request</h1>

        <div className="app">
        <input
        className="search"
        placeholder="Search..."
        // FaSearch
        onChange={(e) => setQuery(e.target.value)}
        style={{
          marginLeft:'570px',
          // marginTop:'-100px',
          borderRadius:'5px',
          width:'30%',
          height:'60%',
          backgroundColor:'#F6F5F5',
          border:'none'
          
      }}
      />
     
      </div>
      </div>


            <table style={tbl}>
                <thead>
                    <tr style={{ boxShadow: "0px 0px 1px #000000", }}>
                        <th style={{ border: "solid 1px", boxShadow: "0px 0px 2px #000000" ,textAlign:'center'}}>No</th>
                        <th style={{ border: "solid 1px", boxShadow: "0px 0px 2px #000000",textAlign:'center' }}>Staff ID</th>
                        <th style={{ border: "solid 1px", boxShadow: "0px 0px 2px #000000",textAlign:'center' }}>Staff Name</th>
                        <th style={{ border: "solid 1px", boxShadow: "0px 0px 2px #000000",textAlign:'center' }}>Item Name</th>
                        <th style={{ border: "solid 1px", boxShadow: "0px 0px 2px #000000",textAlign:'center' }}>Description</th>
                        <th style={{ border: "solid 1px", boxShadow: "0px 0px 2px #000000",textAlign:'center' }}>Requested At</th>
                        <th style={{ border: "solid 1px", boxShadow: "0px 0px 2px #000000",textAlign:'center' }}>Manager Action</th>
                        <th style={{ border: "solid 1px", boxShadow: "0px 0px 2px #000000",textAlign:'center' }}>Director Action</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {request.filter(request=>
            request.staffid.toLowerCase().includes(query)||
            request.staffName.toLowerCase().includes(query)||
            request.itemName.toLowerCase().includes(query)||
            request.requestAt.toLowerCase().includes(query)
            )
                    .slice(pagesVisited, pagesVisited + requestPerPage)
                    .map((request, index) => (
                        <tr key={request.uid}>
                            <td style={{textAlign:'center' }}>{index + 1}</td>
                            <td style={{textAlign:'center' }}>{request.staffid}</td>
                            <td style={{textAlign:'center' }}>{request.staffName}</td>
                            <td style={{textAlign:'center' }}>{request.itemName}</td>
                            <td style={{textAlign:'center' }}>{request.descri}</td>
                            <td style={{textAlign:'center' }}>{request.requestAt}</td>
                            <td style={{ backgroundColor: 'orange', color: 'White', fontWeight: 500, fontSize: '21px',textAlign:'center' }}>{request.managerApproved}</td>
                            <td style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '21px',textAlign:'center' }}>{request.directorApproved}</td>

                            <td>
                                {/* <Link
                  to={`/request/edit/${request.uid}`}
                  className="button is-small is-info"
                  style={{backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '10px',}}
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

            <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns justify-content-center pagination"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn "}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        breakLinkClassName={"page-link"}
        // containerClassName={"pagination "}
        style={{
          textDecoration:'none'
        }}
      />
        </div>
    );
};

export default AdminRequestList;

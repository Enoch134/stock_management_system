

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";


const DirectorRequestList = () => {
  const [request, setDirectorRequestAll] = useState([]);
  const [query, setQuery] = useState([])
  const [pageNumber, setPageNumber] = useState(0);
  const requestPerPage = 10;

  const pagesVisited = pageNumber * requestPerPage;


  useEffect(() => {
    getDirectorRequestAll();
  }, []);

  const getDirectorRequestAll = async () => {
    const response = await axios.get("http://localhost:5000/directorRequestAll");
    setDirectorRequestAll(response.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/directorRequestAll/?q=${query}`);
      setDirectorRequestAll(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  const pageCount = Math.ceil(request.length / requestPerPage);

  const changePage = ({ selected }) => {
   setPageNumber(selected);
 };
 
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
    width:'40%',
   marginLeft:'auto',
   marginRight:'auto',

   
      
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
    marginLeft:'30px',
    padding:'10px',
    color:'white',
    borderRadius:'10px',
    width:'80%',
    boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
   }
   const txt={
    paddingLeft:'60px',
    paddingTop:'-30px'
   }

  return (
    <div>
      <h1 className="title" style={txt}>Request</h1>
      <div style={{display:'flex'}}>
      <h2 className="subtitle" style={txt}>List of Request</h2>
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


        <NavLink to={"/directorPendingRequest"}style={lnk}>
          Pending
        </NavLink>


        <NavLink to={"/directorRequestRejectAll"} style={lnk1}>
          Director Decline
        </NavLink>



        <NavLink to={"/directorAppRequest"} style={lnk1}>
          Approved Request
        </NavLink>

      </div>

      <table className="table is-striped is-fullwidth" style={tbl}>
        <thead>
          <tr>
            <th>No</th>
            <th>Staff ID</th>
            <th>Staff Name</th>
            <th>Item Name</th>
            <th>Requested At</th>
            <th>Manager Approved</th>
            <th>Approve/Reject</th>
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
              <td>{index + 1}</td>
              <td>{request.staffid}</td>
              <td>{request.staffName}</td>
              <td>{request.itemName}</td>
              <td>{request.requestAt}</td>
              <td style={{ backgroundColor: 'orange', color: 'White', fontWeight: 500, fontSize: '20px', }}>{request.managerApproved}</td>
              <td style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '20px', }}>{request.directorApproved}</td>

              {/* <td>
                <Link
                  to={`/directorRequest/edit/${request.uid}`}
                  className="button is-small is-info"
                  id="disable"
                  style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '20px', }}
                >
                  Take Action
                </Link>

              </td> */}


            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns "}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn "}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        breakLinkClassName={"page-link"}
        marginPagesDisplayed={4}
        pageRangeDisplayed={4}
        // containerClassName={"pagination "}
        />
    </div>
  );
};

export default DirectorRequestList;

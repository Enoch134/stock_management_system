

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

const ManagerRequestList = () => {
  const [request, setManagerRequestAll] = useState([]);
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const requestPerPage = 10;

  const pagesVisited = pageNumber * requestPerPage;


  useEffect(() => {
    getManagerRequestAll();
  }, []);

  const getManagerRequestAll = async () => {
    const response = await axios.get("http://localhost:5000/managerRequestAll");
    setManagerRequestAll(response.data);
  };

  const deleteRequest = async (requestId) => {
    await axios.delete(`http://localhost:5000/request/${requestId}`);
    getManagerRequestAll();
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/managerRequestAll/?q=${query}`);
      setManagerRequestAll(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  
  const pageCount = Math.ceil(request.length / requestPerPage);

  const changePage = ({ selected }) => {
   setPageNumber(selected);
 };

  const tbl={
    width:'80%',
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
   const txt={
    paddingLeft:'100px',
   }

  return (
    <div style={{marginTop:'20px'}}>
      <h1 className="title" style={txt}>Request</h1>
      <div style={{display:'flex'}}>
      <h2 className="subtitle" style={txt}>List of Request</h2>
        <input
        className="search"
        placeholder="Search..."
        // FaSearch
        onChange={(e) => setQuery(e.target.value)}
        style={{
          marginLeft:'460px',
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
      
     <table className="table is-striped is-fullwidth" style={tbl}>
        <thead>
          <tr>
            <th>No</th>
            <th>Staff ID</th>
            <th>Staff Name</th>
            <th>Item Name</th>
            <th>Requested At</th>
            <th>Status</th>
            
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
              {/* <td  style={{backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '20px', }}>{request.reject}</td> */}




            </tr>
          ))}
        </tbody>
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
        style={{
          textDecoration:'none'
        }}/>
      </table>
     
    </div>
  );
};

export default ManagerRequestList;

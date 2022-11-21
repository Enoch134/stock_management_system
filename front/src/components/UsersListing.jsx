import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Modal} from 'react-bootstrap';
import ReactModal from 'react-modal';

const UsersListing =() =>{
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getUsers();
      }, []);
    
      const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      };

    return(
        <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
        <div class="row ">
         
         <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
               <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
              
              </form>
            </div>    
            </div>  
            <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"orange"}}><h2><b>Users List</b></h2></div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="warning" onClick={handleShow}>
              Add New Student
            </Button>
           </div>
      <div class="row">
      <div class="table-responsive " >
       <table class="table table-striped table-hover table-bordered">
          <thead>
          <tr>
              <th>No</th>
              <th>Staff ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              
          {users.map((user, index) => (
            <tr key={user.uid}>
              <td>{index + 1}</td>
              <td>{user.staffid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uid}`}
                  className="button is-small is-info"
                  style={{backgroundColor:'#EF5B0C', textDecoration:'none'}}
                >
                  Edit
                </Link>
                </td>
            </tr>
            ))}   
          </tbody>
        </table>
        </div>   
        </div> 
        
       
        </div>  
        </div> 
         
        </div>  
         
   )
}

export default UsersListing;
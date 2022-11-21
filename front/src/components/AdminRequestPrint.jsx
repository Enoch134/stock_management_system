import React, { useState, useEffect ,useRef} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";
import orange from "../assets/orange.jpg"


const AdminRequestPrint = () => {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

 

  const tbl={
    width:'90%',
    fontSize:'13px',
    marginLeft:'auto',
    marginRight:'auto',
    // marginTop:'20px',
    boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
   }
   const txtt={
    paddingLeft:'60px',
    // paddingTop:'-100px',
   }

   const txttt={
    // paddingLeft:'60px',
    // paddingTop:'-100px',
    textAlign:'center',
   }
   const log={
    marginLeft:'50px',
    marginTop:'30px',
    width:'7%'
   }

   let componentRef=useRef()

  return (
    <div>
         <ReactToPrint
           trigger={() => <Button
           style={{
            color:'black',
            marginLeft:'1000px',
            backgroundColor:'#EF5B0C'
           }}
           >
            Print
           </Button>}
           content={() => componentRef}
            />

        <div ref={(el) => (componentRef = el)} >
        <img src={orange} alt="logo" style={log}/>
       <p className="title" style={txttt}>OSL</p>
       <h5 className="title" style={txttt}>Orange Stock Management System</h5>
        <h4 className="subtitle" style={txttt}>List of Users</h4>
     
     
     
      <MDBTable responsive style={tbl}>

        <MDBTableHead >
           <tr>
              <th>No</th>
              <th>Staff ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
             
            </tr>
      </MDBTableHead>
      <MDBTableBody>
          {users.map((user, index) => (
            <tr key={user.uid}>
              <td>{index + 1}</td>
              <td>{user.staffid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            
            </tr>
          ))}
    </MDBTableBody>
    </MDBTable>

    
</div>
</div>
  );
};

export default AdminRequestPrint;



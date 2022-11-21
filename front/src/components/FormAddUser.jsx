import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddUsers.css";
import Orangelogo from "../assets/Orangelogo.png"

const FormAddUser = () => {
  const [staffid, setStaffid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        staffid: staffid,
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const frmone={
    width:'70%',
    height:'100%',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'55px'

  }
  const txt={
    textAlign:'center',
    color:'white'
  }
  const txtt={
    textAlign:'center',
    color:'white'

  }
  return (
    <div style={{ 
      backgroundImage: `url(${Orangelogo})`,
       width:'auto',
        height:'100vh',
        marginTop:'-55px',
        marginBottom:'-100px',
        // backgroundRepeat: 'noRepeat',
        // backgroundSize: 'cover',
         }} >
      
      <div >
        <div className="card-content">
          <div className="content" style={frmone} >
            <form onSubmit={saveUser}  class='frm'>
              <h1 className="title"style={txtt}>Users</h1>
             <h2 className="subtitle" style={txtt}>Add New User</h2>
              <p className="has-text-centered">{msg}</p>

              <div style={{display:'flex', marginLeft:'55px'}}>
              <div className="field" style={{ maxWidth: "300px" }}>
                <label className="label" style={txt}>Staff ID</label>
                <div className="control">
                  <input
                    type="text"
                   className="input"
                    value={staffid}
                    onChange={(e) => setStaffid(e.target.value)}
                    placeholder="Staff Id"
                    style={{
                      width: "300px",
                      borderRadius:'8px',
                      // marginLeft:'70px',
                    }}
                  />
                </div>
                </div>
              
                <div className="field" style={{ maxWidth: "300px",marginLeft:'30px' }}>
                <label className="label" style={txt}>Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    style={{
                      width: "300px",
                      borderRadius:'8px',
                    }}
                  />
                </div>
              </div>
              </div>
              
           

              <div style={{display:'flex',marginLeft:'55px'}}>
             
              <div className="field" style={{ maxWidth: "300px" }}>
                <label className="label" style={txt}>Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                    style={{
                      width: "300px",
                      borderRadius:'8px',
                    }}
                  />
                </div>
              </div>

              <div className="field" style={{ maxWidth: "300px" ,marginLeft:'30px'}}>
                <label className="label" style={txt}>Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="******"
                    style={{
                      width: "300px",
                      borderRadius:'8px',
                    }}
                  />
                </div>
              </div>
              </div>

              <div style={{display:'flex',marginLeft:'55px'}}>
              <div className="field" style={{ maxWidth: "300px" }}>
                <label className="label" style={txt}>Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{
                      width: "300px",
                      borderRadius:'8px',
                    }}
                  />
                </div>
              </div>
              <div className="field" style={{ maxWidth: "300px",marginLeft:'30px' }}>
                <label className="label" style={txt}>Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      style={{
                        width: "300px",
                        borderRadius:'8px'
                      }}
                    >
                      <option value="">Select</option>
                      <option value="admin">Admin</option>
                      <option value="director">Director</option>
                      <option value="manager">Manager</option>
                      <option value="user">Users</option>
                    </select>
                  </div>
                </div>
              </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success"
                  style={{
                    backgroundColor:'black',
                    color:'white',
                    width:'40%',
                    borderRadius:'8px',
                    marginLeft:'220px',
                    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                  }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;

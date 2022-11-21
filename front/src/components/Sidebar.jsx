import React,{useEffect,useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut, IoMan, IoPeopleCircle, IoGitBranchSharp, IoAddCircleOutline, IoAccessibilityOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import axios from "axios";
import { Notifications } from 'react-push-notification';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const sidebarr = {
    marginLeft: 12,
    fontSize: 18,

  }
  const sidebaar = {
    marginLeft: 12,
    marginTop: 18,
    fontSize: 18,
    color: "white",
  }


  const list = {
    listStyle: "none",
    fontSize: 16,
    fontWeight: 600,
    textDecoration: "none"
  }
  const stylee = {
    listStyle: "none",
    fontSize: 13,
    fontWeight: 600,
    color: "#EF5B0C",
    textDecoration: "none"
  }

  const sidebad = {
    position: 'fixed',
    backgroundColor: "black",
    height: "100vh",
    boxShadow: "0px 0px 10px 0px #000000",
    borderRadius: "0px 80px 0px 0px"
  }

  return (
    <div className="header">
      <aside className="menu pl-2 has-shadow" style={sidebad}>
     

        <div>
          {/* Admin/Super Admin Role Start here*/}
          {user && user.role === "admin" && (
            <div>
              <p className="menu-label" style={sidebaar}>Admin</p>
              <strong style={{color:'#EF5B0C'}}>{user && user.name}</strong>
              <ul className="menu-list">

                <li style={list}>
                
                  <NavLink to={"/users"} style={stylee}>
                  <strong style={{color:'white'}}>{users.length}</strong><IoPeopleCircle style={{ fontSize: "30px" }} /> View Users
                  </NavLink>
               
                </li>

                

              </ul>
              
              <ul className="menu-list">

                <li>
                  <NavLink to={"/adminRequest"} style={stylee}>
                  <strong style={{color:'white'}}>{request.length}</strong><IoPricetag style={{ fontSize: "30px" }}  /> Request 
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/adminWelcome"} style={stylee}>
                  <strong style={{color:'white'}}>{request.length}</strong><IoPricetag style={{ fontSize: "30px" }}  /> Dashboard 
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/collapsibleExample"} style={stylee}>
                  <strong style={{color:'white'}}>{request.length}</strong><IoPricetag style={{ fontSize: "30px" }}  /> sample 
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/side"} style={stylee}>
                  <strong style={{color:'white'}}>{request.length}</strong><IoPricetag style={{ fontSize: "30px" }}  /> Side 
                  </NavLink>
                </li>

                <li>
                  
                  <NavLink to={"/allStock"} style={stylee}>
                  <strong style={{color:'white'}}>{allStock.length}</strong><IoGitBranchSharp style={{ fontSize: "20px" }} /> Stock
                  </NavLink>
                </li>
                {/* <button type="button" class="btn btn-primary">
                Notifications <span class="badge badge-light">4</span>
               </button> */}

                <li>
                  <NavLink to={"/stockInCreate"} style={stylee}>
                    <IoAddCircleOutline style={{ fontSize: "30px" }} /> Add Stock
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to={"/home"} style={stylee}>
                    <IoAddCircleOutline style={{ fontSize: "30px" }} /> Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/listing"} style={stylee}>
                    <IoAddCircleOutline style={{ fontSize: "30px" }} /> AddUsers
                  </NavLink>
                </li>

              </ul>
            </div>
          )}
          {/* Admin/Super Admin  Role End here*/}


          {/* Director  Role Start here*/}
          {user && user.role === "director" && (
            <div>
              <p className="menu-label">Director</p>

              {/* <Notifications /> */}

              <li style={{textType:'none'}}>
                <NavLink to={"/directorRequest"} style={stylee}>
                <strong style={{color:'white'}}>{requestDirectorAll.length}</strong> <IoAccessibilityOutline style={{ fontSize: "30px" }} /> View Request
                </NavLink>
              </li>

              <li>
                <NavLink to={"/directorDash"} style={stylee}>
                 <IoAccessibilityOutline style={{ fontSize: "30px" }} /> Dashboard
                </NavLink>
              </li>

            </div>
          )}
          {/* Director Role end here*/}


          {/* Manager Role  Start here*/}
          {user && user.role === "manager" && (
            <div>
              <p className="menu-label">Manager</p>
              <ul className="menu-list">
                <li>
                  <NavLink to={"/managerRequest"} style={stylee}>
                  <strong style={{color:'white'}}>{requestManager.length}</strong><IoPerson style={{ fontSize: "30px" }} /> View Request
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/wel"} style={stylee}>
                  <strong style={{color:'white'}}>{requestManager.length}</strong><IoPerson style={{ fontSize: "30px" }} /> Dashboard
                  </NavLink>
                </li>

              </ul>
            </div>
          )}
          {/* Manage Role end Here*/}

          {/* User Role  Start here*/}
          {user && user.role === "user" && (
            <div>
              <p className="menu-label">Users</p>
              <ul className="menu-list">
                <li>
                  <NavLink to={"/userRequest"} style={stylee}>
                    <IoPerson style={{ fontSize: "30px" }} /> My Request
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          {/* User Role End here*/}
          <p className="menu-label" style={sidebaar}>Settings</p>
          <ul className="menu-list">
            <li>
              <button onClick={logout} className="button is-white" style={{backgroundColor:'#EF5B0C'}}>
                <IoLogOut style={{ fontSize: "30px" }} /> Logout
              </button>
            </li>
          </ul>
        </div>


      </aside>
    </div>
  );
};

export default Sidebar;

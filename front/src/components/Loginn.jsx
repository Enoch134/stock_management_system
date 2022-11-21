import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import orange from '../assets/orange.jpg'
import "./Login.css"
import { Button, Modal } from 'react-bootstrap';
import orangesl from "../assets/orangesl.webp"

const Login = () => {
  const [users, setUsers] = useState("");
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }


    // if (user && user.role === "users" || isSuccess) {
    //   navigate("/userDashboard");
    // }
    // if (user && user.role === "admin" || isSuccess) {
    //   navigate("/dashboard");
    // }
    // const getUsers = async (text) => {
    //   const response = await axios.get("http://localhost:5000/users");
    //   setUsers(response.data);
    // };

    

  //   const onChangeHandler =(text) => {
  //     let matches =[]
  //     if(text.lenght>0){
  //       matches = users.filter(user=>{
  //         const regex= new RegExp(`${text}`,"gi")
  //         return user.name.match(regex)
  //       })
  //     }
  //     setSuggestions(matches)
  //     setText()
  // }


    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
 const log={
 
 }
  return (
    <div class="loginPage">
      <div style={{dispplay:'flex'}}>
      <h4 style={{fontSize:'25px', paddingLeft:'430px', color:'#EF5B0C'}}>Orange Stock Management System</h4>
      <img src={orange} alt="logo" class="log" style={{width:'5%', marginTop:'-10px'}}/>
      
     </div>
      
    <section className="hero is-fullheight is-fullwidth" >
    
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4" >
              <form onSubmit={Auth} className="box" class="formOne" 
              style={{
                // backgroundImage: `url(${orangesl})`,
                marginTop:'-220px',
                 width:'auto',
                 height:'70vh',
                 border:'none',
                //  opacity:0.5
             
                }}
                >
                {isError && <p className="has-text-centered">{message}</p>}
                <h1 className="title is-2" class="lab">Sign In</h1>
                <div className="field">
                  <label className="label" class="lab">Email</label>
                  <div className="control">
                    <input

                      type="text"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      class="inputField"
                      
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" class="lab">Password</label>
                  <div className="control">
                    <input
                      type="password"

                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                      class="inputField"

                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button  is-fullwidth"
                    class="btnField"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
                <Button  onClick={handleShow} style={{backgroundColor:'#EF5B0C'}}>
                  Forget password
                 </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <div className="container">
      {/* <h1>React Bootstrap Modal Example - ItSolutionStuff.com</h1> */}
   
      
   
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h4 style={{color:'orange', textAlign:'center'}}>Forget Password</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> If you want to make changes to a password or you don't remember your password, you're recommended to contact the ADMIN</p>
        </Modal.Body>
        
      </Modal>
    </div>
    </div>
    </div>
  );
};

export default Login;

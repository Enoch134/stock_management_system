import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";



const FormEditRequest = () => {
 
  
  const [managerApproved, setManagerApproved] = useState("");
 
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();


  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getRequestById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/request/${id}`
        );
        
        setManagerApproved(response.data.managerApproved);
   


      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getRequestById();
  }, [id]);

  const updateManagerApproved = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/Request/${id}`, {
       
       
        managerApproved: managerApproved,
        
      });
      navigate("/managerRequest");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };


  
 
 const frm={
  width:'30%',
  marginLeft:'auto',
  marginRight:'auto',
 }
 const sel={
  marginLeft:'28%',
  color:'#4C0033'
 
}
const btnn={
  marginLeft:'33%',
  backgroundColor:'black',
  color:'white',
 
 }
 
  return (


    <div >
      <h1 className="title" style={{textAlign:'center'}}>Respond To Request</h1>
      <div className="card is-shadowless" style={frm}>
        <div className="card-content">
          <div className="content">
          
            <form onSubmit={updateManagerApproved} >

              <p className="has-text-centered" style={{ color: 'red' }}>{msg}</p>

              <div className="field">
                <label className="label" style={{textAlign:'center'}}>Director Action</label>
                <div className="control">
                  <select
                    value={managerApproved}
                    onChange={(e) => setManagerApproved(e.target.value)}
                    style={sel}
                  >
                    <option value="">Select</option>
                    <option style={{color:'green'}} value="Approved" >Approved</option>
                    <option style={{color:'red'}} value="Rejected"> Decline/Reject</option>
                  </select>
                </div>
              </div>


              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success" style={btnn}>
                    Respond
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

export default FormEditRequest;

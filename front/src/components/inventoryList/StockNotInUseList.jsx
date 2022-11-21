import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Orangelogo from "../../assets/Orangelogo.png";
import './StockNot.css';

const StockNotInUseList = () => {
     
  const [stock, setStock] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [text, setText] = useState("");


    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes();
    const today = current_time + "  " + currentDate;
    const inUsed = "In Use";

    const [assignedTo, setAssignedTo] = useState([]);
    const [staffId, setStaffId] = useState([]);
    const [department, setDepartment] = useState([]);
    const [giver, setGiver] = useState([]);
    const [dateGiven, setDateGiven] = useState(`${today}`);
    console.log(today)
    const [status, setStatus] = useState(`${inUsed}`);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getStockById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/stock/${id}`);
                setAssignedTo(response.data.assignedTo);
                setStaffId(response.data.staffId);
                setDepartment(response.data.department);
                setGiver(response.data.giver);
                setDateGiven(response.data`${today}`);
                setStatus(response.data`${inUsed}`);
                console.log(status);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getStockById();
    }, [id]);

    const updateStock = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/stock/${id}`, {
                assignedTo: assignedTo,
                staffId: staffId,
                department: department,
                giver: giver,
                dateGiven: dateGiven,
                status: status,
            });
            navigate("/stockIn");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    useEffect(() => {
        const fetchData = async (text) => {
          const res = await axios.get(`http://localhost:5000/stock/?q=${query}`);
          setStock(res.data);
          
        };
        if (query.length === 0 || query.length > 2)
         fetchData();
      }, [query]);

    const onSuggestionHandler =(query)=>{
        setQuery(query)
         setSuggestions([])
     }
   
     const onChangeHandler =(query)=>{
       let matches = stock.filter((stock)=> {
           const regex= new RegExp(`${query}`,"gi")
           return stock.assignedTo.match(regex)||
           stock.staffId.match(regex)||
           stock.department.match(regex)||
           stock.giver.match(regex)||
           stock.dateGiven.match(regex)||
           stock.status.match(regex)
       })
       setSuggestions(matches) 
       setQuery(query)
              
   }

    return (
        <div style={{ backgroundImage: `url(${Orangelogo})`, width:'auto', height:'100vh',marginTop:'-55px' }}>
            <div><p className="has-text-centered" style={{ color: "red", fontSize: "40px" }}>{msg}</p></div>
            <div  >
                <div className="card-content">
                    <div className="content" >
                        <form onSubmit={updateStock} enctype="multipart/form-data" method="post" class="formOne" >

                           <h5 style={{textAlign:'center', color:' white', fontSize:'25px'}}>Assigned Item Form</h5>

                            {/* cost and assigned to*/}
                            <div style={{ display: "flex" }}>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "60px" }}>
                                    <label className="label" class="ten">Assigned To</label>
                                    <div className="control">
                                        <div className="control">

                                            <input
                                                style={{ width: "300px" }}
                                                type='text'
                                                className="input"
                                                value={assignedTo}

                                                onChange={(e) => setAssignedTo(e.target.value)}
                                                placeholder="Cost Le"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label" class="ten">Staff Id</label>
                                    <div className="control">
                                        <input
                                            style={{ width: "300px" }}
                                            type="text"
                                            className="input"
                                            value={staffId}
                                            onChange={(e) => setStaffId(e.target.value)}
                                            placeholder="Staff Id"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* cost and assigned to */}




                            {/* staff Id and Department */}


                            <div style={{ display: "flex" }}>

                                


                                <div className="field" style={{ maxWidth: "300px", marginLeft: "60px" }}>
                                    <label className="label" class="ten">Department</label>
                                    <div className="control">
                                        <input
                                            style={{ width: "300px" }}
                                            type="text"
                                            className="input"
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
                                            placeholder="Purchase Date"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label" class="ten">Giver</label>
                                    <div className="control">
                                        <input
                                            style={{ width: "300px" }}
                                            type="text"

                                            className="input"
                                            value={giver}
                                            onChange={(e) => setGiver(e.target.value)}
                                            placeholder="Giver Name"
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* staff Id and Department */}





                            {/* Giver and Date Given */}
                            <div style={{ display: "flex" }}>
                                



                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    {/* <label className="label">Status</label> */}
                                    <div className="control">
                                        <input
                                            // type=''
                                            hidden
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={`${inUsed}`}
                                            onChange={(e) => setStatus(e.target.value)}
                                        // placeholder="Purchase Date"
                                        />
                                    </div>
                                </div>
                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    {/* <label className="label">Date Given</label> */}
                                    <div className="control">
                                    <input
                                            style={{ width: "300px" }}
                                            // type="text"
                                            hidden
                                            className="input"
                                            value={today}
                                            onChange={(e) => setDateGiven(e.target.value)}
                                            placeholder="Purchase Date"
                                        />
                                    </div>
                                </div>

                            </div>
                            {/* Giver and Date Given */}






                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success" style={{
                                        width:'40%', marginLeft:'220px', 
                                        
                                        backgroundColor:'#000000',
                                        }}>
                                        Assigned To
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default StockNotInUseList;

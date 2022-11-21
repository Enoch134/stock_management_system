import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";

const AllStockDetails = () => {
    // const [stockCode, setStockCode] = useState([]);
    // const [stockName, setStockName] = useState([]);
    const [description, setDescription] = useState([]);
    const [category, setCategory] = useState([]);
    // const [stockColor, setStockColor] = useState([]);
    // const [stockBrand, setStockBrand] = useState([]);
    const [purchaseDate, setPurchaseDate] = useState([]);
    const [purchaseFrom, setPurchaseFrom] = useState([]);
    const [cost, setCost] = useState([]);
    const [assignedTo, setAssignedTo] = useState([]);
    // const [staffId, setStaffId] = useState([]);
    // const [department, setDepartment] = useState([]);
    const [giver, setGiver] = useState([]);
    // const [url, setUrl] = useState([]);
    const [dateGiven, setDateGiven] = useState([]);
    const [status, setStatus] = useState([]);

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getStockById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/stock/${id}`);
                setDescription(response.data.description);
                setCategory(response.data.category);
                setPurchaseDate(response.data.purchaseDate);
                setPurchaseFrom(response.data.purchaseFrom);
                setCost(response.data.cost);
                setAssignedTo(response.data.assignedTo);
                setGiver(response.data.giver);
                setDateGiven(response.data.dateGiven);
                setStatus(response.data.status);


            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getStockById();
    }, [id]);
   

    let componentRef=useRef()

    const cent={
        // textAlign:'center'
        paddingLeft:'150px',
        marginTop:'30px',
    }
    return (
       <div>
        
         <ReactToPrint
           trigger={() => <Button
           style={{
            color:'black',
            marginLeft:'1000px',
            backgroundColor:'orange'
           }}
           >
            Print
           </Button>}
           content={() => componentRef}
            />
            <div ref={(el) => (componentRef = el)} >
          <div >
             <div className="card-content">
          
                <h3 style={{ textAlign: "center" }}>Orange Sierra Leone</h3>
                <h4 style={{ textAlign: "center" }}>Stock Management System</h4>   
                <h2 style={{ textAlign: "center" }}>Stock Details</h2>
                 <div>
                     <div>
                        <div>
                            <h4 ><span style={cent}>Stock Name:</span> {" " + " " + description}</h4>
                        </div>
                     </div>

                     <div>
                        <div>
                            <h4 style={cent}><span>Stock Name:</span> {" " + " " + category}</h4>
                        </div>
                     </div>

                     <div>
                        <div>
                            <h4 style={cent}><span>Stock Name:</span> {" " + " " + purchaseDate}</h4>
                        </div>
                     </div>

                     <div>
                        <div>
                            <h4 style={cent}><span>Stock Name:</span> {" " + " " + purchaseFrom}</h4>
                        </div>
                     </div>

                     <div>
                        <div>
                            <h4 style={cent} ><span>Stock Name:</span> {" " + " " + cost}</h4>
                        </div>
                     </div>

                     <div>
                        <div>
                            <h4 style={cent} ><span>Stock Name:</span> {" " + " " + assignedTo}</h4>
                        </div>
                     </div>

                     <div>
                        <div>
                            <h4 style={cent}><span>Stock Name:</span> {" " + " " + giver}</h4>
                        </div>
                     </div>

                     <div>
                        <div>
                            <h4 style={cent} ><span>Stock Name:</span> {" " + " " + dateGiven}</h4>
                        </div>
                     </div>

                     <div>
                        <div>
                            <h4 style={cent}><span>Stock Name:</span> {" " + " " + status}</h4>
                        </div>
                     </div>
                 </div>
             </div>
          </div>
          </div>
       </div>

     );
};

export default AllStockDetails;

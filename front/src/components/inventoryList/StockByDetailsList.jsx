import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import orange from "../../assets/orange.jpg"
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";

const StockByDetailsList = () => {
    const [stockCode, setStockCode] = useState([]);
    const [stockName, setStockName] = useState([]);
    const [description, setDescription] = useState([]);
    const [category, setCategory] = useState([]);
    const [stockColor, setStockColor] = useState([]);
    const [stockBrand, setStockBrand] = useState([]);
    const [purchaseDate, setPurchaseDate] = useState([]);
    const [purchaseFrom, setPurchaseFrom] = useState([]);
    const [cost, setCost] = useState([]);
    const [assignedTo, setAssignedTo] = useState([]);
    const [staffId, setStaffId] = useState([]);
    const [department, setDepartment] = useState([]);
    const [giver, setGiver] = useState([]);
    const [url, setUrl] = useState([]);
    const [dateGiven, setDateGiven] = useState([]);

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getStockById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/stock/${id}`);
                setStockCode(response.data.stockCode);
                setStockName(response.data.stockName);
                setDescription(response.data.description);
                setCategory(response.data.category);
                setStockColor(response.data.stockColor);
                setStockBrand(response.data.stockBrand);
                setPurchaseDate(response.data.purchaseDate);
                setPurchaseFrom(response.data.purchaseFrom);
                setCost(response.data.cost);
                setAssignedTo(response.data.assignedTo);
                setStaffId(response.data.staffId);
                setDepartment(response.data.department);
                setGiver(response.data.giver);
                setUrl(response.data.url);
                setDateGiven(response.data.dateGiven);


            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getStockById();
    }, [id]);

    let componentRef=useRef()

    const itemStyle = {
        // backgroundColor: "#FAF7F0",
        // boxShadow: '1px 2px 9px #F4AAB9',
        padding: 50,
    }

    const headingFour = {
        fontSize: 15,
        paddingRight: 20,
        fontWeight: 900,

    }

    const div = {
        // boxShadow: '1px 2px 9px #F4AAB9',
        padding: 10,
        margin: 8,
        borderRadius: 18
    }
    const flex = {
        display: "flex",
        // alignItems: "center",
    }
    const log={
        width:'7%',
        height:'7%',
        // marginLeft:'350px',
        // marginTop:'-20px',
        alignSelf: 'center',
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
          
            <div><p className="has-text-centered" style={{ color: "red", fontSize: "40px" }}>{msg}</p></div>
            <div ref={(el) => (componentRef = el)} >
            <div className="card is-shadowless" style={{ 
                alignItems: "center", 
                borderRadius: "20px",
                 width:'80%',
                 marginLeft:'auto',
                 marginRight:'auto',
                  }} >
                <div className="card-content">

                    <div className="card-content">
                        <img src={orange} alt="logo" style={log}/>
                        <h3 style={{ textAlign: "center" }}>Orange Sierra Leone</h3>
                        <h4 style={{ textAlign: "center" }}>Stock Management System</h4>

                        <h2 style={{ textAlign: "center" }}>Stock Details</h2>




                        <div style={itemStyle}>

                            <div className="card-image" style={div}>
                                <figure className="image is-4by3">
                                    {/* <img src="http://localhost:5000/images/1a9cfdffff56ab3796f25b7cd4993bf5.jpg" alt="There is Image here" /> */}
                                    <img src={url} alt="Image" />
                                    {/* "http://localhost:5000/images/1a9cfdffff56ab3796f25b7cd4993bf5.jpg" */}
                                </figure>
                            </div>


                            <div style={{display:'flex'}}>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Code:</span> {" " + " " + stockCode}</h4>
                                </div>
                                <hr />
                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Name:</span> {" " + " " + stockName}</h4>
                                </div>
                                </div>
                            <div style={{display:'flex'}}>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Name:</span> {" " + " " + stockName}</h4>
                                </div>
                            
                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Description:</span> {" " + " " + description}</h4>
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Stock Brand:</span> {" " + " " + stockBrand}</h4>
                                </div>
                              
                                <div style={div}>
                                    <h4 style={headingFour}><span>Stock Color:</span> {" " + " " + stockColor}</h4>
                                </div>
                            </div>

                            <div style={{display:'flex'}}>
                            
                                <div style={div}>
                                    <h4 style={headingFour}><span>Purchase Date:</span> {" " + " " + purchaseDate}</h4>
                                </div>

                                <div style={div}>
                                    <h4 style={headingFour}><span>Purchase From:</span> {" " + " " + purchaseFrom}</h4>
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Purchase Date:</span> {" " + " " + purchaseDate}</h4>
                                </div>
                            </div>


                            
                                <div style={div}>
                                    <h4 style={headingFour}><span>Assigner:</span> {" " + " " + giver}</h4>
                                </div>
                            </div>
                                <div style={div}>
                                    <h4 style={headingFour}><span>Assign Date:</span> {" " + " " + dateGiven}</h4>
                                </div>
                            </div>




                        </div>






                    </div>




                </div>
                </div>
           
          
    );
};

export default StockByDetailsList;

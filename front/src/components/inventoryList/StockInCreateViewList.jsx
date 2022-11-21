import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap'
// import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
const StockInCreateViewList = () => {
    const [stockNotInUse, setStockNotInUse,] = useState([]);
    useEffect(() => {
        getStockNotInUse();
    }, []);

    const getStockNotInUse = async () => {
        const response = await axios.get("http://localhost:5000/stockNotInUse");
        setStockNotInUse(response.data);
    };

    const image = {
        boxShadow: '1px 2px 9px #F4AAB9',
    }

    return (
        <div className="container mt-5">



            <tbody >
                {stockNotInUse.map((stock) => (
                    <tr key={stock.uid} >

                        <div className="columns is-multiline mt-2">

                            <div className="column is-one-quarter" key={stock.id} style={{ width: "100%", boxShadow: '1px 2px 9px #F4AAB9', backgroundColor: "#FF6D28" }}>
                                <div className="card" style={{ width: "100%" }}>
                                    <p className="title is-5" style={{ marginTop: "18px", backgroundColor: "black", padding: "10px", color: "white" }}>Stock ID:  <span style={{ color: "orange" }}>{"  " + "  " + stock.id}</span> </p>
                                    <div className="card-image" >
                                        <figure className="image is-4by3">
                                            <img require src={stock.url} alt="Image" />
                                        </figure>
                                    </div>

                                    <div style={image}>
                                        <div>
                                            <p className="title is-5" style={{ marginLeft: "15px" }}>Attached To:  <span style={{ color: "orange" }}>{" " + " " + stock.assignedTo}</span> </p>
                                        </div>
                                        <div >
                                            <p className="title is-5" style={{ marginLeft: "15px" }}>Staff ID:  <span style={{ color: "blue" }}>{" " + " " + stock.staffId}</span> </p>
                                        </div>


                                        <div >
                                            <p className="title is-5" style={{ marginTop: "18px", marginLeft: "15px" }}>Item Name:  <span style={{ color: "green" }}>{" " + " " + stock.stockName}</span></p>
                                        </div>

                                        <div >
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-5" style={{ marginTop: "18px", marginLeft: "15px" }}>Assigner:  <span style={{ color: "#00F5FF" }}>{" " + " " + stock.giver}</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div >
                                            <div className="media">
                                                <div className="media-content">
                                                    <p className="title is-5" style={{ marginTop: "18px", marginLeft: "15px" }}>Category:  <span style={{ color: "#00F5FF" }}>{" " + " " + stock.category}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

















                        {/* <div className="columns is-multiline mt-2">
                            <Col md={6} lg={12} sm={12} >
                                <MDBCard style={{ width: "300px" }}>
                                    <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
                                    <MDBCardBody className="d-flex p-2">
                                        <MDBListGroupItem style={{ width: "300px" }}>Item Details</MDBListGroupItem>
                                        <MDBCardText>
                                            <br /> <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </MDBCardText>
                                    </MDBCardBody>
                                    <MDBListGroup flush>

                                        <MDBListGroupItem><h1 style={{ fontSize: "20px", color: "Orange", backgroundColor: "black", paddingLeft: 20, borderRadius: "50px",fontWeight: "900" }}>Item No</h1> <h3 style={{ color: "blue", fontSize: "30px", fontWeight: "900" }}> {index + 1}</h3></MDBListGroupItem>
                                        <MDBListGroupItem style={{ fontSize: "20px", color: "green" }}><p style={{ fontSize: "20px", color: "Orange" }}>Stock Code</p>{"     " + stockIn.stockCode}</MDBListGroupItem>
                                        <MDBListGroupItem><h1 style={{ fontSize: "20px", color: "Orange" }}>ITem Name</h1>{stockIn.stockName}</MDBListGroupItem>
                                        <MDBListGroupItem><h1 style={{ fontSize: "20px", color: "Orange" }}>Category</h1>{stockIn.category}</MDBListGroupItem>
                                        <MDBListGroupItem><h1 style={{ fontSize: "20px", color: "Orange" }}>Cost</h1> {stockIn.cost}</MDBListGroupItem>
                                        <MDBListGroupItem><h1 style={{ fontSize: "20px", color: "Orange" }}>Quantity</h1>{stockIn.quantity}</MDBListGroupItem>
                                    </MDBListGroup>
                                    <MDBCardBody>
      
                                    </MDBCardBody>
                                </MDBCard>
                            </Col>
                        </div> */}






                    </tr>
                ))}
            </tbody>








        </div>
    );
};

export default StockInCreateViewList;







































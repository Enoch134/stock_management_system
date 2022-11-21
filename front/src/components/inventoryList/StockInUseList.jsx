import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import StockApprovedView from "../../pages/inventory/StockApprovedView";
import { Scrollbars } from 'react-custom-scrollbars';
import StockApprovedViewList from "./StockApprovedViewList";


const StockInUseList = () => {
    const { user } = useSelector((state) => state.auth);
    const [stockInUse, setStockInUse,] = useState([]);
    useEffect(() => {
        getStockInUse();
    }, []);

    const getStockInUse = async () => {
        const response = await axios.get("http://localhost:5000/stockInUse");
        setStockInUse(response.data);
    };

    // const deleteStock = async (stockUId) => {
    //     await axios.delete(`http://localhost:5000/stock/${stockUId}`);
    //     getStock();
    // };
    const tbl={
        width:'80%',
        fontSize:'13px',
        marginLeft:'30px',
        marginRight:'auto',
        // marginTop:'20px',
        boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
        marginTop:'20px',
       }
       const btn={
        width:'40%',
       marginLeft:'240px',
       marginRight:'auto',
       
          
       }
       const lnk={
        backgroundColor:'black',
        textDecoration:'none',
        padding:'10px',
        color:'white',
        borderRadius:'10px',
        boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
       }

       const lnk1={
        backgroundColor:'black',
        textDecoration:'none',
        marginLeft:'30px',
        padding:'10px',
        color:'white',
        borderRadius:'10px',
        width:'80%',
        boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
       }

    return (
        <div>

            <div style={btn}>


            <NavLink to={"/stockIn"} style={lnk}>
                    Stock Not In Use
                </NavLink>

                <NavLink to={"/stockInUse"} style={lnk1}>
                    Stock In Use
                </NavLink>

            </div>





            <div style={{ display: "flex" }}>
                <div style={tbl}>
                    <table className="table is-striped is-fullwidth" >
                        <thead>
                            <tr style={{ boxShadow: "0px 0px 2px #000000", }}>
                                <th >No</th>
                                <th >Stock Code</th>
                                <th >Stock Name</th>
                                {/* <th >Description</th>
                                <th >Category</th>
                                <th >Color</th>
                                <th >Brand</th> */}
                                {/* <th >Purchase Date</th>
                                <th >Purchase From</th> */}
                                {/* <th >Cost</th>
                                <th >Status</th> */}
                                <th>Attached To</th>
                                <th>Staff ID</th>
                                <th>Department</th>
                                <th>Assigner</th>
                                <th>Assign Date</th>
                                <th>View Details</th>

                            </tr>
                        </thead>
                        <tbody >

                            {stockInUse.map((stock, index) => (
                                <tr key={stock.uId} >
                                    <td className="shadow-inner">{index + 1}</td>
                                    <td>{stock.stockCode}</td>
                                    <td>{stock.stockName}</td>
                                    {/* <td>{stock.description}</td>
                                    <td>{stock.category}</td>
                                    <td>{stock.stockColor}</td>
                                    <td>{stock.stockBrand}</td>
                                    <td>{stock.purchaseDate}</td>
                                    <td>{stock.purchaseFrom}</td>
                                    <td>{stock.cost}</td>
                                    <td>{stock.status}</td> */}
                                    <td>{stock.assignedTo}</td>
                                    <td>{stock.staffId}</td>
                                    <td>{stock.department}</td>
                                    <td>{stock.giver}</td>
                                    <td>{stock.dateGiven}</td>




                                    <td>
                                        <Link
                                            to={`/stock/get/${stock.stockUId}`}
                                            className="button is-small is-info"
                                            style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '10px', textDecoration:'none' }}
                                        >
                                           View Stock
                                        </Link>
                                    </td>
                                    {/* <td>
                                        <Link
                                            to={`/viewSingleStock/:id${stock.stockUId}`}
                                            className="button is-small is-info"
                                            style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '10px', }}
                                        >
                                            View
                                        </Link>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

                
                <Scrollbars
                    style={{ width: 500, height: 500, marginRight: 40 }}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={500}
                    thumbMinSize={30}
                    universal={true}
                >
                    <div><StockApprovedViewList /></div>
                </Scrollbars>

            </div>


        </div>
    );
};

export default StockInUseList;







































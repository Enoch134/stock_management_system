import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import StockInCreateView from "../../pages/inventory/StockInCreateView";
import { Scrollbars } from 'react-custom-scrollbars';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';


const ViewSingleStockList = () => {
    const { user,stock } = useSelector((state) => state.auth);
    const [stockId, setStockId,] = useState([""]);
   
    const [showBasic, setShowBasic] = useState();
    useEffect(() => {
        getStockId();
    }, []);

    const getStockId = async (id) => {
        const response = await axios.get(`http://localhost:5000/stock/${id}`);
        setStockId(response.data);
    };

    // const deleteStock = async (stockUId) => {
    //     await axios.delete(`http://localhost:5000/stock/${stockUId}`);
    //     getStock();
    // };

    return (
        <div>


            <div style={{ display: "flex" }}>
                <div>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr style={{ boxShadow: "0px 0px 10px #000000", }}>
                                <th >No</th>
                                <th >Stock Code</th>
                                <th >Stock Name</th>
                                <th >Category</th>
                                <th >Cost</th>
                                <th >Quantity</th>
                                <th >Name</th>
                                {/* <th >{user && user.name}</th> */}
                                {/* <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000" }}>Manager Action</th>
            <th style={{ border: "solid 2px", boxShadow: "0px 0px 10px #000000", }}>Director Action</th> */}
                             
                            </tr>
                        </thead>
                        <tbody >

                            {stockId.map((stock, index) => (
                                <tr key={stock.id} >
                                    <td className="shadow-inner">{index + 1}</td>
                                    <td>{stock.id}</td>
                                    <td>{stock.stockCode}</td>
                                    <td>{stock.stockName}</td>
                                    <td>{stock.category}</td>
                                    <td>{stock.cost}</td>
                                    <td>{stock.quantity}</td>
                                    <td>{user && user.name}</td>
                                    <td>{user && user.staffid}</td>
                                    <td>{stock && stock.stockName}</td>
                                    <td>{stock.email}</td>
                                    {/* <td style={{ backgroundColor: 'orange', color: 'White', fontWeight: 500, fontSize: '21px', }}>{request.managerApproved}</td>
              <td style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '21px', }}>{request.directorApproved}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <Scrollbars
                    style={{ width: 500, height: 500, marginRight: 40 }}
                    // onScroll={this.handleScroll}
                    // onScrollFrame={this.handleScrollFrame}
                    // onScrollStart={this.handleScrollStart}
                    // onScrollStop={this.handleScrollStop}
                    // onUpdate={this.handleUpdate}
                    // renderView={this.renderView}
                    // renderTrackHorizontal={this.renderTrackHorizontal}
                    // renderTrackVertical={this.renderTrackVertical}
                    // renderThumbHorizontal={this.renderThumbHorizontal}
                    // renderThumbVertical={this.renderThumbVertical}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={500}
                    thumbMinSize={30}
                    universal={true}
                >
                    <div><StockInCreateView /></div>
                </Scrollbars>



            </div>


        </div>
    );
};

export default ViewSingleStockList;







































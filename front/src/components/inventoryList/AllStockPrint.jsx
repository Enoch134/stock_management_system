import React, { useState, useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import ReactPaginate from "react-paginate";
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";



const AllStockList = () => {
    const { user } = useSelector((state) => state.auth);
    const [allStock, setAllStock,] = useState([]);
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const allStockPerPage = 10;

   const pagesVisited = pageNumber * allStockPerPage;
    useEffect(() => {
        getAllStock();
    }, []);

    const getAllStock = async () => {
        const response = await axios.get("http://localhost:5000/allStock");
        setAllStock(response.data);
    };

    // const deleteStock = async (stockUId) => {
    //     await axios.delete(`http://localhost:5000/stock/${stockUId}`);
    //     getStock();
    // };

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:5000/allStock/?q=${query}`);
          setAllStock(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
      }, [query]);

    const tbl={
        width:'95%',
        fontSize:'13px',
       boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
        marginTop:'20px',
        marginLeft:'auto',
        marginRight:'auto'
       }
     

       const pageCount = Math.ceil(allStock.length / allStockPerPage);

        const changePage = ({ selected }) => {
         setPageNumber(selected);
       };

       
    let componentRef=useRef()
    return (
        <div className="App">

        
                <input
                className="search"
                placeholder="Search..."
                // FaSearch
                onChange={(e) => setQuery(e.target.value)}
                style={{
                marginLeft:'40px',
                marginTop:'50px',
                borderRadius:'5px',
                width:'20%',
                // height:'90%',
              
                // backgroundColor:'#A2B5BB',
                // marginTop:'30px'
          
              }}
            />
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
           
            <div style={{ display: "flex" }}>
                <div>
                <div ref={(el) => (componentRef = el)}  style={{padding:'20px'}}>
                
                <div style={{textAlign:'center', paddingTop:'20px'}}>
                <h5 style={{fontWeight:'bold'}}>Orange SL</h5>
                <p>Stock Record</p>
                </div>
                <table className="table is-striped is-fullwidth" style={tbl}>
                        <thead>
                            <tr >
                                <th >No</th>
                                <th >Stock Code</th>
                                <th >Stock Name</th>
                                <th >Description</th>
                                <th >Category</th>
                                <th >Color</th>
                                <th >Brand</th>
                                <th >Purchase Date</th>
                                <th >Purchase From</th>
                                <th >Cost</th>
                                <th >Status</th>
                                <th>Attached To</th>
                                <th>Staff ID</th>
                                <th>Department</th>
                                <th>Assigner</th>
                            </tr>
                        </thead>
                        <tbody >

                            {allStock.filter(stock=>
                             stock.stockCode.toLowerCase().includes(query)||
                             stock.stockName.toLowerCase().includes(query)||
                             stock.stockColor.toLowerCase().includes(query)||
                             stock.stockBrand.toLowerCase().includes(query)
                            //  stock.department.toLowerCase().includes(query)
                            //  stock.staffid.toLowerCase().includes(query)
                             )
                            
                            .slice(pagesVisited, pagesVisited + allStockPerPage)
                            
                            .map((stock, index) => (
                                <tr key={stock.uId} >
                                    <td className="shadow-inner">{index + 1}</td>
                                    <td>{stock.stockCode}</td>
                                    <td>{stock.stockName}</td>
                                    <td>{stock.description}</td>
                                    <td>{stock.category}</td>
                                    <td>{stock.stockColor}</td>
                                    <td>{stock.stockBrand}</td>
                                    <td>{stock.purchaseDate}</td>
                                    <td>{stock.purchaseFrom}</td>
                                    <td>{stock.cost}</td>
                                    <td>{stock.status}</td>
                                    <td>{stock.assignedTo}</td>
                                    <td>{stock.staffId}</td>
                                    <td>{stock.department}</td>
                                    <td>{stock.giver}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    <ReactPaginate
                     previousLabel={"Previous"}
                     nextLabel={"Next"}
                     pageCount={pageCount}
                     onPageChange={changePage}
                     containerClassName={"paginationBttns justify-content-center pagination"}
                     previousLinkClassName={"previousBttn"}
                     nextLinkClassName={"nextBttn "}
                     disabledClassName={"paginationDisabled"}
                     activeClassName={"paginationActive"}
                     breakLinkClassName={"page-link"}
                     // containerClassName={"pagination "}
                     style={{
                       textDecoration:'none'
                     }}
                    />

                </div>

             
            
            </div>

        </div>
    );
};

export default AllStockList;





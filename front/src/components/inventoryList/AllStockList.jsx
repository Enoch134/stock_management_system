import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
// import StockInCreateView from "../../pages/inventory/StockInCreateView";
// import { Scrollbars } from 'react-custom-scrollbars';
// import { table, thead, tbody, tr, th, td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import ReactPaginate from "react-paginate";


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
        width:'100%',
        fontSize:'13px',
       boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
        marginTop:'20px',
        marginLeft:'200px'
       }
       const btn={
        width:'40%',
       marginLeft:'auto',
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

       const pageCount = Math.ceil(allStock.length / allStockPerPage);

        const changePage = ({ selected }) => {
         setPageNumber(selected);
       };
    return (
        <div>
             <Link to="/allStock/add" className="button is-primary mb-2" style={{
                 marginLeft:'100px',
                 backgroundColor:'#EF5B0C',
                 textDecoration:'none',
                 color:'black',
                 fontWeight:'bold',
                  }}>
                 Print
                </Link> 


            <div  style={btn}>
              {/* <h4>Stock</h4> */}
             
                <NavLink to={"/stockIn"} style={lnk}>
                    Not In Use
                </NavLink>

                <NavLink to={"/stockInUse"} style={lnk1}>
                    Stock In Use
                </NavLink>
               
                <input
                className="search"
                placeholder="Search..."
                // FaSearch
                onChange={(e) => setQuery(e.target.value)}
                style={{
                marginLeft:'440px',
                marginTop:'-200px',
                borderRadius:'5px',
                width:'40%',
                height:'90%',
              
                // backgroundColor:'#A2B5BB',
                // marginTop:'30px'
          
              }}
            />
           
         
            </div>





            <div style={{ display: "flex" }}>
                <div>
              
                    <table className="table is-striped is-fullwidth" style={tbl}>
                        <thead>
                            <tr>
                                <th >No</th>
                                <th >Stock Code</th>
                                <th >Stock Name</th>
                                <th >Color</th>
                                <th >Brand</th>
                                <th>Staff ID</th>
                                <th>Department</th>
                                
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
                                    <td>{stock.stockColor}</td>
                                    <td>{stock.stockBrand}</td>
                                    <td>{stock.staffId}</td>
                                    <td>{stock.department}</td>
                                    




                                    <td>
                                        <Link
                                            to={`/allStock/get/${stock.stockUId}`}
                                            className="button is-small is-info"
                                            style={{ backgroundColor: 'black', color: 'White', fontWeight: 500, fontSize: '10px', }}
                                        >
                                            Stock Detail
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

                {/* 
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
                    <div><StockInCreateView /></div>
                </Scrollbars> */}

            </div>


        </div>
    );
};

export default AllStockList;







































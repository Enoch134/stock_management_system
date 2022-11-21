import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Button, Modal } from 'react-bootstrap';
import ReactPaginate from "react-paginate";
import Pagination from 'react-bootstrap/Pagination';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// import ReactLiveSearch from 'react-live-search'
// import 'react-confirm-alert/src/react-confirm-alert.css';
import "./Pagination.css";
import "./Custom.css";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [text, setText] = useState("");


  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;

  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    setShow(true)
    handleClose(true)
    getUsers(userId);

    const Userlist ={
      backgroundColor:'grey'
    }
    // confirmAlert({
    //   title: 'Confirm to submit',
    //   message: 'Are you sure to do this.',
    //   buttons: [
    //     {
    //       label: 'Yes',
    //       onClick: () => alert('Click Yes')
    //     },
    //     {
    //       label: 'No',
    //       onClick: () => alert('Click No')
    //     }
    //   ]
    // });
  };

  useEffect(() => {
    const fetchData = async (text) => {
      const res = await axios.get(`http://localhost:5000/users/?q=${query}`);
      setUsers(res.data);
      
    };
    if (query.length === 0 || query.length > 2)
     fetchData();
  }, [query]);
  
  // useEffect(() => {
  //   const loadUsers =async () => {
  //     const res = await axios.get("http://localhost:5000/users")
  //     setUsers(res.data)
  //   }
  //   loadUsers()
  // },[]);
  const onSuggestionHandler =(query)=>{
     setQuery(query)
      setSuggestions([])
  }

  const onChangeHandler =(query)=>{
    let matches = users.filter((user)=> {
        const regex= new RegExp(`${query}`,"gi")
        return user.name.match(regex)||
               user.email.match(regex)||
               user.role.match(regex)||
               user.staffid.match(regex)
    })
    setSuggestions(matches) 
    setQuery(query)
           
}
  // const onChangeHandler =(text) => {
  //     let matches =[]
  //     if(query.lenght>0){
  //       matches = users.filter(user=>{
  //         const regex= new RegExp(`${text}`,"gi")
  //         return user.name.match(regex)
  //       })
  //     }
  //     setSuggestions(matches)
  //     // setQuery()
  // }
  // inputFocus = (e) => {
  //   // DOM Ref
  //   if (this.node.current.contains(e.target)) {
  //     return
  //   }
  //   this.setState({
  //     userList: [],
  //   })
  // }

  const tbl={
    width:'90%',
    fontSize:'13px',
    marginLeft:'auto',
    marginRight:'auto',
    // marginTop:'20px',
    boxShadow: 'rgba(0, 0, 0, 0.0) 0px 19px 38px, rgba(0, 0, 0, 0.1) 0px 15px 12px',
    position:'relative',
   }
   const txtt={
    paddingLeft:'60px',
    // paddingTop:'-100px',
   }

   const txttt={
    paddingLeft:'60px',
    paddingTop:'-100px',
   }

   const pageCount = Math.ceil(users.length / usersPerPage);

   const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



 
  return (
    <div className="App">
        {/* <div className="contain">
            <h2 style={{textAlign:'center'}}>sample </h2>
            <input
             placeholder="search.."
             value={query}
             onChange={((e)=> onChangeHandler(e.target.value))}
             style={{marginLeft:'500px'}}
            />
            {suggestions && suggestions.map((user, index) =>
             <div key={index}>
                <h5>{user.name}</h5>
             </div>
            )}
        </div> */}
    
     
       <h1 className="title" style={txttt}>Users</h1>
      <div style={{display:'flex'}}>
     
      <h2 className="subtitle" style={txtt}>List of Users</h2>
      <div className="app">
        <input
        className="search"
        placeholder="Search..."
        // FaSearch
        value={query}
        onBlur={() =>{
          setTimeout(() =>{
            setSuggestions([])
          }, 100)
        }}
        onChange={((e)=> onChangeHandler(e.target.value))}
        style={{
          marginLeft:'580px',
          // marginTop:'-100px',
          borderRadius:'5px',
          width:'40%',
          // height:'90%',
          backgroundColor:'#ffffff',
          border:'none',
          
      }}
      />
    
       {/* <div>{suggestions.name}</div> */}
       {suggestions && suggestions.map((user, index) =>
          <div key={index}
          className="suggestion justify-content-md-end col-md-12"
          onClick={(() => onSuggestionHandler(user.name))}
          >
             {user.name}
          </div>
        )}
     </div>
      </div>
      <div style={{display:'flex'}}>
       <Link to="/users/add" className="button is-primary mb-2" style={{
         marginLeft:'60px',
         backgroundColor:'#EF5B0C',
         textDecoration:'none',
         color:'black',
         fontWeight:'bold',
          }}>
        Add New User
      </Link> 
      <Link to="/requestPrint" className="button is-primary mb-2" style={{
         marginLeft:'680px',
         backgroundColor:'#EF5B0C',
         textDecoration:'none',
         color:'black',
         fontWeight:'bold',
          }}>
        Print
      </Link> 
      </div>
      <MDBTable responsive style={tbl}>

        <MDBTableHead >
           <tr>
              <th>No</th>
              <th>Staff ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
      </MDBTableHead>
      <MDBTableBody>
          {users.filter(user=>
            user.name.toLowerCase().includes(query)||
            user.email.toLowerCase().includes(query)||
            user.staffid.toLowerCase().includes(query)||
            user.role.toLowerCase().includes(query)
           
            )
            
            .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((user, index) => (
            <tr key={user.uid}>
              <td>{index + 1}</td>
              <td>{user.staffid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uid}`}
                  className="button is-small is-info"
                  style={{backgroundColor:'#EF5B0C', textDecoration:'none'}}
                >
                  Edit
                </Link>
                <button 
                  onClick={handleShow}
                  className="button is-small is-danger"
                  style={{backgroundColor:'black'}}
                >
                  Delete
                </button>
                  {/* <Button  onClick={handleShow} style={{backgroundColor:'black'}}>
                  Delete
                 </Button>  */}
                 <Modal size="sm" show={show} >
        
        <Modal.Title><h4 style={{color:'orange', textAlign:'center',fontWeight:'bold'}}>Delete Warning</h4></Modal.Title>
     
      <Modal.Body>
        <p style={{color:'black', fontWeight:'bold'}}> Are you sure you want to delete this User?</p>
        </Modal.Body>
      <Modal.Footer>
      {/* <button
                onClick={() => deleteUser()}
                className="button is-small is-danger"
              >
                Delete
        </button> */}
       <Modal.Footer>
      <Button variant="secondary"   onClick={() => deleteUser(user.uid)}>Yes</Button>
      <Button variant="primary" onClick={handleClose}>Close</Button>
    </Modal.Footer>
      </Modal.Footer>
    </Modal>
              </td>
            </tr>
          ))}
    </MDBTableBody>
    {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns "}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn "}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        breakLinkClassName={"page-link"}
        marginPagesDisplayed={4}
        pageRangeDisplayed={4}
        // containerClassName={"pagination "}
        style={{
          textDecoration:'none'
        }}
      /> */}
     
    </MDBTable>
    {/* <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination> */}
       <div>
      
      </div>
   
    </div>
  );
};

export default Userlist;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from 'moment';
import "../Stock.css";
// "react-redux": "^8.0.2",
const StockInCreateList = ({ history }) => {
    const { user } = useSelector((state) => state.auth);
    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes();
    const today = current_time + "  " + currentDate;
    const sts = ("Not In Use");
    const assignToo = ("Not Assign");
    const staffIdd = ("Not Assign");
    const deptM = ("Not Assign");
    const giv = ("Not Assign");
    const dateGiv = ("Not Assign");

    const [stockCode, setStockCode] = useState("");
    const [stockName, setStockName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stockBrand, setStockBrand] = useState("");
    const [stockColor, setStockColor] = useState("");
    const [purchaseDate, setPurchaseDate] = useState(`${today}`);
    const [purchaseFrom, setPurchaseFrom] = useState("");
    const [cost, setCost] = useState("");
    const [assignedTo, setAssignedTo] = useState(`${assignToo}`);
    const [staffId, setStaffId] = useState(`${staffIdd}`);
    const [department, setDepartment] = useState(`${deptM}`);
    const [giver, setGiver] = useState(`${giv}`);
    const [dateGiven, setDateGiven] = useState(`${dateGiv}`);
    const [status, setStatus] = useState(`${sts}`);
    // const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };



    const Stock = async (e) => {

        e.preventDefault()
        const formData = new FormData()

        formData.append('stockCode', stockCode)
        formData.append('stockName', stockName)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('stockBrand', stockBrand)
        formData.append('stockColor', stockColor)
        formData.append('purchaseDate', purchaseDate)
        formData.append('purchaseFrom', purchaseFrom)
        formData.append('cost', cost)
        formData.append('assignedTo', assignedTo)
        formData.append('staffId', staffId)
        formData.append('department', department)
        formData.append('giver', giver)
        formData.append('dateGiven,', dateGiven)
        formData.append('status', status)

        formData.append("file", file);
        // formData.append("title", title);

        try {
            await axios.post("http://localhost:5000/stock", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };


    const btnField= {
        backgroundColor: 'orangered',
        boxShadow: '-3px 0px 10px -3px #000000',
        color: 'black',
        fontSize: '18px',
        fontWeight: '700',
        margin: 'auto',
        alignItems: 'center',
        width: "300px",
        padding: '10px',
        borderRadius: '50px',
        border: 'none',
    }
    



    return (
        <div>

            <div><p className="has-text-centered" style={{ color: "red", fontSize: "40px" }}>{msg}</p></div>
            <div  style={{ width: "700px", alignItems: "center",  borderRadius: "20px" ,marginLeft:'auto',marginRight:'auto'}}>
                <div className="card-content">
                    <div className="content">
                        <h1>{msg}</h1>
                        <form onSubmit={Stock} enctype="multipart/form-data" method="post" style={{ width: "700px",marginTop:'-70px'  }} class="formOne">



                            {/* Stock Code and name  */}
                            <div style={{ display: "flex", marginLeft:'30px' }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label" style={{color:'white'}}>Stock Code</label>
                                    <div className="control">
                                        <input
                                            type='text'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={stockCode}
                                            onChange={(e) => setStockCode(e.target.value)}
                                            placeholder="Stock Code"
                                            class="inputField"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label" style={{color:'white'}}>Stock Name</label>
                                    <div className="control">

                                        <input
                                            type="text"
                                            style={{ width: "300px" }}

                                            className="input"
                                            value={stockName}

                                            onChange={(e) => setStockName(e.target.value)}
                                            placeholder="Stock Name"
                                            class="inputField"

                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Stock Code and Image  */}



                            {/* Disc and Category */}
                            <div style={{ display: "flex", marginLeft:'30px' }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label" style={{color:'white'}}>Description</label>
                                    <div className="control">
                                        <input
                                            type='textarea'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Description"
                                            class="inputField"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label"style={{color:'white'}}>Category</label>
                                    <div className="select is-fullwidth">
                                        <select
                                            style={{ width: "300px" }}
                                            // value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            
                                        >
                                            <option value="" class="inputField">Select</option>
                                            <option value="Electronic">Electronic</option>
                                            <option value="Stationary">Stationary</option>
                                            <option value="Vehicle">Vehicle</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Disc and Category  */}




                            {/* Stock Brand and Color */}
                            <div style={{ display: "flex", marginLeft:'30px' }}>
                            <div className="field" style={{ maxWidth: "300px", marginLeft: "" }}>
                                    <label className="label"style={{color:'white'}}>Category</label>
                                    <div className="select is-fullwidth">
                                        <select
                                            style={{ width: "300px" }}
                                            // value={category}
                                            onChange={(e) => setStockBrand(e.target.value)}
                                            
                                        >
                                            <option value="" class="inputField">Select</option>
                                            <option value="Dell">Dell</option>
                                            <option value="HP">HP</option>
                                            <option value="Asus">Asus</option>
                                            <option value="Nokia">Nokia</option>
                                            <option value="Erricson">Erricson</option>
                                            <option value="Sony">Sony</option>
                                            <option value="Toshiba">Toshiba</option>
                                            <option value="Motorolla">Motorolla</option>
                                            <option value="LG">LG</option>
                                            <option value="Samsung">Samsung</option>
                                            <option value="Lenovo">Lenovo</option>
                                            <option value="Epson">Epson</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label"style={{color:'white'}}>Category</label>
                                    <div className="select is-fullwidth">
                                        <select
                                            style={{ width: "300px" }}
                                            // value={category}
                                            onChange={(e) => setStockColor(e.target.value)}
                                            
                                        >
                                            <option value="" class="inputField">Select</option>
                                            <option value="Black">Black</option>
                                            <option value="White">White</option>
                                            <option value="Grey">Grey</option>
                                            <option value="Blue">Blue</option>
                                            <option value="Red">Red</option>
                                            <option value="Black and Grey">Black & Grey</option>
                                            <option value="Black and Blue">Black & Blue</option>
                                            <option value="Black and Red">Blue & Red</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* Stock Brand and Color */}



                            {/*Purchase Date and Purchase from*/}
                            <div style={{ display: "flex", marginLeft:'2px' }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    {/* <label className="label">Purchase Date</label> */}
                                    <div className="control">
                                        <input
                                            hidden
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={today}
                                            onChange={(e) => setPurchaseDate(e.target.value)}
                                            class="inputField"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label" style={{color:'white'}}>Purchase From</label>
                                    <div className="control">

                                        <input
                                            type="text"
                                            style={{ width: "300px" }}

                                            className="input"
                                            value={purchaseFrom}

                                            onChange={(e) => setPurchaseFrom(e.target.value)}
                                            placeholder="Stock Color"
                                            size="lg"
                                            class="inputField"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "500px", marginLeft:'30px' }}>
                                    <label className="label" style={{color:'white'}}>Cost</label>
                                    <div className="control">

                                        <input
                                            style={{ width: "300px",color:'white' }}
                                            type='text'
                                            className="input"
                                            value={cost}

                                            onChange={(e) => setCost(e.target.value)}
                                            placeholder="Cost Le"
                                            class="inputField"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Purchase Date and Purchase from */}





                            {/* cost and assigned to*/}
                            {/* <div style={{ display: "flex" }}> */}
                               

                                {/* <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Assigned To</label>
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
                                </div> */}
                            {/* </div> */}
                            {/* cost and assigned to */}




                            {/* staff Id and Department */}


                            {/* <div style={{ display: "flex" }}> */}

                                {/* <div className="field">
                                    <label className="label">Staff Id</label>
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


                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Department</label>
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
                                </div> */}

                            {/* </div> */}

                            {/* staff Id and Department */}





                            {/* Giver and Date Given */}
                            <div style={{ display: "flex" }}>
                                {/* <div className="field">
                                    <label className="label">Giver</label>
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
                                </div> */}



                                {/* <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Date Given</label>
                                    <div className="control">
                                        <input
                                            type='datetime-local'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={dateGiven}
                                            onChange={(e) => setDateGiven(e.target.value)}
                                            placeholder="Purchase Date"
                                        />
                                    </div>
                                </div> */}

                            </div>

                            {/* Giver and Date Given */}



                            {/* Status  */}
                            <div style={{ display: "flex", marginLeft:'30px' }}>
                                <div className="field" style={{ maxWidth: "300px", }}>
                                    <label className="label"></label>
                                    <div className="control">
                                        <input
                                            type='hidden'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={sts}
                                            onChange={(e) => setStatus(e.target.value)}
                                            placeholder="Status"
                                            class="inputField"
                                        />
                                    </div>




                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={assignToo}
                                                onChange={(e) => setAssignedTo(e.target.value)}
                                                placeholder="Product Name"
                                                class="inputField"
                                            />
                                        </div>
                                    </div>


                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={staffIdd}
                                                onChange={(e) => setStaffId(e.target.value)}
                                                class="inputField"
                                               
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={deptM}
                                                onChange={(e) => setDepartment(e.target.value)}
                                                class="inputField"
                                               
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={giv}
                                                onChange={(e) => setGiver(e.target.value)}
                                                placeholder="Product Name"
                                                class="inputField"
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label"></label>
                                        <div className="control">
                                            <input
                                                type="hidden"
                                                className="input"
                                                value={dateGiv}
                                                onChange={(e) => setDateGiven(e.target.value)}
                                                placeholder="Product Name"
                                                class="inputField"
                                            />
                                        </div>
                                    </div>




                               


 

                                    <div style={{ display: "flex", marginLeft:'2px' }}>
                                    <div className="field" style={{ maxWidth: "300px"}}>
                                        <label className="label" style={{color:'white'}}>Image</label>
                                        <div className="control">
                                            <div className="file">
                                                <label className="file-label">
                                                    <input
                                                        type="file"
                                                        className="file-input"
                                                        onChange={loadImage}
                                                        class="inputField"
                                                        style={{ width: "300px" }}
                                                    />
                                                
                                                  
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {preview ? (
                                        <figure className="image is-128x128">
                                            <img src={preview} alt="Preview Image" />
                                        </figure>
                                    ) : (
                                        ""
                                    )}


                                    <div className="field" style={{ marginTop: "30px", marginLeft: "25px", width:'50%' }}>
                                        <div className="control" style={{ maxWidth: "300px"}}>
                                            <button type="submit" className="button is-success"  style={btnField} >
                                                Save Stock
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                {/* Status  */}

                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
};

export default StockInCreateList;

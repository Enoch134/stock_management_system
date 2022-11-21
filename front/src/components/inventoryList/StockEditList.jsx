import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { useSelector } from "react-redux";
const StockEditList = () => {
    const { user } = useSelector((state) => state.auth);
    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes();
    const today = current_time + "  " + currentDate;
    const pending = ("Pending");

    const [stockCode, setStockCode] = useState("");
    const [stockName, setStockName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stockBrand, setStockBrand] = useState("");
    const [stockColor, setStockColor] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [purchaseFrom, setPurchaseFrom] = useState("");
    const [cost, setCost] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [staffId, setStaffId] = useState("");
    const [department, setDepartment] = useState("");
    const [giver, setGiver] = useState("");
    const [dateGiven, setDateGiven] = useState("");
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getStockById();
      }, []);



      const getStockById = async () => {
        const response = await axios.get(`http://localhost:5000/stock/${id}`);
                // setStockCode(response.data.stockCode);
                setStockName(response.data.stockName);
                setDescription(response.data.description);
                setCategory(response.data.stockName);
                setStockBrand(response.data.stockBrand);
                setStockColor(response.data.purchaseFrom);
                setPurchaseDate(response.data.purchaseDate);
                setCost(response.data.cost);
                setAssignedTo(response.data.assignedTo);
                setStaffId(response.data.staffId);
                setDepartment(response.data.department);
                setGiver(response.data.giver);
                setDateGiven(response.data.dateGiven);
                setStatus(response.data.status);
                setTitle(response.data.name);
                setFile(response.data.image);
                setPreview(response.data.url)
            };

            const loadImage = (e) => {
                const image = e.target.files[0];
                setFile(image);
                setPreview(URL.createObjectURL(image));
              };

              const updateStock = async (e) => {
                e.preventDefault();
                const formData = new FormData();
                formData.append("file", file);
                formData.append("title", title);
                try {
                  await axios.patch(`http://localhost:5000/stock/${id}`, formData, {
                    headers: {
                      "Content-type": "multipart/form-data",
                    },
                  });
                  navigate("/");
                } catch (error) {
                  console.log(error);
                }
              };
    return (


        <div>
            <h1 className="title">Respond To Stock</h1>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateStock} enctype="multipart/form-data" method="post" style={{ width: "600px" }}>



                            {/* Stock Code and name  */}
                            <div style={{ display: "flex" }}>
                                {/* <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label">Stock Code</label>
                                    <div className="control">
                                        <input
                                            type='text'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={stockCode}
                                            onChange={(e) => setStockCode(e.target.value)}
                                            placeholder="Stock Code"
                                        />
                                    </div>
                                </div> */}

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Stock Name</label>
                                    <div className="control">

                                        <input
                                            type="text"
                                            style={{ width: "300px" }}

                                            className="input"
                                            value={stockName}

                                            onChange={(e) => setStockName(e.target.value)}
                                            placeholder="Stock Name"

                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Stock Code and Image  */}



                            {/* Disc and Category */}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label">Description</label>
                                    <div className="control">
                                        <input
                                            type='textarea'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Stock Code"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Category</label>
                                    <div className="select is-fullwidth">
                                        <select
                                            style={{ width: "300px" }}
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option value="admin">Electronic</option>
                                            <option value="director">Stationary</option>
                                            <option value="manager">Vehicle</option>
                                            <option value="users">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Disc and Category  */}




                            {/* Stock Brand and Color */}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label">Stock Brand</label>
                                    <div className="control">
                                        <input
                                            type='textarea'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={stockBrand}
                                            onChange={(e) => setStockBrand(e.target.value)}
                                            placeholder="Stock Code"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Stock Color</label>
                                    <div className="control">

                                        <input
                                            type="text"
                                            style={{ width: "300px" }}

                                            className="input"
                                            value={stockColor}

                                            onChange={(e) => setStockColor(e.target.value)}
                                            placeholder="Stock Color"
                                            size="lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Stock Brand and Color */}



                            {/*Purchase Date and Purchase from*/}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "550px" }}>
                                    <label className="label">Purchase Date</label>
                                    <div className="control">
                                        <input
                                            type='datetime-local'
                                            style={{ width: "300px" }}
                                            className="input"
                                            value={purchaseDate}
                                            onChange={(e) => setPurchaseDate(e.target.value)}
                                            placeholder="Stock Code"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Purchase From</label>
                                    <div className="control">

                                        <input
                                            type="text"
                                            style={{ width: "300px" }}

                                            className="input"
                                            value={purchaseFrom}

                                            onChange={(e) => setPurchaseFrom(e.target.value)}
                                            placeholder="Stock Color"
                                            size="lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Purchase Date and Purchase from */}





                            {/* cost and assigned to*/}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "500px", }}>
                                    <label className="label">Cost</label>
                                    <div className="control">

                                        <input
                                            style={{ width: "300px" }}
                                            type='text'
                                            className="input"
                                            value={cost}

                                            onChange={(e) => setCost(e.target.value)}
                                            placeholder="Cost Le"
                                        />
                                    </div>
                                </div>

                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
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
                                </div>
                            </div>
                            {/* cost and assigned to */}




                            {/* staff Id and Department */}


                            <div style={{ display: "flex" }}>

                                <div className="field">
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
                                </div>

                            </div>

                            {/* staff Id and Department */}





                            {/* Giver and Date Given */}
                            <div style={{ display: "flex" }}>
                                <div className="field">
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
                                </div>



                                <div className="field" style={{ maxWidth: "300px", marginLeft: "25px" }}>
                                    <label className="label">Date Given</label>
                                    <div className="control">
                                        <input
                                            style={{ width: "300px" }}
                                            type="datetime-local"
                                            className="input"
                                            value={dateGiven}
                                            onChange={(e) => setDateGiven(e.target.value)}
                                            placeholder="Cost"
                                        />
                                    </div>
                                </div>

                            </div>
                            {/* Giver and Date Given */}



                            {/* Status  */}
                            <div style={{ display: "flex" }}>
                                <div className="field" style={{ maxWidth: "300px", }}>
                                    <label className="label">Status</label>
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            placeholder="Quantity"
                                        />
                                    </div>




                                    <div className="field">
                                        <label className="label">Product Name</label>
                                        <div className="control">
                                            <input
                                                type="text"
                                                className="input"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                placeholder="Product Name"
                                            />
                                        </div>
                                    </div>



                                    <div className="field">
                                        <label className="label">Image</label>
                                        <div className="control">
                                            <div className="file">
                                                <label className="file-label">
                                                    <input
                                                        type="file"
                                                        className="file-input"
                                                        onChange={loadImage}
                                                    />
                                                    <span className="file-cta">
                                                        <span className="file-label">Choose a file...</span>
                                                    </span>
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


                                    <div className="field" style={{ marginTop: "30px", marginLeft: "25px" }}>
                                        <div className="control">
                                            <button type="submit" className="button is-success">
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Status  */}

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StockEditList;

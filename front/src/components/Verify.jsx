import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from 'moment'
import { getMe } from "../features/authSlice";


const Verify = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
    }, [isError, navigate]);

    const { user } = useSelector((state) => state.auth);
    console.log(user)
    const currentDate = moment().format('DD-MM-YYYY')
    const date = new Date();
    const current_time = date.getHours() + ":" + " " + date.getMinutes();
    const today = current_time + "  " + currentDate;

    const URL = "https://ip.nf./me.json";
    const [ipInfo, setIpInfo] = useState({ ip: "" });
    useEffect(() => {
        fetch(URL, { method: "get" })
            .then((response) => response.json())
            .then((data) => {
                setIpInfo({ ...data });
            })
    }, []);


    var [staffid, setStaffid] = useState(`${user && user.staffid}`);
    var [staffName, setStaffName] = useState(`${user && user.name}`);
    var [email, setEmail] = useState(`${user && user.email}`);
    var [ipAddress, setIpAddress] = useState("");
    var [location, setLocation] = useState("");
    const [loginTime, setLoginTime] = useState(`${today}`);
    const [msg, setMsg] = useState("");


    var createList = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/list", {
                staffid: staffid = (`${user && user.staffid}`),
                staffName: staffName = (`${user && user.name}`),
                email: email = (`${user && user.email}`),
                ipAddress: ipAddress = (`${ipInfo.ip.ip}`),
                location: location = (`${ipInfo.ip.country}`),
                loginTime: loginTime,
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const ref = useRef();
    const myfunc = () => {
    };

    useEffect(() => {
        setTimeout(() => {
            ref.current.click();
        }, 400); //miliseconds
    },[]);

    return (

        <div >
         
                    <form onSubmit={createList} style={{ width: "70%" }}>
                        <div className="row">
                            <div className="col text-center">
                                <div className="">
                                    <div className="">
                                        <ul className="list-group">
                                            <div className="content">
                                                <div className="field">
                                                    {/* <label className="label">Staff ID</label> */}
                                                    <div className="control">
                                                        <input
                                                            type="text"
                                                            // hidden
                                                            className="input"
                                                            value={user && user.staffid}
                                                            onChange={(e) => setStaffid(e.target.value)}
                                                            placeholder="Staff Id"
                                                        />
                                                    </div>
                                                    {/* <label className="label">Name</label> */}
                                                    <div className="control">
                                                        <input
                                                            // hidden
                                                            type="text"
                                                            className="input"
                                                            value={user && user.name}
                                                            onChange={(e) => setStaffName(e.target.value)}
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    {/* <label className="label">Email</label> */}
                                                    <div className="control">
                                                        <input
                                                            // hidden
                                                            type="email"
                                                            className="input"
                                                            value={`${user && user.email}`}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    {/* <label className="label">Ip Address</label> */}
                                                    <div className="control">
                                                        <input
                                                            // hidden
                                                            type=""
                                                            required
                                                            className="input"
                                                            value={ipInfo.ip.ip}
                                                            onChange={(e) => setIpAddress(e.target.value)}
                                                            placeholder="Staff Department"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    {/* <label className="label">Location</label> */}
                                                    <input
                                                        // hidden
                                                        type="text"
                                                        className="input"
                                                        value={ipInfo.ip.country}
                                                        onChange={(e) => setLocation(e.target.value)}
                                                        placeholder="Staff Department"
                                                    />
                                                </div>

                                                <div className="field">
                                                    {/* <label className="label">Login Time</label> */}
                                                    <div className="control">
                                                        <input
                                                            // hidden
                                                            className="input"
                                                            value={today}
                                                            onChange={(e) => setLoginTime(e.target.value)}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <div className="control">
                                                    </div>
                                                </div>

                                            </div>

                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <button  ref={ref} onClick={myfunc} className="button is-success">
                            submit
                        </button>

                    </form>
            
        </div>

    );

};

export default Verify;
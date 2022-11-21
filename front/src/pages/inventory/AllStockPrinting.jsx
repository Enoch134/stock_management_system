import React, { useEffect } from "react";
import Layout from "../Layout";
import AllStockPrint from "../../components/inventoryList/AllStockPrint";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const AllStockPrinting = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
    }, [isError, navigate]);
    return (
        <Layout>
            <AllStockPrint />
        </Layout>
    );
};

export default AllStockPrinting;

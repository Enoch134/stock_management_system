import React, { useEffect } from "react";
import Layout from "../Layout";
import StockNotInUseList from "../../components/inventoryList/StockNotInUseList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const StockNotInUse = () => {
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
            <StockNotInUseList />
        </Layout>
    );
};

export default StockNotInUse;

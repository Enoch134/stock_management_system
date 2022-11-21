import React, { useEffect } from "react";
import Layout from "../Layout";
import StockInCreateViewList from "../../components/inventoryList/StockInCreateViewList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const StockInCreateView = () => {
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
            <StockInCreateViewList />
        </Layout>
    );
};

export default StockInCreateView;

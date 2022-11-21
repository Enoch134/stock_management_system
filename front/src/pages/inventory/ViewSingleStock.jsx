import React, { useEffect } from "react";
import Layout from "../Layout";
import ViewSingleStockList from "../../components/inventoryList/ViewSingleStockList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const ViewSingleStock = () => {
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
        <h1>The quick brown fox jumps over the lazy dog</h1>
      <ViewSingleStockList />
    </Layout>
  );
};

export default ViewSingleStock;

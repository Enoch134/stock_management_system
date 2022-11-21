import React, { useEffect } from "react";
import Layout from "../Layout";
import StockEditList from "../../components/inventoryList/StockEditList";
import StockNotInUseList from "../../components/inventoryList/StockNotInUseList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const StockEdit = () => {
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
      {/* <StockEditList /> */}
      <StockNotInUseList />
    </Layout>
  );
};

export default StockEdit;

import React, { useEffect } from "react";
import Layout from "../Layout";
import ManagerApprovedRequestList from "../../components/managerDashboard/ManagerApprovedRequestList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";

const ManagerApprovedRequest = () => {
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
      <ManagerApprovedRequestList />
    </Layout>
  );
};

export default ManagerApprovedRequest;

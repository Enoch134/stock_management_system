import React, { useEffect } from "react";
import ManagerRequestRejectedList from "../../components/userDashboard/ManagerRequestRejectedList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "../../pages/Layout"

const ManagerRequestRejected = () => {
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
      <ManagerRequestRejectedList />
    </Layout>
  );
};

export default ManagerRequestRejected;

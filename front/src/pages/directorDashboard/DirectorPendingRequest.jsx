import React, { useEffect } from "react";
import DirectorPendingRequestList from "../../components/directorDashboard/DirectorPendingRequestList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "../Layout"

const DirectorPendingRequest = () => {
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
      <DirectorPendingRequestList />
    </Layout>
  );
};

export default DirectorPendingRequest;

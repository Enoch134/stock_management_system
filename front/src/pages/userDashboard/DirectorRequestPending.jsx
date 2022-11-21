import React, { useEffect } from "react";
import DirectorRequestPendingList from "../../components/userDashboard/DirectorRequestPendingList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "../../pages/Layout"

const DirectorRequestPending = () => {
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
      <DirectorRequestPendingList />
    </Layout>
  );
};

export default DirectorRequestPending;

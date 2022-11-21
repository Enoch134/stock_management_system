import React, { useEffect } from "react";
import DirectorRequestRejectedForUserList from "../../components/userDashboard/DirectorRequestRejectedForUserList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice";
import Layout from "../../pages/Layout"

const DirectorRequestRejectedForUser = () => {
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
      <DirectorRequestRejectedForUserList />
    </Layout>
  );
};

export default DirectorRequestRejectedForUser;

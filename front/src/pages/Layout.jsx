import React from "react";
import Navbar from "../components/Navbarr";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "100vh", }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-white" style={{ marginTop: '50px', marginLeft: '-60px' }}>
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;

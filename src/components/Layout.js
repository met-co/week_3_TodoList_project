import React from "react";
import Header from "./Header";
import "../App.css";

const Layout = (props) => {
  return (
    <div className="wrap">
      <Header />
      {props.children}
    </div>
  );
};
export default Layout;

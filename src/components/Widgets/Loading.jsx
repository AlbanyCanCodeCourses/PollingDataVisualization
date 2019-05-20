import React from "react";
import "./Loading.css";
import pageLoader from "../../images/page-loader.gif";

function Loading() {
  return (
    <div className="pageloader">
      <img src={pageLoader} alt="Loading..." />
    </div>
  );
}

export default Loading;
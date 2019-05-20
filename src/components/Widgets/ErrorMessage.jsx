import React from "react";

function ErrorMessage(props) {
  console.log(props.errorData);
  return (
    <div className={`alert alert-danger ${props.errorData || ""}`} role="alert">
      {props.children}
    </div>
  );
}

export default ErrorMessage;
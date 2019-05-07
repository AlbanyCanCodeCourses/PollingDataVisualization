import React from 'react';

const ToolTip = (props) => {
  return (
    <div>
      <h3>{props.first_name}</h3>
      <p>{props.gender}</p>
      <p>{props.grad_date}</p>
      <p>{props.starting_salary}</p>
      <p>{props.current_salary}</p>
    </div>
  )
}

export default ToolTip;
import React from 'react';

import './Cards.css';

const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow" />
      <div className="card-body text-dark" />
      <h4 className="card-title">{props.title}</h4>
      <hr />
      <p className="card-text text-secondary">{props.text}</p>
      <h4 className="card-title">Number of Students</h4>
      <p className="card-text text-secondary">{props.text2}</p>
      <h4 className="card-title">Average Salary Increase</h4>
    </div>
  );
};

export default Card;

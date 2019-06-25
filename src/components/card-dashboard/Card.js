import React from 'react';

import './styles.css';

export default ({ id, name, size, status }) => (
  <div className={`card ${size}`}>
    <div className={`colorbar ${status}`} />
    <div className="card-body">
      <h3>{id}</h3>
      <div>{name}</div>
    </div>
  </div>
);

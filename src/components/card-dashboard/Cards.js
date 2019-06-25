import React from 'react';
import Card from './Card';

import './styles.css';

export default ({ cards, cardSize }) => (
  <div className="card-container">
    <div className="card-container-inner">
      {cards.map(card => (
        <Card key={card.id} {...card} size={cardSize} />
      ))}
    </div>
  </div>
);

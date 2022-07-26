import React from 'react';
import '../styles/RocketCards.css';

const RocketCards = ({image, title, description}) => {
  return (
    <div className="Rocket-card">
      <img src={image} alt="Space rockets" />
      <div>
        <h4>Rocket Title {title}</h4>
        <p className="Description">{description}</p>
        <button>Reserve Rocket</button>
      </div>
    </div>
  )
}

export default RocketCards;
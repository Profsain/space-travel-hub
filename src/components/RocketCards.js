import PropTypes from "prop-types"
import React from 'react';
import '../styles/RocketCards.css';

const RocketCards = ({ image, title, description }) => (
  <div className="Rocket-card">
    <img src={image} alt="Space rockets" />
    <div>
      <h4>{title}</h4>
      <p className="Description">{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

RocketCards.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default RocketCards;

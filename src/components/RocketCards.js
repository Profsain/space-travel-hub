import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { reservedRocket, cancelledReserve } from '../redux/rockets/rockets';
import '../styles/RocketCards.css';

const RocketCards = ({
  image,
  title,
  description,
  rocketId,
  isReserved,
}) => {
  const dispatch = useDispatch();

  const handleReservation = (e) => {
    const { id } = e.target;
    dispatch(reservedRocket(id));
  };

  const handleCancelReservation = (e) => {
    const { id } = e.target;
    dispatch(cancelledReserve(id));
  };

  return (
    <div className="Rocket-card">
      <img src={image} alt="Space rockets" />
      <div>
        <h4>{title}</h4>
        <p className="Description">
          {isReserved ? <span className="Badge">Reserved</span> : ''}
          {description}
        </p>
        {isReserved
          ? (
            <button
              className="Cancel-btn"
              type="button"
              id={rocketId}
              onClick={handleCancelReservation}
            >
              Cancel Reservation
            </button>
          )
          : (
            <button
              className="Reserve-btn"
              type="button"
              id={rocketId}
              onClick={handleReservation}
            >
              Reserve Rocket
            </button>
          )}
      </div>
    </div>
  );
};

RocketCards.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  rocketId: PropTypes.number,
  isReserved: PropTypes.bool,
};

export default RocketCards;

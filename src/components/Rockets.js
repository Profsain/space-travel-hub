import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCards from './RocketCards';
import fetchRocketsData from '../redux/rockets/fetchRocketsData';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsData());
  },);
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const rocketList = rocketsData.map((rocket) => (
    <RocketCards
      key={rocket.id}
      title={rocket.rocket_name}
      image={rocket.flickr_images[0]}
      description={rocket.description}
    />
  ));

  return (
    <div>
      {rocketList}
    </div>
  );
};

export default Rockets;

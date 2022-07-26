import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketCards from './RocketCards';
import fetchRocketsData from '../redux/rockets/fetchRocketsData';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsData())
  }, []);
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const rocketList = rocketsData.map((rocket) => {
    const id = rocket.id;
    const title = rocket.rocket_name;
    const description = rocket.description;
    const imgUrl = rocket.flickr_images[0];
    return (
      <RocketCards
        key={id}
        title={title}
        image={imgUrl}
        description={description}
      />
    )
  })

  return (
    <div>
      {rocketList}
    </div>
  );
};

export default Rockets;

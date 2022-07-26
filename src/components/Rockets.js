import React from 'react';
import RocketCards from './RocketCards';

const Rockets = () => (
    <div>
      <RocketCards
        image="r1.jpg"
        title="AsiaSat"
        description="The Rockets section displays a list of all available SpaceX rockets. 
        Users can book each rocket by clicking the reservation button or cancel the previously made booking. 
        The same layout is used to form the Dragons section"
      />
      <RocketCards
        image="r2.jpg"
        title="Nigeria SpaceSat"
        description="The Rockets section displays a list of all available SpaceX rockets. 
        Users can book each rocket by clicking the reservation button or cancel the previously made booking. 
        The same layout is used to form the Dragons section"
      />
      <RocketCards
        image="r4.jpg"
        title="Saudi PeaceSat"
        description="The Rockets section displays a list of all available SpaceX rockets. 
        Users can book each rocket by clicking the reservation button or cancel the previously made booking. 
        The same layout is used to form the Dragons section"
      />
      <RocketCards
        image="r1.jpg"
        title="Star Japan"
        description="The Rockets section displays a list of all available SpaceX rockets. 
        Users can book each rocket by clicking the reservation button or cancel the previously made booking. 
        The same layout is used to form the Dragons section"
      />
    </div>
  );

export default Rockets;

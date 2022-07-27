import React, { useState } from 'react';
import MissionData from './MissionData';
import MissionList from './MissionsList';

const MissionView = () => {
  const [missions] = useState(MissionData);

  return (
    <div className="container">
      <MissionList missions={missions} />
    </div>
  );
};

export default MissionView;

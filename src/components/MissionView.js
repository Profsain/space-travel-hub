import React, { useState } from "react";
import MissionData from "./MissionData";
import MissionList from "./MissionsList";

const Missionview = () => {
  const [missions] = useState(MissionData);

  return (
    <div className="container">
      <MissionList Missions={missions} />
    </div>
  );
};

export default Missionview;
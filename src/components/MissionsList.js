import React from "react";
import PropTypes from 'prop-types';
import Missions from "./Missions";

const MissionList = (props) => {
  const { misions } = props;

  return (
    <table className="tab-container">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {
          misions.map((mission) => (
            <Missions key={mission.id} mission={mission} />
          ))
        }
      </tbody>
    </table>
  );
};

MissionList.propTypes = {
  missions: PropTypes.instanceOf(Object).isRequired
};

export default MissionList;

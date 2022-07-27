import React from 'react';
import PropTypes from 'prop-types';

const Missions = (props) => {
  const { mission } = props;
  const { missionId, missionItem, description } = mission;


  return (
    <tr>
      <td className="tab-data">{ missionItem }</td>
      <td>{ description }</td>
      <td>
        <button type="button" className="btn">Not a member</button>
      </td>
      <td>
        <button type="button" id={missionId} className="btn">Join Mission</button>
      </td>
    </tr>
  );
};

Missions.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default Missions;

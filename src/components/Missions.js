import React from "react";
import PropTypes from 'prop-types';

const Missions = (props) => {
  const { mission } = props;
  const { mission_id, mission_item, description } = mission;


  return (
    <tr>
      <td className="tab-data">{ mission_item }</td>
      <td>{ description }</td>
      <td>
        <button className="btn">Not a member</button>
      </td>
      <td>
        <button id={ mission_id } className="btn">Join Mission</button>
      </td>
    </tr>
  );
};

Missions.propTypes = {
  mission: PropTypes.instanceOf(Object).isRequired,
};

export default Missions;


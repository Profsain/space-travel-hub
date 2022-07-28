// import React from 'react';
// import PropTypes from 'prop-types';

// const Missions = (props) => {
//   const { mission } = props;
//   const { mission_id, mission_item, description } = mission;

//   return (
//     <tr>
//       <td className="tab-data">{ mission_item }</td>
//       <td>{ description }</td>
//       <td>
//         <button type="button" className="btn">Not a member</button>
//       </td>
//       <td>
//         <button type="button" id={mission_id} className="btn">Join Mission</button>
//       </td>
//     </tr>
//   );
// };

// Missions.propTypes = {
//   mission: PropTypes.instanceOf(Object).isRequired,
// };

// export default Missions;

/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchMissions } from "../redux/missions/fetchMissionData";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{"  "}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            <tr key={id}>
              <td>
                <p className="fw-bold">{name}</p>
              </td>
              <td>
                <p>{description}</p>
              </td>
              <td className="align-middle">
                {reserved && <Badge bg="info">Active Member</Badge>}
                {!reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
              </td>
              <td className="col-2 align-middle text-center">
                {reserved && (
                <Button size="sm" variant="outline-danger">
                  Leave Mission
                </Button>
                )}
                {!reserved && (
                <Button size="sm" variant="outline-secondary">
                  Join Mission
                </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
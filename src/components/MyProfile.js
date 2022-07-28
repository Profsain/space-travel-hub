import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const reservedList = rocketsData.filter((rocket) => rocket.reserved === true);
  // const missionsData = useSelector((state) => state.missions.missions);
  // const missionTitle = missionsData.filter((mission) => mission.reserved === true);

  return (
    <div className="Profile-container">
      <h2>My Profile</h2>
      <div className="Section">
        <div className="Missions">
          <h4>My Missions</h4>
          <div className="Content">
            {/* {
              !missionTitle.length
                ? <p>No Mission Joined!</p>
                : missionTitle.map((mission) => <p key={mission.id}>{mission.mission_name}</p>)
            } */}
          </div>
        </div>
        <div className="Rockets">
          <h4>My Rockets</h4>
          <div className="Content">
            {
              !reservedList.length
                ? <p>No reservation!</p>
                : reservedList.map((rocket) => <p key={rocket.id}>{rocket.rocket_name}</p>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

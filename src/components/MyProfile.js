import React from 'react'
import '../styles/MyProfile.css';

const MyProfile = () => {
  return (
    <div className="Profile-container">
      <h2>My Profile</h2>
      <div className="Section">
        <div className="Missions">
          <h4>My Missions</h4>
          <div className="Content">
            <p>Telstar</p>
            <p>SES</p>
            <p>AsiaSet</p>
            <p>ABS</p>
          </div>
        </div>
        <div className="Rockets">
            <h4>My Rockets</h4>
          <div className="Content">
            <p>Falcon 9</p>
            <p>Falcon Heavy</p>
            <p>Star Ship</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;

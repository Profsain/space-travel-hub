import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from './public/planet2.png';

const Navbar = () => {
  const urls = [
    {
      id: 1,
      url: '/',
      text: 'Rocket',
    },
    {
      id: 2,
      url: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      url: '/my profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navbar">
      <img src={planetImg} className="PlantImg" alt="Planet-img" />
      <h1 className="nav-head">Space Travelers' Hub</h1>

      <ul className="nav-menu">
        {urls.map((url) => (
          <li className="nav-item" key={url.id}>
            <NavLink to={url.url}>{ url.text }</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
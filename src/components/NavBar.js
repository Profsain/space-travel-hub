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
      <h1 className="nav-head">Space Travellers' Hub</h1>
    </nav>
  )
}
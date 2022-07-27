import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Navbar from './components/NavBar';
import Missionview from './components/MissionView';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/missions" element={<Missionview />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

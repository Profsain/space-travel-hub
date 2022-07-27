import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Navbar from './components/NavBar';
import MissionView from './components/MissionView';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/missions" element={<MissionView />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

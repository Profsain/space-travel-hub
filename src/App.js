import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Navbar from './components/NavBar';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

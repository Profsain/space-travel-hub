import './App.css';
import MyProfile from './components/MyProfile';
import { Browser as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';

const App = () => (
  <>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MyProfile />} />
        </Routes>
      </Router>
    </div>
  </>
);

export default App;

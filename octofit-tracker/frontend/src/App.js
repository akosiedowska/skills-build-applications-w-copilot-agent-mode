
import './App.css';
const logo = process.env.PUBLIC_URL + '/logo192.png'; // fallback to default react logo if octofitapp-small not present
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h1 className="card-title display-4">Welcome to Octofit Tracker</h1>
        <p className="card-text">Track your fitness activities, join teams, and compete on the leaderboard!</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <NavLink className={({ isActive }) => "navbar-brand d-flex align-items-center" + (isActive ? " fw-bold" : "")}
              to="/">
              <img src={logo} alt="Octofit Logo" className="octofit-logo" />
              Octofit Tracker
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link" + (isActive ? " fw-bold" : "")}
                    to="/activities">Activities</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link" + (isActive ? " fw-bold" : "")}
                    to="/leaderboard">Leaderboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link" + (isActive ? " fw-bold" : "")}
                    to="/teams">Teams</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link" + (isActive ? " fw-bold" : "")}
                    to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => "nav-link" + (isActive ? " fw-bold" : "")}
                    to="/workouts">Workouts</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

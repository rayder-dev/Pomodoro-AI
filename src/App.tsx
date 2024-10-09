import Pomodoro from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        <Route path="/sign-in" element={<Login />} />
        {/* <Route path="/recent-posts" element={<RecentPosts />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

import Pomodoro from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        {/* <Route path="/about-me" element={<AboutMe />} /> */}
        {/* <Route path="/recent-posts" element={<RecentPosts />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

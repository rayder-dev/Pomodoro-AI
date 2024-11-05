import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './containers';
import { NotFound } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

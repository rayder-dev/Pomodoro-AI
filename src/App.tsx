import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Auth/Login';
import Contact from './containers/Contact/Contact';
import Privacy from './containers/Privacy/Privacy';
import Terms from './containers/Terms/Terms';
import Faq from './containers/Faq/Faq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;

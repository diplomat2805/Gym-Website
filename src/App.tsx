import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Pricing from './pages/Pricing';
import BMICalculator from './pages/BMICalculator';
import JoinNow from './pages/JoinNow';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

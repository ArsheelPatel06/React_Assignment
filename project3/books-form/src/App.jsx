import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import DashboardLayout from './pages/dashboard/dashboardlayout';
import Profile from './pages/dashboard/profile';
import Setting from './pages/dashboard/setting';
import Controlled from '../components/Controlled';
import Uncontrolled from '../components/Uncontrolled';


export default function App() {
  return (
    <div>
      {/*Navigation*/}
      <nav style={{ display: 'flex', gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* single page Routing*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="profile" element={<DashboardLayout />} />
        <Route path="setting" element={<DashboardLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>

  )
}
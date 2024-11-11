import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import NavbarComponent from './components/NavbarComponent'; // Assuming your Navbar is in this location

// Import your page components
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import ContactPage from './pages/ContactPage';

const App = () => {
    return (
        <Router>
            <NavbarComponent />
            <div className="container mt-4">
                {/* Use Routes instead of Switch in v6 */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/about" element={<AboutPage />} /> */}
                    {/* <Route path="/services" element={<ServicesPage />} /> */}
                    {/* <Route path="/contact" element={<ContactPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;

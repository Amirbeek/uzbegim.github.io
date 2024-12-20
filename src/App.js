import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            {loading && (
                <div
                    id="spinner"
                    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center "
                >
                    <div
                        className="spinner-border"
                        style={{
                            width: '3rem',
                            height: '3rem',
                            borderColor: '#FEA116',
                            borderTopColor: '#fff'
                        }}
                        role="status"
                    >
                        <span className="sr-only" ></span>
                    </div>
                </div>
            )}

            {!loading && (
                <>
                    <NavbarComponent/>
                    <div className="container mt-4">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/service" element={<Service/>}/>
                            <Route path="/menu" element={<Menu/>}/>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer/>
                </>
            )}
        </Router>
    );
};

export default App;

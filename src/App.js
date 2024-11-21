import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';

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
            {/* Loading Spinner */}
            {loading && (
                <div
                    id="spinner"
                    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
                >
                    <div
                        className="spinner-border text-primary"
                        style={{ width: '3rem', height: '3rem' }}
                        role="status"
                    >
                        <span className="sr-only"></span>
                    </div>
                </div>
            )}

            {!loading && (
                <>
                    <NavbarComponent />
                    <div className="container mt-4">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            {/* Add more routes as needed */}
                        </Routes>
                    </div>
                </>
            )}
        </Router>
    );
};

export default App;

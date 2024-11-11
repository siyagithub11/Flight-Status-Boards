// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useFetchFlights } from './hooks/useFetchFlights';
import FlightTable from './components/FlightTable';
import FlightDetail from './components/FlightDetail';
import './index.css'; // Import the Tailwind CSS file

const App: React.FC = () => {
    const { flights, error } = useFetchFlights(30000); // Update every 30 seconds

    return (
        <Router>
            <div className="container mx-auto">
                <h1 className="text-3xl text-center py-6">Flight Status Board</h1>
                <Routes>
                    <Route path="/" element={<FlightTable flights={flights} error={error} />} />
                    <Route path="/flight/:id" element={<FlightDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
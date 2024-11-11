import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFlightDetails } from '../api';

const FlightDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [flight, setFlight] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getFlightDetails = async () => {
            try {
                const data = await fetchFlightDetails(id!);
                setFlight(data);
            } catch {
                setError('Flight details not available.');
            }
        };
        getFlightDetails();
    }, [id]);

    if (error) return <div className="text-red-600 text-center mt-4">{error}</div>;
    if (!flight) return <div className="text-gray-600 text-center mt-4">Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Flight Details</h2>
            <div className="space-y-4">
                <p className="text-lg">
                    <span className="font-semibold text-gray-700">Flight Number:</span> {flight.flightNumber}
                </p>
                <p className="text-lg">
                    <span className="font-semibold text-gray-700">Airline:</span> {flight.airline}
                </p>
                <p className="text-lg">
                    <span className="font-semibold text-gray-700">Origin:</span> {flight.origin}
                </p>
                <p className="text-lg">
                    <span className="font-semibold text-gray-700">Destination:</span> {flight.destination}
                </p>
                <p className="text-lg">
                    <span className="font-semibold text-gray-700">Departure Time:</span> {flight.departureTime}
                </p>
                <p className="text-lg">
                    <span className="font-semibold text-gray-700">Status:</span> {flight.status}
                </p>
            </div>
        </div>
    );
};

export default FlightDetail;

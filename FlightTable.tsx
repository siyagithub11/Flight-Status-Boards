// src/components/FlightTable.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Flight {
    id: string;
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departureTime: string;
    status: string;
}

interface FlightTableProps {
    flights: Flight[];
    error: string | null;
}

const FlightTable: React.FC<FlightTableProps> = ({ flights, error }) => {
    if (error) return <div className="text-red-500 text-center mt-4">{error}</div>;

    return (
        <div className="overflow-x-auto shadow-lg rounded-lg mt-6">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <tr>
                        <th className="py-3 px-4 text-left">Flight Number</th>
                        <th className="py-3 px-4 text-left">Airline</th>
                        <th className="py-3 px-4 text-left">Origin</th>
                        <th className="py-3 px-4 text-left">Destination</th>
                        <th className="py-3 px-4 text-left">Departure Time</th>
                        <th className="py-3 px-4 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight.id} className="hover:bg-gray-100 border-b">
                            <td className="py-2 px-4">
                                <Link className="text-blue-600 hover:underline font-semibold" to={`/flight/${flight.id}`}>
                                    {flight.flightNumber}
                                </Link>
                            </td>
                            <td className="py-2 px-4">{flight.airline}</td>
                            <td className="py-2 px-4">{flight.origin}</td>
                            <td className="py-2 px-4">{flight.destination}</td>
                            <td className="py-2 px-4">{flight.departureTime}</td>
                            <td className="py-2 px-4">
                                <span className={`font-bold ${flight.status === 'On Time' ? 'text-green-600' : flight.status === 'Delayed' ? 'text-red-600' : 'text-yellow-600'}`}>
                                    {flight.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FlightTable;
            
// src/hooks/useFetchFlights.ts
import { useEffect, useState } from 'react';
import { fetchFlights } from '../api';

export const useFetchFlights = (interval: number) => {
    const [flights, setFlights] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const data = await fetchFlights();
            setFlights(data);
        } catch (err) {
            setError('Failed to fetch flights.');
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, interval);
        return () => clearInterval(intervalId);
    }, [interval]);

    return { flights, error };
};
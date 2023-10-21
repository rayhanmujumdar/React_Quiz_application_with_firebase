import { useEffect, useState } from 'react';

export default function useFetch({ url, method, headers }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetcher = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await fetch(url, {
                    method: method || 'GET',
                    headers,
                });
                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        };
        fetcher();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        loading,
        error,
        data,
    };
}

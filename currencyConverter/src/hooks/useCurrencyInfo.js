import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    // Initialize state as null or an empty object depending on your preference
    const [data, setData] = useState(null); // Initialize with null or empty object
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track errors

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch currency data');
                }

                const result = await response.json();
                setData(result[currency]); // Update state with the fetched currency data
                setLoading(false); // Set loading to false once data is fetched
            } catch (error) {
                setError(error.message); // Handle errors
                setLoading(false); // Set loading to false even if there is an error
            }
        };

        // Call the async function to fetch the currency data
        fetchCurrencyInfo();
    }, [currency]); // Effect will run when `currency` changes

    return { data, loading, error };
}

export default useCurrencyInfo;

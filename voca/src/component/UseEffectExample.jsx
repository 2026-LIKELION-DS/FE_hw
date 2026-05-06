import React, { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timerld = setInterval(() => setCount(prev => prev + 1), 1000);

        return () => clearInterval(timerld);
    }, []);

    return <p>초:{count}</p>;
}

export default Timer;
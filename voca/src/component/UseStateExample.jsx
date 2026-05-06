import React, { useState } from 'react';

function Clicks() {
    const [count, setCount] = useState(0);

    return (
        <>
        <p>현재 값: {count} </p>
        <button onClick={() => setCount(count + 1)}> 값 증가 </button>
        </>
    );
}

export default Clicks;
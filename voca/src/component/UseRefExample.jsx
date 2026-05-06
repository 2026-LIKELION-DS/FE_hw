import React, { useRef } from 'react';

function InputFocus() {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>포커스!</button>
        </div>
    );
}

export default InputFocus;
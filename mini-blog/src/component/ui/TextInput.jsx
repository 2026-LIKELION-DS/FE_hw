import React from 'react';

export default function TextInput({ height, value, onChange, placeholder, className = "" }) {
    return (
        <textarea
            className={`text_input`}
            style={{ height: height }}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}
import React from "react";

function TextInput({ value, onChange, placeholder, multiLine }) {
    
    return (
        <div style={{ width: "100%", marginTop: "8px" }}>
            {multiLine ? (
                <textarea
                    style={{ width: "100%", height: "150px", padding: "8px", fontSize: "16px" }}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    style={{ width: "100%", padding: "8px", fontSize: "16px" }}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}

export default TextInput;
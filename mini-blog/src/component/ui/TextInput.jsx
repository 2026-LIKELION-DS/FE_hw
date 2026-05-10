import React from "react";
import styled from "styled-components";

const TextUI = styled.textarea`
    padding: 8px;
    font-size: 16px;           
    width: 96%;     
    display: block;       
    // margin: 0 auto;      
    outline: none;
`

const Wrapper = styled.div`
    // margin: auto;
    align-self: center;
`
const TextareaUI = styled.textarea`
    height: 300px;
    padding: 8px;
    fontSize: 16px; 
    display: block;       
    // margin: 0 auto;      
    outline: none;
    width: 96%;
    font-size: 16px;    
`

function TextInput({ value, onChange, placeholder, multiLine }) {
    
    return (
        <div>
            {multiLine ? (
                <TextareaUI
                    
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <Wrapper><TextUI
                    
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                /></Wrapper>
            )}
        </div>
    );
}

export default TextInput;
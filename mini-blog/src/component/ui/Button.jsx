import React from 'react'
import styled from "styled-components";

const TextForm = styled.button`
    margin:10px;
    padding:5px;
    border-radius:10px;
    border:none;
    cursor:pointer;
`;

export default function Button({buttonText}) {
    return (
        <div>
            <TextForm>{buttonText}</TextForm>
        </div>
    )
}

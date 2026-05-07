import styled from "styled-components";

const ButtonUI = styled.button`
    border:none;
    border-radius:5px;
    padding:7px;
`

function Button({ title, onClick }) {
    return <ButtonUI onClick={onClick}>{title}</ButtonUI>;
}
export default Button;
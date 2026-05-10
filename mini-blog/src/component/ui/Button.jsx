import styled from "styled-components";

const ButtonUI = styled.button`
    border:none;
    border-radius:15px;
    padding:7px;
    width: 130px;
    height: 50px;
    font-size: 15px;
    font-weight:500;
    // margin: 30px auto;
    // display: flex;       
    // justify-content: center;
    
`

const Wrapper = styled.div`
    display: flex;
    // justify-content: center; 
    // width: 60%;            
    padding: 20px;
`

function Button({ title, onClick }) {
    return <Wrapper><ButtonUI onClick={onClick}>{title}</ButtonUI></Wrapper>;
}
export default Button;
import {Link} from "react-router-dom";
import styled from 'styled-components';
import CommentList from "../list/CommentList";
import Button from "../ui/Button";

const TextForm = styled.button`
    margin:10px;
    padding:5px;
    border-radius:10px;
    border:none;
    cursor:pointer;
`;

const LinkStyle = styled(Link)`
    display:flex;
    text-decoration:none;
`;


export default function PostViewPage() {



    return (
        <div>
            <LinkStyle to ="/">
            <Button buttonText="뒤로가기"/>
            </LinkStyle>
            <CommentList/>
        </div>
    );
}


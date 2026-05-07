import {Link} from "react-router-dom";
import styled from 'styled-components';
import CommentList from "../list/CommentList";

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
            <TextForm>뒤로가기</TextForm>
            </LinkStyle>
            <CommentList/>
        </div>
    );
}


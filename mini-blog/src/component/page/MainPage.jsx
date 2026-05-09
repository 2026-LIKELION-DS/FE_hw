import {Link} from 'react-router-dom'
import styled from 'styled-components';
import PostList from "../list/PostList";
import Button from "../ui/Button";


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const ContainerCss = styled.div`
    width:900px;
`;


export default function MainPage() {
    return (
            <Wrapper>
                <ContainerCss>
            <Link to ="./PostWritePage">
                <Button buttonText="글 작성하기"/>
            </Link>

        
            <h2> 소플의 미니 블로그</h2>
            <PostList></PostList>
            </ContainerCss>

        </Wrapper>
    );
}

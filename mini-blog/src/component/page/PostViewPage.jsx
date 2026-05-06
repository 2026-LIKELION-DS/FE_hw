import {Link} from "react-router-dom";
import styled from 'styled-components';
import dummy from "../../db/data.json";
import {useParams} from "react-router-dom";


const TextForm = styled.button`
    margin:10px;
    padding:5px;
    border-radius:10px;
    border:none;
`;
const DummyContainer1 = styled.div`
    border:1px solid black;
    padding: 10px;
    border-radius:10px;
`;
const DummyTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding:5px;
    margin-bottom:10px;
`;
const DummyContent=styled.div`
    padding:5px;
    margin-bottom:10px;
`;
const LinkStyle = styled(Link)`
    display:flex;
    text-decoration:none;
`;
const AllComment = styled.p`
    font-size: 18px;
    font-weight:bold;
    padding:10px 20px 0 10px;
`;
// const Wrapper = styled.div`
//     display:flex;
//     flex-direction:column;
//     align-items:flex-start;
// `;

const PostIn = styled.div`
    margin:10px;
`;
const CommentContent = styled.div`
    border:1px solid black;
    padding: 8px;
    margin-top:5px;
    border-radius:10px;
`;
const TextareaComment = styled.textarea`
    margin:10px;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0 5px 0;
    height:60px;
`;
const CommentButton = styled.button`
    padding: 5px 10px;
    border:none;
    border-radius:10px;
`;

export default function PostViewPage() {

    const { id } = useParams();

    return (
        <div>
            <LinkStyle to ="/">
            <TextForm>뒤로가기</TextForm>
            </LinkStyle>
            {dummy.posts.map((post)=>(
                post.id === id && ( <PostIn key={post.id}>
                    <DummyContainer1><DummyTitle>{post.title}</DummyTitle>
                    <DummyContent>{post.content}</DummyContent>
                    </DummyContainer1>
                    <AllComment>댓글</AllComment>
                    {post.comments.map((comment)=>(
                        <CommentContent key={comment.id}>
                            {comment.content}
                        </CommentContent>
                    ))}
                    <TextareaComment placeholder="댓글을 입력하세요"></TextareaComment>
                    <CommentButton>댓글 작성하기</CommentButton>
                </PostIn>)
            ))}
        </div>
    );
}


import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../db/data.json";

const Wrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
`;

const PostContainer = styled.div`
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const ContentText = styled.p`
    font-size: 13px;
    line-height: 1.6;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-top: 24px;
`;

const CommentContainer = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const CommentItem = styled.div`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.posts.find((item) => {
        return item.id === postId;
    });

    return (
        <Wrapper>
            <Container>
                <button
                    onClick={() => navigate("/")}
                    style={{ marginBottom: "16px", cursor: "pointer", border: "none", padding: "5px 10px" }}
                >
                    뒤로 가기
                </button>

                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentContainer>
                    {post.comments && post.comments.map((comment) => {
                        return (
                            <CommentItem key={comment.id}>
                                {comment.content}
                            </CommentItem>
                        );
                    })}
                </CommentContainer>

                <textarea 
                    placeholder="댓글을 입력해주세요"
                    style={{ width: "100%", height: "80px", marginTop: "16px" }}
                />
                <button style={{ marginTop: "8px", cursor: "pointer", border: "none", padding: "5px 10px"}}>
                    댓글 작성하기
                </button>
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
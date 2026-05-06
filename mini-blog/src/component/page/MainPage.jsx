import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../../db/data.json";

const Wrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
`;

const TitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

const PostListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px; /* 리스트 아이템 사이의 간격 */
`;

const PostContainer = styled.div`
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    transition: background 0.2s;
`;

function MainPage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                
                <ButtonWrapper>
                    <button
                        onClick={() => {
                            navigate("/post-write");
                        }}
                        style={{
                            padding: "5px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            border: "1px solid #888",
                            backgroundColor: "#ccc"
                        }}
                    >
                        글 작성하기
                    </button>
                </ButtonWrapper>

                <TitleText>소플의 미니 블로그</TitleText>

                <PostListWrapper>
                    {data.posts && data.posts.map((post) => {
                        return (
                            <PostContainer
                                key={post.id}
                                onClick={() => {
                                    navigate(`/post/${post.id}`);
                                }}
                            >
                                <p style={{ fontSize: "18px", margin: 0 }}>
                                    {post.title}
                                </p>
                            </PostContainer>
                        );
                    })}
                </PostListWrapper>
            </Container>
        </Wrapper>
    );
}

export default MainPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

function PostWritePage(props) {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <h2>소플의 미니 블로그</h2>
                
                <input 
                    type="text" 
                    placeholder="제목을 입력하세요" 
                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }} 
                />
                
                <textarea 
                    placeholder="내용을 입력하세요" 
                    style={{ width: "100%", height: "200px", padding: "8px" }} 
                />

                <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
                    <button
                        onClick={() => {
                            navigate("/post-write");
                        }}
                        style={{
                            padding: "5px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            border: "none",
                            backgroundColor: "#ddd"
                        }}
                    >
                        글 작성하기
                    </button>
                </div>
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
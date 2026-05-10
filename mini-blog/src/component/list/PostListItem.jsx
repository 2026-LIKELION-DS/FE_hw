import styled from "styled-components";

const PostPost = styled.div`
    border: 2px solid lightgrey;
    margin: 30px;
    cursor: pointer;
    border-radius:20px;
    padding-left:40px;
    padding-top:10px;
    padding-bottom:10px;
    // text-align: center;
    width: 95%;
    // margin: 30px auto;

`

function PostListItem({ post, onClick }) {
    return (
        <PostPost onClick={onClick}>
            <h3>{post.title}</h3>
        </PostPost>
    );
}
export default PostListItem;
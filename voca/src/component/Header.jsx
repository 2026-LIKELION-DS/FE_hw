import {Link} from 'react-router-dom'
import styled from "styled-components";

const HeaderCss = styled.div`
    position: relative;
    .menu {
        position: absolute;
        top: 10px;
        right: 0;
    }
    .link {
        border: 1px solid #333;
        padding: 10px;
        margin-left: 10px;
        background-color: #efefef;
        font-weight: bold;
        border-radius: 4px;
    }
`;

export default function Header() {
    return (
    <HeaderCss>
        <h1>
            <Link to="/">영어 단어장 만들기</Link>
        </h1>
        <div className="menu">
            <Link to ="/create_word" className="link">
            단어 추가
            </Link>
            <Link to="/create_day" className="link">
            Day추가
            </Link>
        </div>
    </HeaderCss>
    )
}

import { Link } from "react-router-dom";
import {HeaderMenu, Headerstyle} from '../index.jsx';

export default function Header() {
    return (
        <Headerstyle>
            <h1>
                <Link to="/">영어 단어장 만들기</Link>
            </h1>

            <HeaderMenu>
                <Link to="/create_word" className="link">단어 추가</Link>
                <Link to="/create_day" className="link">Day 추가</Link>
            </HeaderMenu>
        </Headerstyle>
    );
}

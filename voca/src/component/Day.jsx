import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
import styled from "styled-components";

const DayCss = styled.table`
    border-collapse: collapse;
    width: 100%;

    td {
    width: 25%;
    height: 70px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 26px;
    }
    
    td:first-child {
    width: 10%;
    }

`;

export default function Day(){
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return(
        <>
        <h2>Day {day}</h2>
        {words.length===0 && <span>Loading...</span>}
        <DayCss>
            <tbody>
            {words.map((word)=>(
                <Word word={word} key={word.id} />
            ))}
            </tbody>

        </DayCss>
        </>
    );
}
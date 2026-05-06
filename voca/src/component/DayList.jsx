import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const ListDay = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
        flex: 20% 0 0;
        box-sizing: border-box;
        padding: 10px;
    }
    a {
    display: block;
    padding: 20px 0;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    background-color: dodgerblue;
    }
`;

export default function DayList(){
    const days = useFetch("http://localhost:3001/days");

    if (days.length === 0){
        return <span>Loading...</span>;
    }
    return(
        <ListDay>
            {days.map((day)=>(
                <li key={day.id}>
                    <Link to = {`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ListDay>
    );

}
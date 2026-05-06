import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {DayListstyle, DayListItem} from '../index.jsx';


export default function DayList() {
    const days = useFetch("http://127.0.0.1:3001/days");

    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        <DayListstyle>
            {days.map((day) => (
                <DayListItem key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </DayListItem>
            ))}
        </DayListstyle>
    );
}

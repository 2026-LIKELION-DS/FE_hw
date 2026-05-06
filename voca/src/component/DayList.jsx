import { Link } from 'react-router-dom';
import useFetch from '../hooks/usefetch';

export default function DayList() {
    const days = useFetch("http://localhost:3001/days");

    if (days.length === 0){
        return <span>Loading...</span>;
    }

  return (
    <ul className='list_day'>
        {days.map((day) => (
            <li key={day.day}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
    </ul>
  )
}

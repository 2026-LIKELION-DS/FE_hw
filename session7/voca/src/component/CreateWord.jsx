import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {InputArea, Label, Button} from '../index.jsx';

export default function CreateWord() {
    const day = useFetch("http://loclahost:300/days");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (!isLoading && dayRef.current && engRef.current && korRef.current)
            setIsLoading(true);

        const day = dayRef.current.value;
        const eng = engRef.current.value;
        const kor = korRef.current.value;

        fetch("http://loclahost:300/words/", {
            method: "POST", 
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({day, eng, kor, isDone:false,}),
        }).then((res) => {
            if (res.ok) {
                alert("생성이 완료되었습니다!");
                navigate(`/day/${day}`);
                setIsLoading(false);
            }
        });
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <InputArea>
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </InputArea>

            <InputArea>
                <Label>Kor</Label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </InputArea>

            <InputArea>
                <Label>Day</Label>
                <select day={dayRef}>
                    {day.map((day) => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </InputArea>

            <Button style={{opacity: isLoading ? 0.3 : 1, }}>{isLoading ? "Saving..." : "저장"}</Button>
        </form>
    )
}

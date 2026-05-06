import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const CreateWordInput = styled.div`
    margin-bottom: 10px;

    label {
        display: block;
        margin-bottom: 10px;
    }

    input {
        width: 400px;
        height: 40px;
        font-size: 20px;
        padding: 0 10px;
    }

    select {
        width: 400px;
        height: 40px;
        font-size: 20px;
    }
`;

const CreateWordCss = styled.button`
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border: 0 none;
    border-radius: 6px;
    padding: 10px 20px;
    color: #fff;
    background-color: dodgerblue;

`;

export default function CreateWord(){
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e){
        e.preventDefault();

        if (!isLoading && dayRef.current && engRef.current && korRef.current)
            setIsLoading(true);

            const day = Number(dayRef.current.value);
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch("http://localhost:3001/words/", {
                method:"POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDone:false,
                })
            }).then((res)=>{
                if(res.ok){
                    alert("생성이 완료되었습니다!");
                    navigate(`/day/${day}`);
                    setIsLoading(false);
                }
            });
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);


    return(
        <form onSubmit={onSubmit}>
            <CreateWordInput>
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </CreateWordInput>
            <CreateWordInput>
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </CreateWordInput>
            <CreateWordInput>
                <label>Day</label>
                <select ref = {dayRef}>
                    {days.map((day)=>(
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </CreateWordInput>
            <CreateWordCss style={{ opacity: isLoading ? 0.3 : 1,}}>
                {isLoading ? "Saving..." :"저장"}
            </CreateWordCss>

        </form>
    );



}
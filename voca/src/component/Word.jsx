import {useState} from "react";
import styled from "styled-components";

const WordCss = styled.button`
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
const DeleteBtn = styled(WordCss)`
    margin-left: 10px;
    background-color: firebrick;
`;

export default function Word({word: initialWord }){
    const [word, setWord] = useState(initialWord);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(initialWord.isDone);

    if(!word){ return null;}

    function toggleShow(){
        setIsShow((prev)=>!prev);
    }
    function toggleDone(){
        fetch(`http://localhost:3001/words/${word.id}`, {
            method:"PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({
            isDone:!isDone,
        }),
        }).then((res)=>{
            if(res.ok){
                setIsDone((prev)=>!prev);
            }
        });
    }
    function del(){
        if(window.confirm("삭제하시겠습니까?")){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method:"DELETE",
            }).then((res)=>{
                if (res.ok){
                    setWord(null);
                }
            });
        }
    }


    return(
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow ? word.kor : ""}</td>

            <td>
                <WordCss onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</WordCss>
                <DeleteBtn onClick={del}>
                    삭제
                </DeleteBtn>
            </td>
        </tr>
    );
}
// import { useState, useEffect } from 'react';

// export default function useFetch(url) {
//     const [data,setData]= useState([]);

//     useEffect(()=>{
//         fetch(url)
//         .then((res)=>{
//             return res.json();
//         })
//         .then((data)=>{
//             setData(data);
//         });
//     },[url]);
// return data;
// }
// usefetch.jsx
import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("요청 주소:", url); // 1. 실제로 어떤 주소로 요청 가는지 확인
        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("서버 응답 에러");
                return res.json();
            })
            .then((data) => setData(data))
            .catch((err) => {
                console.error("여기가 진짜 에러 원인:", err); // 2. 에러의 정체를 콘솔에 출력
            });
    }, [url]);

    return data;
}
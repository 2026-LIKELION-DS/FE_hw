const timeState = document.querySelector(".manage-title");
function updateTimer(){

    const realTime = document.getElementById("realTime");

    const now = new Date();

    const openTime=new Date();
    openTime.setHours(9,0,0);
    const closeTime=new Date();
    closeTime.setHours(23,0,0);



    if (now < openTime){
        const diff = openTime - now;
        let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let m = Math.floor((diff / (1000 * 60)) % 60);
        let s = Math.floor((diff / 1000) % 60);
        realTime.innerHTML=`금일 오픈까지 남은 시간: ${h}:${m}:${s}`;
        timeState.textContent="운영 전"
    }else if(openTime <= now && now < closeTime){
        const diff = closeTime - now;
        let h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let m = Math.floor((diff / (1000 * 60)) % 60);
        let s = Math.floor((diff / 1000) % 60);
        realTime.innerHTML=`금일 마감까지 남은 시간: ${h}:${m}:${s}`;
        timeState.textContent="운영 중"
    }else{
        realTime.innerHTML='금일 마감';
        timeState.textContent="마감 후"
    }

}

setInterval(updateTimer, 1000);




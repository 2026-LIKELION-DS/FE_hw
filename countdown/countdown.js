function updateTimer(){
    const now=new Date();

    //운영 시간 설정
    const openTime=new Date().setHours(7,0,0,0);
    const closeTime=new Date().setHours(23,0,0,0);

    const statusTxt=document.getElementById("statusTxt");
    const timerDisplay=document.getElementById("timer");

    let diff;
    let timeTxt="";

    if(now<openTime) {
        //운영전
        timeTxt="금일 오픈까지 남은 시간:";
        diff=openTime-now;
    } else if(now<closeTime) {
        //운영중
        timeTxt="금일 마감까지 남은 시간:";
        diff=closeTime-now;
    } else {
        //마감 후
        statusTxt.innerText="금일 마감";
        timerDisplay.innerText="";
        return;
    }
    //남은 시간은 시:분:초로 전환
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    statusTxt.innerText = timeTxt;
    timerDisplay.innerText = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
//1초마다 함수 실행
setInterval(updateTimer, 1000);
updateTimer();

function updateCountdown() {
    const now = new Date();
    
    // 운영 시간 설정 (7시 ~ 23시)
    const openTime = new Date();
    openTime.setHours(7, 0, 0, 0);

    const closeTime = new Date();
    closeTime.setHours(23, 0, 0, 0);

    const statusText = document.getElementById('current-status');
    const messageText = document.getElementById('timer-message');
    const timerDisplay = document.getElementById('timer-display');

    let targetTime;

    if (now < openTime) {
        statusText.innerText = "운영 전";
        messageText.innerText = "금일 오픈까지 남은 시간:";
        targetTime = openTime;
    } 
    else if (now >= openTime && now < closeTime) {
        statusText.innerText = "운영 중";
        messageText.innerText = "금일 마감까지 남은 시간:";
        targetTime = closeTime;
    } 
    else {
        statusText.innerText = "마감 후";
        messageText.innerText = "";
        timerDisplay.innerText = "금일 마감";
        return;
    }


    const diff = targetTime - now;

    const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = String(Math.floor((diff / 1000) % 60));

    timerDisplay.innerText = `${hours}:${minutes}:${seconds}`;
}


setInterval(updateCountdown, 1000);

updateCountdown();
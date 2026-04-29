function updateTimer() {
    const now = new Date();
    
    const openTime = new Date();
    openTime.setHours(7, 0, 0, 0); 
    
    const closeTime = new Date();
    closeTime.setHours(23, 0, 0, 0);

    let diff; 

    if (now < openTime) {
        // 1. 운영 전
        diff = openTime - now;
        statusMsg.innerText = "금일 오픈까지 남은 시간:";
        timerDisplay.innerText = formatTime(diff);
    } 
    else if (now < closeTime) {
        // 2. 운영 중
        diff = closeTime - now;
        statusMsg.innerText = "금일 마감까지 남은 시간:";
        timerDisplay.innerText = formatTime(diff);
    } 
    else {
        // 3. 마감 후
        statusMsg.innerText = "금일 마감";
        timerDisplay.innerText = "";
    }
}

const statusMsg = document.querySelector('.description');
const timerDisplay = document.querySelector('.timer');

function formatTime(ms) {
    let h = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let m = Math.floor((ms / (1000 * 60)) % 60);
    let s = Math.floor((ms / 1000) % 60);
    
    return `${h}:${m}:${s}`;
}

setInterval(updateTimer, 1000);

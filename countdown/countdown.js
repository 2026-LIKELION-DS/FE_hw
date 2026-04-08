const timeAttack = document.querySelector(".timeattack");

const openHour = 7; 
const openMinute = 0; 

const closeHour = 23; 
const closeMinute = 0; 

function addZero(num) {
  return String(num).padStart(2, "0");
}

function formatTime(diff) {
  const totalSeconds = Math.floor(diff / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

function updateCountdown() {
  const now = new Date();

  const openTime = new Date();
  openTime.setHours(openHour, openMinute, 0, 0);

  const closeTime = new Date();
  closeTime.setHours(closeHour, closeMinute, 0, 0);

  
  if (now < openTime) {
    const diff = openTime - now;
    timeAttack.textContent = `금일 오픈까지 남은 시간: ${formatTime(diff)}`;
  }
  else if (now < closeTime) {
    const diff = closeTime - now;
    timeAttack.textContent = `금일 마감까지 남은 시간: ${formatTime(diff)}`;
  }
  else {
    timeAttack.textContent = "금일 마감";
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);


function updateCountdown() {
  const target = new Date("September 13, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = target - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("timer").innerHTML =
    `${days} dagar ${hours} timmar ${minutes} minuter`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
.logo img {
  animation: pulse 4s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.9;
  }

  50% {
    transform: scale(1.08);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0.9;
  }
}

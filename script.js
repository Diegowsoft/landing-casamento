// Contagem regressiva
const countdown = () => {
    const targetDate = new Date("2035-02-28T00:00:00").getTime();
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      daysElement.textContent = String(days).padStart(2, "0");
      hoursElement.textContent = String(hours).padStart(2, "0");
      minutesElement.textContent = String(minutes).padStart(2, "0");
      secondsElement.textContent = String(seconds).padStart(2, "0");
  
      if (difference <= 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "<h2>Chegou o grande dia!</h2>";
      }
    };
  
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  };
  
  // Formulário RSVP
  document.getElementById("rsvp-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Presença confirmada com sucesso!");
    e.target.reset();
  });
  
  // Formulário de Recados
  document.getElementById("message-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Recado enviado com sucesso!");
    e.target.reset();
  });
  
  // Iniciar contagem regressiva
  countdown();
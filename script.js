// Set the target date for the event
const eventDate = new Date("2025-01-15T23:59:59").getTime();

// Calculate preloaded timer values
function calculateTimeLeft() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  return {
    days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    timeLeft,
  };
}

// Preload the timer
function preloadTimer() {
  const { days, hours, minutes, seconds } = calculateTimeLeft();

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

// Timer function to decrement values
function updateTimer() {
  const { days, hours, minutes, seconds, timeLeft } = calculateTimeLeft();

  // Display the time
  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

  // Stop the timer if the date is reached
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "<h3>🎉 WELCOME &nbsp;MISSY! 🎉<h3>";
    document.getElementById("disappear").innerText = "";
    document.getElementById("title").innerHTML = "🛬 She's here 🛬";
  }
}

// Preload the timer immediately
preloadTimer();

// Start the timer interval
const timerInterval = setInterval(updateTimer, 1000);

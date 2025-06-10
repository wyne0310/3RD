let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 4000);

// Emoji Pop Animation
const emojis = [
  "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎",
  "💖", "💗", "💓", "💞", "💕", "❣️", "💘", "💝",
  "💐", "🌸", "🌼", "🌻", "🌹", "🌺", "🌷", "🪷", 
  "🏵️", "🍀", "🍃", "🍂", "🍁"];

const body = document.body;

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.top = Math.random() * 100 + "vh";
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  
  body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 3000); // match pop animation duration
}

// Create a popping emoji every 700ms
setInterval(createEmoji, 700);

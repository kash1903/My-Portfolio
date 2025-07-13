function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themeToggle = document.getElementById("theme-toggle"); // Button
const themeIcon = document.getElementById("theme-icon");     // Image
const profilePic = document.getElementById("profile-pic");   // Profile image

// --- 1. On page load: Check stored preference ---
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "./assets/moon.png";
    profilePic.src = "./assets/dark-profile.png";
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.src = "./assets/sun.png";
    profilePic.src = "./assets/pp3.PNG";
  }

  // --- 👇 Typing effect starts after theme is applied ---
  typeName();
});

// --- 2. On theme toggle ---
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  // Update icon and profile
  themeIcon.src = isDark ? "./assets/moon.png" : "./assets/sun.png";
  profilePic.src = isDark ? "./assets/dark-profile.png" : "./assets/pp3.PNG";

  // Store preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


// --- ✅ Typing animation for name ---
const text = "K A Subramanian";
let index = 0;
const typingElement = document.getElementById("typing-name");

function typeNameLoop() {
  if (!typingElement) return;

  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeNameLoop, 150); // Typing speed
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      index = 0;
      typeNameLoop(); // Restart typing
    }, 2000); // Wait 2s before retyping
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.src = "./assets/moon.png";
    profilePic.src = "./assets/dark-profile.png";
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.src = "./assets/sun.png";
    profilePic.src = "./assets/pp3.PNG";
  }

  // 🔁 Start looping animation
  typeNameLoop();
});


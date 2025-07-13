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
    profilePic.src = "./assets/dark-profile.png"; // your dark mode profile
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.src = "./assets/sun.png";
    profilePic.src = "./assets/pp3.PNG"; // your light mode profile
  }
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





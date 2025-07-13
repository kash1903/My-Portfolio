function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const themeToggle = document.getElementById("theme-toggle"); // button
const themeIcon = document.getElementById("theme-icon");     // sun/moon image
const profilePic = document.getElementById("profile-pic");   // profile image

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  // Change icon (sun/moon)
  themeIcon.src = isDark ? "./assets/moon.png" : "./assets/sun.png";

  // Change profile picture
  profilePic.src = isDark ? "./assets/dark-profile.png" : "./assets/pp3.PNG";
});




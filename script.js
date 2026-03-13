const menuToggle = document.querySelector(".menu-toggle");
const menuOverlay = document.querySelector(".menu-overlay");
const menuQuit = document.querySelector(".menu-quit");

menuToggle.addEventListener("click", () => {
  menuOverlay.classList.remove("hidden");
  document.body.classList.add("menu-open");
});

menuQuit.addEventListener("click", () => {
  menuOverlay.classList.add("hidden");
  document.body.classList.remove("menu-open");
});

// МОДАЛ
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function outsideClick(e) {
  if (e.target.id === "modal") closeModal();
}

// БУРГЕР МЕНЮ
function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// SPA
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// СЛАЙДЕР
let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
let index = 0;

function nextSlide() {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slide").src = images[index];
}

// АВТО
setInterval(nextSlide, 3000);

// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}

// LOCAL STORAGE
function saveData(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  alert("Сақталды!");
}

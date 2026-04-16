function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function outsideClick(e) {
  if (e.target.id === "modal") closeModal();
}

let images = [
  "images/burabay.jpg",
  "images/charyn.jpg",
  "images/kolsai.jpg",
  "images/astana.jpg",
  "images/almaty.jpg"
];

let index = 0;

function nextSlide() {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slide").src = images[index];
}

setInterval(nextSlide, 3000);

function toggleDark() {
  document.body.classList.toggle("dark");
}

function saveData(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  localStorage.setItem("user", name);
  alert("Сақталды!");
}

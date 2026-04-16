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
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Burabay_lake.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/1c/Charyn_Canyon.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kolsai_Lake.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a3/Astana_skyline.jpg"
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

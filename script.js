// SPA navigation
function showPage(page){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page).classList.add('active');
}

// MODAL
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

function openModal(){
  modal.style.display = "block";
}

closeModal.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if(e.target == modal){
    modal.style.display = "none";
  }
}

// BURGER MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.onclick = () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// SLIDER
let images = ["images/1.jpg","images/2.jpg","images/3.jpg"];
let index = 0;

function showSlide(){
  document.getElementById("slide").src = images[index];
}

function nextSlide(){
  index = (index + 1) % images.length;
  showSlide();
}

function prevSlide(){
  index = (index - 1 + images.length) % images.length;
  showSlide();
}

// AUTO SLIDE
setInterval(nextSlide, 3000);

// DARK MODE
function toggleDark(){
  document.body.classList.toggle("dark");
}

// LOGIN + LOCALSTORAGE
function login(){
  let name = document.getElementById("username").value;
  localStorage.setItem("user", name);
  alert("Қош келдіңіз " + name);
  modal.style.display = "none";
}

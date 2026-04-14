// SPA MENU
const links = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", () => {
    pages.forEach(p => p.classList.remove("active"));
    links.forEach(l => l.classList.remove("active"));

    document.getElementById(link.dataset.page).classList.add("active");
    link.classList.add("active");
  });
});

// BURGER MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.onclick = () => {
  nav.classList.toggle("show");
};

// MODAL
const modal = document.getElementById("modal");
document.getElementById("openModal").onclick = () => modal.style.display = "block";
document.getElementById("closeModal").onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// SLIDER IMAGES
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Almaty_Medeu.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5d/Burabay_National_Park.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9e/Charyn_Canyon.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Baiterek_Tower_Astana.jpg"
];

let i = 0;
const img = document.getElementById("slideImg");

document.getElementById("next").onclick = () => {
  i = (i + 1) % images.length;
  img.src = images[i];
};

document.getElementById("prev").onclick = () => {
  i = (i - 1 + images.length) % images.length;
  img.src = images[i];
};

// AUTO SLIDE
setInterval(() => {
  i = (i + 1) % images.length;
  img.src = images[i];
}, 4000);

// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// FORM
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Жіберілді!");
});

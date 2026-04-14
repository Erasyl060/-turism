function show(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* MENU */
function toggleMenu(){
  let nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* MODAL */
let modal = document.getElementById("modal");

function openModal(){ modal.style.display="block"; }
function closeModal(){ modal.style.display="none"; }

window.onclick = e => {
  if(e.target == modal) modal.style.display="none";
}

/* LOGIN */
function login(){
  let name = document.getElementById("name").value;
  localStorage.setItem("user", name);
  alert("Қош келдің, " + name);
  closeModal();
}

/* SLIDER */
let imgs = ["images/1.jpg","images/2.jpg","images/3.jpg"];
let i = 0;

function showImg(){
  document.getElementById("img").src = imgs[i];
}

function next(){
  i = (i+1)%imgs.length;
  showImg();
}

function prev(){
  i = (i-1+imgs.length)%imgs.length;
  showImg();
}

/* AUTO SLIDE */
setInterval(next, 2500);

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* CONTACT VALIDATION */
function send(){
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  if(email.includes("@")){
    msg.innerHTML = "✔ Жіберілді!";
  }else{
    msg.innerHTML = "❌ Email дұрыс емес";
  }
}

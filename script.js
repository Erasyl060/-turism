// SPA NAVIGATION (FIX)
function show(id){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// MODAL FIX
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("close");

openBtn.onclick = function(){
  modal.style.display = "block";
};

closeBtn.onclick = function(){
  modal.style.display = "none";
};

window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none";
  }
};

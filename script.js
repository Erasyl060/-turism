// SAVE NAME
function saveName(){
  const name=document.getElementById("nameInput").value;
  localStorage.setItem("name",name);
  showToast("Сақталды!");
  document.getElementById("welcome").innerText="Қош келдің, "+name+" 🇰🇿";
}

// SPA NAVIGATION
function show(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// FAVORITES
let favorites=[];
function fav(place){
  favorites.push(place);
  showToast(place+" қосылды ❤️");
  localStorage.setItem("fav",JSON.stringify(favorites));
}

// TOAST
function showToast(text){
  const t=document.getElementById("toast");
  t.innerText=text;
  t.style.display="block";
  setTimeout(()=>t.style.display="none",2000);
}

// CHATBOT (SIMPLE AI LOGIC)
function sendMsg(){
  const input=document.getElementById("msg");
  const box=document.getElementById("chatBox");

  let msg=input.value;
  box.innerHTML+="<p>👤: "+msg+"</p>";

  let reply="Мен түсінбедім 🤖";

  if(msg.includes("Алматы")) reply="Алматы — ең әдемі қала!";
  if(msg.includes("Бурабай")) reply="Бурабай — табиғаты керемет көлдер аймағы!";
  if(msg.includes("Қазақстан")) reply="Қазақстан — үлкен әрі әдемі ел 🇰🇿";

  box.innerHTML+="<p>🤖: "+reply+"</p>";
  input.value="";
}

// LOAD LOCAL STORAGE
window.onload=()=>{
  let name=localStorage.getItem("name");
  if(name){
    document.getElementById("welcome").innerText="Қош келдің, "+name+" 🇰🇿";
  }
};

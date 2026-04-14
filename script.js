const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("close");

const title = document.getElementById("title");
const switchBtn = document.getElementById("switch");

let isLogin = true;

// OPEN
openBtn.onclick = () => {
  modal.style.display = "block";
};

// CLOSE
closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// SWITCH LOGIN / REGISTER
switchBtn.onclick = () => {
  isLogin = !isLogin;

  if (isLogin) {
    title.innerText = "Кіру";
    switchBtn.innerText = "Тіркелу жасау";
  } else {
    title.innerText = "Тіркелу";
    switchBtn.innerText = "Кіру";
  }
};

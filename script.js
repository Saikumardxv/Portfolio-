// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light-mode");
};

// Typing Animation
const text = "Web Developer";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

document.querySelector(".typing").innerHTML = "";
type();

// to top
let up = document.querySelector(".up");
window.onscroll = () => {
  if (window.scrollY >= 250) {
    up.style.cssText = "transform: scale(1)";
  } else {
    up.style.cssText = "transform: scale(0)";
  }
};
up.onclick = () => {
  window.scrollTo(0, 0);
};

// toggle
let bars = document.querySelector(".header .con .toggle i");
let list = document.querySelector(".header .con .links ul");
bars.addEventListener("click", () => {
  list.classList.toggle("active");
});

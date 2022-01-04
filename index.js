let acordeon = document.querySelector("#acordeon");
let panel = document.querySelector("#panel");

acordeon.addEventListener('click', function () {
  this.classList.toggle('active');
  slideDown();
});

function slideDown() {
  if (panel.style.maxHeight == 0) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } else {
    panel.style.maxHeight = null;
  }
}
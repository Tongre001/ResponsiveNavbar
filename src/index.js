import "./styles.scss";

window.onload = function() {
  document.getElementById("navtoggle").addEventListener("click", function() {
    var classapplied = document.getElementById("nav").className;
    if (classapplied === "visible") {
      document.getElementById("nav").className = "hidden";
    } else {
      document.getElementById("nav").className = "visible";
    }
  });
};

function ToggleAnimation(x) {
  x.classList.toggle("change");
}

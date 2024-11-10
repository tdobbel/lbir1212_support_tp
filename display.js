window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
function toggleDisplay(button) {
    let sol = button.parentElement.parentElement.nextElementSibling;
    if (sol.className != "solution") return;
    if (sol.style.display === "none") {
        sol.style.display = "block";
        button.innerHTML = "&#9650;";
    } else {
        sol.style.display = "none";
        button.innerHTML = "&#9660;";
    }
}

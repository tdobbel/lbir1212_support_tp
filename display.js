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

function toggleAll() {
    let divs = document.getElementsByClassName("display-button-div");
    for (let div of divs) {
        let button = div.firstElementChild;
        toggleDisplay(button);
    }
}

window.onkeydown = function (e) {
    if (e.keyCode == 17) {
        toggleAll();
    }
}

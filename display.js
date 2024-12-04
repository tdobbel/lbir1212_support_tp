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

function invertColors() {
    let body = document.body;
    to_dark = body.style.backgroundColor === "white";
    body.style.backgroundColor = to_dark ? "black" : "white";
    body.style.color = to_dark ? "white" : "black";
    let imgs = document.getElementsByTagName("img");
    for (let img of imgs) {
        img.style.filter = to_dark ? "invert(0)" : "invert(1)";
    }
}

window.onkeydown = function (e) {
    if (e.key === "t") {
        toggleAll();
    }
    else if (e.key === "i") {
        invertColors();
    }
}

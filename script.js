let input = document.querySelector(".input");
let items = document.querySelectorAll(".item");
let itemsp = document.querySelectorAll(".item > p");

input.addEventListener("input",() => {
    for (let i = 0 ; i < itemsp.length ; i++) {
        if (input.value == itemsp[i].innerHTML.slice(0,input.value.length)) {
            items[i].style = "display: block;";
        }
        else {
            items[i].style.display = "none";
        }
    }
});
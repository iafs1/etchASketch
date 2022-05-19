for (let i = 0; i < 16*16; i++) {
    document.querySelector(".container").appendChild(document.createElement("div"));
    console.log("test");
}

const squares = document.querySelectorAll(".container > div");

squares.forEach((div) => {
    div.addEventListener("mouseover", () => (div).classList.add("hovering"))
});
function mainLoop(grid_size) {
    for (let i = 0; i < grid_size * grid_size; i++) {
        document.querySelector(".container").appendChild(document.createElement("div"));
    }
    
    let new_width = (100/grid_size).toFixed(2);
    const squares = document.querySelectorAll(".container > div");
    
    squares.forEach((div) => {
        div.addEventListener("mouseover", () => (div).classList.add("hovering")),
        div.style.width = `${new_width}%`,
        div.style["padding-bottom"] = `${new_width}%`;
    });

}

function changeGrid(grid_size) {
    if (!Number.isInteger(grid_size) && !(grid_size >= 1 && grid_size <= 100)) {
        alert("Grid size should be an integer between 1 and 100.");
        return;
    }

    document.querySelector(".container").innerHTML = "";
    mainLoop(grid_size);
}

let grid_size;
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    grid_size = prompt("How many squares?"),
    changeGrid(grid_size);
});

mainLoop(16);
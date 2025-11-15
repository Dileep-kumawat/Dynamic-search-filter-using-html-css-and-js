// 3. Dynamic Search Filter

// Given a list of names/products:

// Filter items as the user types

// Show “No results found” when empty


const items = ["Apple", "Banana", "Orange", "Grapes"];
let filteredItems = [...items];
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

function liAdd(empty = false) {
    ul.innerHTML = "";
    if (empty) {
        let li = document.createElement("li");
        li.textContent = "No results found";
        ul.appendChild(li);
    } else {
        filteredItems.forEach((e) => {
            let li = document.createElement("li");
            li.textContent = e;
            ul.appendChild(li);
        })
    }
}

liAdd();

inp.addEventListener("input", () => {
    filteredItems = items.filter((e) => {
        return e.toLowerCase().includes(inp.value.toLowerCase());
    });
    if (filteredItems.length > 0) {
        liAdd();
    } else {
        liAdd(true);
    }
})
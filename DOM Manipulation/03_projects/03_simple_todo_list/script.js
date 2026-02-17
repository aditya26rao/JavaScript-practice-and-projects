let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");
let savedTask = localStorage.getItem("tasks");

let list = savedTask ? JSON.parse(savedTask) : [
        { id: "1", text: "Go to Gym" },
        { id: "2", text: "Buy Groceries" },
        { id: "3", text: "Finish Homework" },
        { id: "4", text: "Call Mom" },
    ];

function renderList(arr) {
    listContainer.innerHTML = ""; // clear before re-render
    arr.map((item) => {
        let divElem = document.createElement("div");
        divElem.classList.add("list");

        divElem.innerHTML = `
            <p>${item.text}</p>
        `;
        let buttonElem = document.createElement("button");
        buttonElem.innerHTML = "❌";
        buttonElem.classList.add("deleteBtn");

        divElem.appendChild(buttonElem);

        buttonElem.addEventListener("click", () => {
            handleRemoveList(item.id);
        });

        listContainer.append(divElem);
    });
}

renderList(list);

function handleAddList() {
    if (!addInput.value.trim()) return; // prevent empty input

    let obj = {
        id: (list.length + 1).toString(),
        text: addInput.value,
    };

    list.unshift(obj);
    addInput.value = ""; // clear input
    updateStorage();
    renderList(list); // re-render with new task
}

function handleRemoveList(id) {
    let filteredList = list.filter((item) => {
        return item.id !== id;
    });
    list = filteredList;
    updateStorage();
    renderList(list);
}

function updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(list));
}
addBtn.addEventListener("click", handleAddList);

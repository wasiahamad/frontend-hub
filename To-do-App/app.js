

// Selecting elements
const input = document.querySelector("#task-input");
const button = document.querySelector("#add-btn");
const list = document.querySelector("#task-list");
const AllClearBtn = document.querySelector("#clear-btn");

// Function Add to new Task
function addTask() {
    const value = input.value.trim();
    if (value) {
        // list item
        const li = document.createElement("li");
        
        // Text Element
        const taskText = document.createElement("span");
        taskText.textContent = value;

        // delete icon 
        const deleteIcon = document.createElement("i");
        deleteIcon.classList = "fa-regular fa-trash-can";
        deleteIcon.addEventListener("click", () => {
            li.remove();
        });

        // checkox image 

        const checkbox = document.createElement("img");
        checkbox.src = "./images/unchecked.png";
        checkbox.addEventListener("click", () => {
            if (checkbox.classList.toggle("completed")) {
                checkbox.src = "./images/checked.png";
                taskText.classList.add("completed");
            } else {
                checkbox.src = "./images/unchecked.png";
                taskText.classList.remove("completed");
            }
        });

        // Append elements to list item
        li.appendChild(taskText);
        li.appendChild(checkbox);
        li.appendChild(deleteIcon);

        // append elemnet to ul
        list.appendChild(li);

        // Clear the input field
        input.value = "";
    } else {
        alert("Please enter a task");
    }
}

// All clear function
function clearAll() {
    list.innerHTML = "";
};

// Event Listener for button click To add Task
button.addEventListener("click", () => {
    addTask();
});

// Add task on Enter key press
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// All Clear add event listner
AllClearBtn.addEventListener("click", () => {
    clearAll();
    console.log("all clear");
});







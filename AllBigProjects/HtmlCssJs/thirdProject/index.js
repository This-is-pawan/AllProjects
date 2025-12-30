// Get elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add todo
addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn">Delete</button>
    `;

    // Complete task on click
    li.querySelector("span").addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });

    todoList.appendChild(li);
    input.value = "";
  }
});

// Enter key adds todo
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

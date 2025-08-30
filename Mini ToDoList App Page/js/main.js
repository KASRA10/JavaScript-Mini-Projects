document.addEventListener("DOMContentLoaded", function () {
  const taskLists = [];
  const listItems = document.getElementById("to-do-list");
  const input = document.querySelector("input[type='text']");
  const button = document.getElementById("button");

  button.addEventListener("click", function () {
    const inputValue = input.value.trim();
    if (!inputValue) return;

    taskLists.push(inputValue);
    input.value = "";

    // Clear existing list
    listItems.innerHTML = "";

    // Loop through taskLists and create <li> for each
    taskLists.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      // Add double-click to remove
      li.addEventListener("dblclick", function () {
        taskLists.splice(index, 1); // Remove from array
        listItems.removeChild(li); // Remove from DOM
      });

      listItems.appendChild(li);
    });
  });
});

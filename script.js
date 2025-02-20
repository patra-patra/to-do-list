document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("textInput");
    const addButton = document.getElementById("addButton");
    const outputContainer = document.getElementById("outputContainer");

    addButton.addEventListener("click", function () {
        const text = inputField.value.trim();

        if (text !== "") {
            const newItem = document.createElement("div");
            newItem.classList.add("added-item");

            // Создаём контейнер для кнопок
            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("task-buttons");

            // Создаём горизонтальную линию
            const separator = document.createElement("hr");
            separator.style.flexGrow = "1";
            separator.style.border = "none";
            separator.style.height = "2px";
            separator.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            separator.style.marginRight = "10px";

            // Кнопка редактирования
            const editButton = document.createElement("button");
            editButton.textContent = "🖊";
            editButton.classList.add("task-button");

            // Кнопка удаления
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "×";
            deleteButton.classList.add("task-button");

            // Стили для кнопок
            editButton.style.width = "30px";
            editButton.style.height = "30px";
            deleteButton.style.width = "30px";
            deleteButton.style.height = "30px";

            // Устанавливаем небольшой отступ между кнопками
            editButton.style.marginRight = "5px";
            deleteButton.style.marginLeft = "5px";

            // Логика редактирования
            const taskText = document.createElement("div");
            taskText.textContent = text;
            taskText.classList.add("task-text");
            taskText.contentEditable = "false";

            editButton.addEventListener("click", function (event) {
                event.stopPropagation();
                if (taskText.contentEditable === "false") {
                    taskText.contentEditable = "true";
                    taskText.focus();
                    editButton.textContent = "✔";
                } else {
                    taskText.contentEditable = "false";
                    editButton.textContent = "🖊";
                }
            });

            deleteButton.addEventListener("click", function (event) {
                event.stopPropagation();
                newItem.remove();
            });

            // Добавляем элементы в контейнер кнопок
            buttonContainer.appendChild(separator);
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);

            // Добавляем элементы в задачу
            newItem.appendChild(buttonContainer);
            newItem.appendChild(taskText);

            // Добавляем задачу в контейнер
            outputContainer.appendChild(newItem);

            // Очищаем поле ввода
            inputField.value = "";
            outputContainer.scrollTop = outputContainer.scrollHeight;
        }
    });

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    outputContainer.addEventListener("click", function (event) {
        let task = event.target.closest(".added-item");
        if (task && !event.target.closest("button") && event.target !== task.querySelector(".task-text")) {
            task.classList.toggle("clicked");
        }
    });
});
document.addEventListener("mousemove", (event) => {
    let parallaxImage = document.querySelector(".parallax-image");

    let x = (event.clientX / window.innerWidth - 0.5) * 20; // Смещение по горизонтали
    let y = (event.clientY / window.innerHeight - 0.5) * 10; // Смещение по вертикали

    parallaxImage.style.transform = `translate(${x}px, ${y}px)`;
});
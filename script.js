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
            separator.style.flexGrow = "1"; // Линия будет занимать всё пространство перед кнопками
            separator.style.border = "none";
            separator.style.height = "1px";
            separator.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            separator.style.marginRight = "5px"; // Отступ справа перед кнопками

            // Кнопка редактирования
            const editButton = document.createElement("button");
            editButton.textContent = "🖊";
            editButton.addEventListener("click", function (event) {
                event.stopPropagation(); // Остановить всплытие клика

                if (taskText.contentEditable === "false") {
                    taskText.contentEditable = "true";
                    taskText.focus();
                    editButton.textContent = "✔"; // Изменяем иконку
                } else {
                    taskText.contentEditable = "false";
                    editButton.textContent = "🖊"; // Возвращаем иконку
                }
            });

            // Кнопка удаления
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.addEventListener("click", function (event) {
                event.stopPropagation(); // Остановить всплытие клика
                newItem.remove();
            });

            // Добавляем элементы в контейнер кнопок
            buttonContainer.appendChild(separator);
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);

            // Создаём контейнер для текста
            const taskText = document.createElement("div");
            taskText.textContent = text;
            taskText.classList.add("task-text");
            taskText.contentEditable = "false";

            // Добавляем элементы в задачу
            newItem.appendChild(taskText);
            newItem.appendChild(buttonContainer);

            // Добавляем задачу в контейнер
            outputContainer.appendChild(newItem);

            // Очищаем поле ввода
            inputField.value = "";
            outputContainer.scrollTop = outputContainer.scrollHeight;
        }
    });

    // Добавляем возможность нажимать Enter вместо кнопки
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    outputContainer.addEventListener("click", function (event) {
        let task = event.target.closest(".added-item"); // Находим ближайший родительский элемент .added-item
        if (task) {
            task.classList.toggle("clicked"); // Добавляем/убираем класс
        }
    });
});

﻿document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("textInput");
    const addButton = document.getElementById("addButton");
    const outputContainer = document.getElementById("outputContainer");

    addButton.addEventListener("click", function () {
        const text = inputField.value.trim();

        if (text !== "") {
            const newItem = document.createElement("div");
            newItem.classList.add("added-item");

            // Создаём контейнер для текста
            const taskText = document.createElement("span");
            taskText.textContent = text;
            taskText.classList.add("task-text");
            taskText.contentEditable = "false";

            // Создаём контейнер для кнопок
            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("task-buttons");

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

            // Добавляем кнопки в контейнер
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);

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

    // Добавляем возможность смены цвета при клике на задачу
    outputContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("added-item")) {
            event.target.classList.toggle("clicked");
        }
    });
});

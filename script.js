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

            // Создаём элемент для статуса задачи
            const statusElement = document.createElement("div");
            statusElement.classList.add("task-status");
            statusElement.textContent = "В процессе"; // По умолчанию задача "в процессе"

            // Создаём горизонтальную линию
            const separator = document.createElement("hr");
            separator.style.flexGrow = "1";
            separator.style.border = "none";
            separator.style.height = "2px";
            separator.style.backgroundColor = "#474972";
            separator.style.marginRight = "10px";
            separator.style.marginTop = "8px";

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
            buttonContainer.appendChild(statusElement); // Добавляем статус задачи
            buttonContainer.appendChild(separator);
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

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });

    // Обработчик для изменения цвета, зачеркивания текста и статуса задачи
    outputContainer.addEventListener("click", function (event) {
        let task = event.target.closest(".added-item");
        if (task && !event.target.closest("button")) {
            // Переключаем класс для изменения цвета
            task.classList.toggle("clicked");

            // Переключаем класс для зачеркивания текста
            const taskText = task.querySelector(".task-text");
            taskText.classList.toggle("strikethrough");

            // Меняем статус задачи
            const statusElement = task.querySelector(".task-status");
            if (task.classList.contains("clicked")) {
                statusElement.textContent = "Выполнено";
            } else {
                statusElement.textContent = "В процессе";
            }
        }
    });
});

document.addEventListener("mousemove", (event) => {
    let phone = document.querySelector(".parallax-image");
    let net = document.querySelector(".parallax-background");
    let books = document.querySelector(".parallax-books");
    let plant = document.querySelector(".parallax-plant");

    // Параллакс для телефона
    let xPhone = (event.clientX / window.innerWidth - 0.5) * 30;
    let yPhone = (event.clientY / window.innerHeight - 0.5) * 20;

    // Параллакс для сетки
    let xBg = (event.clientX / window.innerWidth - 0.5) * 10;
    let yBg = (event.clientY / window.innerHeight - 0.5) * 5;

    // Параллакс для книг
    let xBooks = (event.clientX / window.innerWidth - 0.5) * 20;
    let yBooks = (event.clientY / window.innerHeight - 0.5) * 15;

    // Параллакс для растения
    let xPlant = (event.clientX / window.innerWidth - 0.5) * 10;
    let yPlant = (event.clientY / window.innerHeight - 0.5) * 5;

    // Применяем смещение
    if (phone) phone.style.transform = `translate(${xPhone}px, ${yPhone}px)`;
    if (net) net.style.transform = `translate(${xBg}px, ${yBg}px)`;
    if (books) books.style.transform = `translate(${xBooks}px, ${yBooks}px)`;
    if (plant) plant.style.transform = `translate(${xPlant}px, ${yPlant}px)`;
});
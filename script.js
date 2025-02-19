document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("textInput");
    const addButton = document.getElementById("addButton");
    const outputContainer = document.getElementById("outputContainer");

    addButton.addEventListener("click", function () {
        const text = inputField.value.trim(); // Убираем лишние пробелы

        if (text !== "") {
            // Создаем новый div
            const newItem = document.createElement("div");
            newItem.classList.add("added-item");
            newItem.textContent = text;

            // Добавляем обработчик клика для переключения цвета
            newItem.addEventListener("click", function () {
                newItem.classList.toggle("clicked"); // Переключает класс
            });

            // Добавляем в контейнер
            outputContainer.appendChild(newItem);

            // Очищаем поле ввода
            inputField.value = "";

            // Автоматическая прокрутка вниз при добавлении новой задачи
            outputContainer.scrollTop = outputContainer.scrollHeight;
        }
    });

    // Добавляем возможность нажимать Enter вместо кнопки
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});

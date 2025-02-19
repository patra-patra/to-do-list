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

            // Флаг состояния (true - бледный, false - оригинальный)
            let isFaded = false;

            // Добавляем обработчик клика для переключения цвета
            newItem.addEventListener("click", function () {
                if (isFaded) {
                    newItem.style.background = "#D36D88"; // Исходный цвет
                } else {
                    newItem.style.background = "#E09BAF"; // Бледный цвет
                }
                isFaded = !isFaded; // Переключаем состояние
            });

            // Добавляем в контейнер
            outputContainer.appendChild(newItem);

            // Очищаем поле ввода
            inputField.value = "";
        }
    });

    // Добавляем возможность нажимать Enter вместо кнопки
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});

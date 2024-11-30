// Получение элементов
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.querySelector(".close");

// Открытие модального окна
openModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Закрытие модального окна
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрытие окна при клике вне его
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

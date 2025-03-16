// Получаем элементы
const container = document.getElementById("scroll-wrapper");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Функция для прокрутки контейнера влево
prevButton.addEventListener("click", () => {
  container.scrollLeft -= 600; // Прокручиваем на 600px влево
});

// Функция для прокрутки контейнера вправо
nextButton.addEventListener("click", () => {
  container.scrollLeft += 600; // Прокручиваем на 600px вправо
});
// Получаем элементы
{
  const container = document.getElementById("scroll-wrapper-1");
  const prevButton = document.getElementById("prev-button-1");
  const nextButton = document.getElementById("next-button-1");

  // Функция для прокрутки контейнера влево
  prevButton.addEventListener("click", () => {
    container.scrollLeft -= 600; // Прокручиваем на 600px влево
  });

  // Функция для прокрутки контейнера вправо
  nextButton.addEventListener("click", () => {
    container.scrollLeft += 600; // Прокручиваем на 600px вправо
  });
}

// Функция для переключения изображений
function switchImage(direction, targetId) {
  const currentModal = document.querySelector(".modal:target");

  // Закрываем текущее модальное окно (переход к другому)
  window.location.hash = targetId;

  // Добавьте логику для плавного закрытия или анимации, если необходимо
  // currentModal.classList.add('fade-out');
}

// Получаем все кнопки для перехода
const prevButtons = document.querySelectorAll(".modal-prev");
const nextButtons = document.querySelectorAll(".modal-next");

// Обработчики событий для кнопок переключения изображений
prevButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const targetId = button.getAttribute("data-target");
    switchImage("prev", targetId);
  });
});

nextButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const targetId = button.getAttribute("data-target");
    switchImage("next", targetId);
  });
});

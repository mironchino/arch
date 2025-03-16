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

{
  document
    .querySelector("#contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // предотвращаем стандартное поведение формы

      // Собираем данные из формы
      let formData = new FormData(this);
      let message = `Заявка с сайта:\n\n`;
      formData.forEach((value, key) => {
        message += `${key}: ${value}\n`; // формируем сообщение
      });

      // Токен и Chat ID
      let telegramBotToken = "7626903685:AAGHt1HxbS8oVpdGrux7LfUyL3mIUnHhWJk"; // Замените на свой токен
      let chatId = "1193602192"; // Замените на свой Chat ID

      // Формируем URL для отправки сообщения
      let url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`;

      // Отправляем запрос с помощью fetch
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            alert("Заявка успешно отправлена!");
          } else {
            alert("Ошибка отправки заявки.");
          }
        })
        .catch((error) => {
          console.error("Ошибка:", error);
          alert("Ошибка при отправке формы.");
        });
    });
}

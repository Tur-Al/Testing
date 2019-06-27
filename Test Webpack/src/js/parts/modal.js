function modal() {
    let more = document.querySelector(".more"),     // получаем класс кнопки "Узнать больше"
    overlay = document.querySelector(".overlay"),   // получаем класс модального окна
    close = document.querySelector(".popup-close"),     // получаем класс крестика
    description = document.querySelectorAll(".description-btn");    // получаем класс кнопки "Узнать подробнее"

    more.addEventListener("click", function() {     // навешиваем на кнопку "Узнать больше" событие
        overlay.style.display = "block";    // изменяем стиль модального окна в блочную модель
        this.classList.add("more-splash");  // добавляем класс кнопке "Узнать больше"
        document.body.style.overflow = "hidden";    // запрещаем прокрутку страницы если открывается модальное окно
    });

    function modal() {      // функция открытия модального окна
        overlay.style.display = 'block';    // изменяем стиль модального окна в блочную модель
        document.body.style.overflow = 'hidden';    // запрещаем прокрутку страницы если открывается модальное окно
    }
    
    for (let i = 0; i < description.length; i++) {      // колличество кнопок "Узнать подробнее"
    description[i].addEventListener('click', function() {   // навешиваем событие на все кнопки "Узнать подробнее"
            modal();    // вызываем функцию открытия модального окна
        });
    }

    close.addEventListener("click", function() {    // навешиваем на крестик событие
        overlay.style.display = "none";     // убираем стиль модального окна
        more.classList.remove("more-splash");   // убираем класс с кнопки "Узнать больше"
        document.body.style.overflow = "";    // убираем запрет на прокрутку страницы
    });
}
module.exports = modal;
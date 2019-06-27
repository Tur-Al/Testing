function form() {
    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Мы с вами скоро свяжемся!",
        failure: "Что-то пошло не так"
    };

    let form = document.querySelector(".main-form"),    // получаем класс формы
        input = form.getElementsByTagName("input"),     // получаем все поля для ввода формы (псевдомассив)
        statusMessage = document.createElement("div");      // создаем "div"

        statusMessage.classList.add("status");    // добавляем класс нашему "div" - уже написанный в css

    form.addEventListener("submit", function(event) {   // навешиваем событие на форму, чтобы отслеживать когда форма отправляется на сервер
        event.preventDefault();     // отменяем стандартное поведение браузера на обновление страницы - страница перестает отправлять запрос - мы это сделаем при помощи AJAX
        form.appendChild(statusMessage);    // добавляем наш "div" в форму

        let request = new XMLHttpRequest();     // создаем запрос для отправки данных на сервер
        request.open("POST", "server.php");     // настраиваем запрос - метод и url сервера
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");      // настраиваем заголовок запроса, который говорит что данные которые мы отправляем на сервер получены из формы

        let formData = new FormData(form);      // в переменную "formData" помещаем все то, что заполнил пользователь
        request.send(formData);     // отправляем данные на сервер

        request.addEventListener("readystatechange", function() {   // навешиваем событие на запрос, чтобы следить за изменением его состояний
            if (request.readyState < 4) {   // если запрос меньше четвертого состояния
                statusMessage.innerHTML = message.loading;      // то добавить в "div" сообщение: "Загрузка..."
            }else if (request.readyState === 4 && request.status == 200) {      // если запрос в четвертом состоянии и его статус 200
                statusMessage.innerHTML = message.success;      // то добавить в "div" сообщение: "Спасибо! Мы с вами скоро свяжемся!"
            }else{      // во всех других случаях
                statusMessage.innerHTML = message.failure;      // добавить в "div" сообщение: "Что-то пошло не так"
            }
        });
        for (let i = 0; i < input.length; i++) {    // колличество "input"
            input[i].value = "";    // очистить поле для ввода каждого "input"
        }
    });
}
module.exports = form;
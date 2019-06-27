// Задание 16

window.addEventListener("DOMContentLoaded", function() {    // Навешиваем событие на window, которое срабатывает тогда, когда полностью загрузиться DOM структура html документа и уже внутри callback функции пишем наш код

    "use strict";

    // Табы

    let tab = document.querySelectorAll(".info-header-tab"),    // Получаем класс наших табов
        info = document.querySelector(".info-header"),      // Получаем класс родителя наших табов
        tabContent = document.querySelectorAll(".info-tabcontent");     // Получаем класс нашего контента

    function hideTabContent(a) {    // Функция которая будет скрывать наш контент
        for (let i = a; i < tabContent.length; i++) {   // Колличество нашего контента
            tabContent[i].classList.remove("show");     // В каждом элементе будет удаляться класс "show" 
            tabContent[i].classList.add("hide");    // Каждому элементу будет добавляться класс "hide"
        }
    }

    hideTabContent(1);  // Вместо "а" мы передаем "1" - она подставляется к "i" и наш цикл начинается с единицы. Скрывается весь контент кроме первого

    function showTabContent(b) {    // Функция которая покажет тот контент, который нам необходим
        if (tabContent[b].classList.contains("hide")) {    // Проверяем действительно ли этот элемент скрыт
            tabContent[b].classList.remove("hide");     // Удаляем класс "hide"
            tabContent[b].classList.add("show");    // Добавляем класс "show"
        }
    }

    info.addEventListener("click", function(event) {    // Назначаем событие на родителя наших табов
        let target = event.target;      
        if (target && target.classList.contains("info-header-tab")) {   // Если мы четко кликнули в него
            for (let i = 0; i < tab.length; i++) {      // Колличество наших табов
                if (target == tab[i]) {     // Если наш таргет совпадает с нашим табом
                    hideTabContent(0);      // То мы скрываем наши табы  
                    showTabContent(i);      // И показываем тот контент, который совпал с нашим табом
                    break;      // Останавливаем цикл
                }
            }
        }
    });

    // Таймер

    let deadline = '2019-06-14';    // переменной "deadline" присваиваем дату окончания акции

    function getTimeRemaining(endtime) {    // функция для вычисления времени
        let t = Date.parse(endtime) - Date.parse(new Date()),   // переменной "t" присваиваем результат отнимания от даты окончания акции сегодняшнюю дату
            seconds = Math.floor((t/1000) % 60),    // переменной "seconds" присваиваем секунды
            minutes = Math.floor((t/1000/60) % 60),     // переменной "minutes" присваиваем минуты
            hours = Math.floor((t/(1000*60*60)));       // переменной "hours" присваиваем секунды

            return {    // возвращаем в объект все что получили выше
                "total" : t,
                "hours" : hours,
                "minutes" : minutes,
                "seconds" : seconds
            };
    }

    function setClock(id, endtime) {    // функция для получения элементов
        let timer = document.getElementById(id),    // получаем "id" таймера
            hours = timer.querySelector(".hours"),      // получаем "class" часов 
            minutes = timer.querySelector(".minutes"),      // получаем "class" минут
            seconds = timer.querySelector(".seconds"),      // получаем "class" секунд
            timeInterval = setInterval(updateClock, 1000);      // запускаем функцию "updateClock" каждую секунду

        function updateClock() {    // функция для вывода времени
            let t = getTimeRemaining(endtime);      // перменной "t" присваиваем функцию вычисления времени "getTimeRemaining(endtime)" 

            function addZero(num) {     // функция для добавления нуля к значениям таймера которые состоят из одной цифры
                if(num <= 9) {      
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours);   // выводим часы
            minutes.textContent = addZero(t.minutes);   // выводим минуты
            seconds.textContent = addZero(t.seconds);   // выводим секунды

            if (t.total <= 0) {     // если таймер закончит отчет
                clearInterval(timeInterval);    // то остановить запуск функции "updateClock" каждую секунду
                hours.textContent = '00';   // показать нули вместо часов
                minutes.textContent = '00';     // показать нули вместо минут
                seconds.textContent = '00';     // показать нули вместо секунд
            }
        }
    }
    setClock("timer", deadline);    // вызываем функцию "setClock("timer", deadline);" с ее аргументами id-"timer" и переменной "deadline"

    // Модальное окно

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

    // Форма

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

    // Отправление данных в формате JSON

    // let request = new XMLHttpRequest();     // создаем запрос для отправки данных на сервер
    // request.open("POST", "server.php");     // настраиваем запрос - метод и url сервера
    // request.setRequestHeader("Content-Type", "application/json; charset=utf-8");      // настраиваем заголовок запроса, который говорит что данные которые мы отправляем на сервер получены из JSON

    // let formData = new FormData(form);      // в переменную "formData" помещаем все то, что заполнил пользователь

    // let obj = {};   // создаем пустой объект
    // formData.forEach(function(value, key) {     // все данные из "formData" помещаем в наш объект
    //     obj[key] = value;   // ключ - значение
    // });
    // let json = JSON.stringify(obj);     // превращаем наш объект в JSON формат

    // request.send(json);     // отправляем данные на сервер

    // Слайдер

    let slideIndex = 1,     // переменная которая отвечает за тот слайд который показывается в текущий момент
        slides = document.querySelectorAll(".slider-item"),     // все слайды
        prev = document.querySelector(".prev"),     // стрелочка назад
        next = document.querySelector(".next"),     // стрелочка вперед
        dotsWrap = document.querySelector(".slider-dots"),      // обертка точек
        dots = document.querySelectorAll(".dot");   // все точки

    showSlides(slideIndex);     // вызываем функцию до ее объявления, чтобы сразу показывался только первый слайд

    function showSlides(n) {    
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");      // скрыть все слайды
        // for (let i = 0; i < slides.length; i++) {    // тоже самое только через цикл "for"
        //     slides[i].style.display = "none";
        // }
        dots.forEach((item) => item.classList.remove("dot-active"));    // скрыть все точки

        slides[slideIndex - 1].style.display = "block";     // показать первый слайд
        dots[slideIndex - 1].classList.add("dot-active");   // активировать первую точку
    }

    function plusSlides(n) {    
        showSlides(slideIndex += n);     // увеличиваем "slideIndex" на "n" в зависимости от того в какую сторону мы идем
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);     // показать необходимый слайд (функция для цикла с точками ниже)
    }

    prev.addEventListener("click", function() {
        plusSlides(-1);     // перемещаемся на один слайд назад
    });

    next.addEventListener("click", function() {
        plusSlides(1);      // перемещаемся на один слайд вперед
    });

    dotsWrap.addEventListener("click", function(event) {
        for (let i = 0; i < dots.length + 1; i++) {     // колличество наших точек + 1
            if(event.target.classList.contains("dot") && event.target == dots[i-1]) {   // есть ли у того элемента на который мы кликнули класс "dot" и номер точки совпал
                currentSlide(i);    // то показываем необходимый слайд
            }
        }
    });

    // Калькулятор

    let persons = document.querySelectorAll(".counter-block-input")[0],     // колличество людей
        restDays = document.querySelectorAll(".counter-block-input")[1],    // колличество дней
        place = document.getElementById("select"),      // базы отдыха
        totalValue = document.getElementById("total"),      // общая сумма
        personsSum = 0,     // переменная для колличества людей
        daysSum = 0,    // переменная для колличества дней
        total = 0;      // переменная для общей суммы

    totalValue.innerHTML = 0;   // обнуляем общую сумму

    persons.addEventListener("input", function() {
        personsSum = +this.value;   // присваиваем переменной "personSum" колличество людей из поля для ввода людей
        total = (daysSum + personsSum)*4000;    // присваиваем переменной "total" общую сумму дней и людей умноженную на 4000

        if(restDays.value == "" || persons.value == "") {      // если поле для ввода дней и людей пустое
            totalValue.innerHTML = 0;   // то в общей сумме показываем 0 
        } else {
            totalValue.innerHTML = total;   // иначе показываем общую сумму дней и людей умноженную на 4000
        }
    });

    restDays.addEventListener("input", function() {     
        daysSum = +this.value;      // присваиваем переменной "daysSum" колличество дней из поля для ввода дней
        total = (daysSum + personsSum)*4000;    // присваиваем переменной "total" общую сумму дней и людей умноженную на 4000

        if(persons.value == "" || restDays.value == "") {   // если поле для ввода людей и дней пустое
            totalValue.innerHTML = 0;   // то в общей сумме показываем 0
        } else {
            totalValue.innerHTML = total;   // иначе показываем общую сумму дней и людей умноженную на 4000
        }
    });

    place.addEventListener("input", function() {
        if (restDays.value == "" || persons.value == "") {      // если поля для ввода дней и людей пустые
            totalValue.innerHTML = 0;   // то в общей сумме показываем 0
        } else {
            let a = total;      // иначе переменной "а" присваиваем общую сумму дней и людей умноженную на 4000
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;      // показываем общую сумму дней и людей умноженную на 4000, и умноженную на "value" элемента "option" (внутри которых указаны базы отдыха)
        }                                                                          
    }); 
});
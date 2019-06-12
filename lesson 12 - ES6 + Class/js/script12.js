// Задание 12

window.addEventListener("DOMContentLoaded", function() {    // Навешиваем событие на window, которое срабатывает тогда, когда полностью загрузиться DOM структура html документа и уже внутри callback функции пишем наш код

    "use strict";

    // Табы

    let tab = document.querySelectorAll(".info-header-tab"),    // Получаем класс наших табов
        info = document.querySelector(".info-header"),      // Получаем класс родителя наших табов
        tabContent = document.querySelectorAll(".info-tabcontent");     // Получаем класс нашего контента

    let hideTabContent = (a) => {    // Функция которая будет скрывать наш контент
        for (let i = a; i < tabContent.length; i++) {   // Колличество нашего контента
            tabContent[i].classList.remove("show");     // В каждом элементе будет удаляться класс "show" 
            tabContent[i].classList.add("hide");    // Каждому элементу будет добавляться класс "hide"
        }
    }

    hideTabContent(1);  // Вместо "а" мы передаем "1" - она подставляется к "i" и наш цикл начинается с единицы. Скрывается весь контент кроме первого

    let showTabContent = (b) => {    // Функция которая покажет тот контент, который нам необходим
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

    let deadline = '2019-06-12';    // переменной "deadline" присваиваем дату окончания акции

    let getTimeRemaining = (endtime) => {    // функция для вычисления времени
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

    let setClock = (id, endtime) => {    // функция для получения элементов
        let timer = document.getElementById(id),    // получаем "id" таймера
            hours = timer.querySelector(".hours"),      // получаем "class" часов 
            minutes = timer.querySelector(".minutes"),      // получаем "class" минут
            seconds = timer.querySelector(".seconds"),      // получаем "class" секунд
            timeInterval = setInterval(updateClock, 1000);      // запускаем функцию "updateClock" каждую секунду

        function updateClock() {    // функция для вывода времени
            let t = getTimeRemaining(endtime);      // перменной "t" присваиваем функцию вычисления времени "getTimeRemaining(endtime)" 

            let addZero = (num) => {     // функция для добавления нуля к значениям таймера которые состоят из одной цифры
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

    let modal = () => {      // функция открытия модального окна
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
});
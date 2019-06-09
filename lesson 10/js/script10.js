// Задание 10

window.addEventListener("DOMContentLoaded", function() {    // Навешиваем событие на window, которое срабатывает тогда, когда полностью загрузиться DOM структура html документа и уже внутри callback функции пишем наш код

    "use strict";
    let tab = document.querySelectorAll(".info-header-tab"),    // Получаем класс наших табов
        info = document.querySelector(".info-header"),      // Получаем класс родителя наших табов
        tabContent = document.querySelectorAll(".info-tabcontent");     // Получаем класс нашего контента

    function hideTabContent(a) {    // Функция которая будет скрывать наш контент
        for (let i = a; i < tabContent.length; i++) {   // Колличество нашего контента
            tabContent[i].classList.remove("show");     // В каждом элементе будет удаляться класс "show" - ранее написанный в css и заданный в html 
            tabContent[i].classList.add("hide");    // Каждому элементу будет добавляться класс "hide" - ранее написанный в css и заданный в html
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

    // let deadline = '2018-10-21';

    // function getTimeRemaining(endtime) {
    //     let t = Date.parse(endtime) - Date.parse(new Date()),
    //         seconds = Math.floor((t/1000) % 60),
    //         minutes = Math.floor((t/1000/60) % 60),
    //         hours = Math.floor((t/(1000*60*60)));

    //         return {
    //             "total" : t,
    //             "hours" : hours,
    //             "minutes" : minutes,
    //             "seconds" : seconds
    //         };
    // }

    // function setClock(id, endtime) {
    //     let timer = document.getElementById(id),
    //         hours = timer.querySelector(".hours"),
    //         minutes = timer.querySelector(".minutes"),
    //         seconds = timer.querySelector(".seconds"),
    //         timeInterval = setInterval(updateClock, 1000);

    //     function updateClock() {
    //         let t = getTimeRemaining(endtime);
    //         hours.textContent = t.hours;
    //         minutes.textContent = t.minutes;
    //         seconds.textContent = t.seconds;

    //         if (t.total <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }
    // setClock("timer", deadline);

    // Таймер обратного отсчета

    let deadline = '2019-06-11';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                "total" : t,
                "hours" : hours,
                "minutes" : minutes,
                "seconds" : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock("timer", deadline);
}); 
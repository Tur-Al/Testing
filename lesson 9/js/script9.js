// Задание 9

window.addEventListener("DOMContentLoaded", function() {    // Навешиваем событие на window, которое срабатывает тогда, когда полностью загрузиться DOM структура html документа и уже внутри callback функции пишем наш код

    "use strict";
    let tab = document.querySelectorAll(".info-header-tab"),    // Получаем класс наших табов
        info = document.querySelector(".info-header"),      // Получаем класс родителя наших табов
        tabContent = document.querySelectorAll(".info-tabcontent");     // Получаем класс нашего контента

    function hideTabContent(a) {    // Функция которая будет скрывать наши табы
        for (let i = a; i < tabContent.length; i++) {   // Колличество нашего контента
            tabContent[i].classList.remove("show");     // В каждом элементе будет удаляться класс "show" - ранее написанный в css и заданный в html 
            tabContent[i].classList.add("hide");    // Каждому элементу будет добавляться класс "hide" - ранее написанный в css и заданный в html
        }
    }

    hideTabContent(1);  // Вместо "а" мы передаем "1" - она подставляется к "i" и наш цикл начинается с единицы. Скрываются все tabContent кроме первого

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
});
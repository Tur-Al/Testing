function timer() {
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
}
module.exports = timer;
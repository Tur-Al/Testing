// Задание 14-2

let inputRub = document.getElementById('rub'),      // получаем "id" поля для ввода рублей
    inputUsd = document.getElementById('usd');      // получаем "id" поля для ввода долларов

inputRub.addEventListener('input', () => {      // назначаем событие на поле для ввода рублей

    function catchData() {      

        return new Promise(function(resolve, reject) {      // возвращаем новый промис
            let request = new XMLHttpRequest();     // новый запрос
            request.open("GET", "js/current.json");     // метод и url сервера
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');    // заголовок запроса
            request.send();     // отправляем данные на сервер
        
            request.onload = function() {   
                if(request.readyState === 4) {      // проверка на состояние запроса
                    if(request.status == 200) {     // проверка на состояние запроса
                        resolve(this.response)      // если проверка пройдена - получить ответ сервера
                    }
                    else {
                        reject();     // в противном случае ошибка
                    }
                }
            }
        });
    };

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);    // в переменную "data" помещаем распарсированный ответ сервера
        inputUsd.value = inputRub.value / data.usd;     // в поле ввода долларов выводим сконвертированный результат
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так")    // в случае ошибки в поле ввода долларов выводим сообщение
});
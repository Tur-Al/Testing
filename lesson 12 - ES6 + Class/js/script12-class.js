// Задание 12

"use strict";

class Options {     // название класса
    constructor (height, width, bg, fontSize, textAlign) {      // аргументы
        this.height = height;   // высота
        this.width = width;     // ширина
        this.bg = bg;   // фоновый цвет
        this.fontSize = fontSize;   // размер шрифта
        this.textAlign = textAlign;     // местоположение текста
    }
	createDiv() {   // метод класса
        let div = document.createElement("div");    // создаем элемент "div"
        document.body.appendChild(div);     // добавляем его в конец "body"
        let parameter = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;      // параметры будущего "div"      
        div.style.cssText = parameter;      // присваиваем параметры будущему "div"
    }
}
let item = new Options(200, 200, "black", 16, "center");   // создаем новый объект через класс

item.createDiv();   // вызываем метод класса и получаем "div" на странице

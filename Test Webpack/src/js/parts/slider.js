function slider() {
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
}
module.exports = slider;
// Задание 17

$(document).ready(function() {      // Событие DOMContentLoaded

//     $(".list-item:first").hover(function() {    // получаем первый элемент с классом "list-item" и назначаем ему событие наведения
//         $(this).toggleClass("active");      // при наведении на элемент добавлять ему класс "active"
//     });

//     $(".list-item:eq(2)").on("click", function() {      // получаем третий элемент с классом "list-item" и назначаем ему событие клика
//         $(".image:even").fadeToggle("slow");    // получаем все четные элементы с классом "image" и назначаем им готовую анимацию, указывая в скобках время ее выполнения словом или цифрами
//     });

//     $(".list-item:eq(4)").on("click", function() {      // получаем пятый элемент с классом "list-item" и назначаем ему событие клика
//         $(".image:odd").animate(    // получаем все нечетные элементы с классом "image" и прописываем им анимацию с ниже перечисленными свойствами
//             {
//                 opacity: "toggle",
//                 height: "toggle"
//             }, 3000     // время выполнения анимации
//         );
//     });

    // $(".main_btna").on("click", function() {
    //     $(".overlay").animate(
    //         {
    //             opacity: "toggle",
    //         }, 3000
    //     );
    //     $(".modal").animate(
    //         {
    //             height: "toggle",
    //         }, 3000
    //     );
    // });

    // $(".main_btn").on("click", function() {
    //     $(".overlay").animate(
    //         {
    //             opacity: "toggle",
    //         }, 3000
    //     );
    //     $(".modal").animate(
    //         {
    //             height: "toggle",
    //         }, 3000
    //     );
    // });

    // $("li:eq(7)").on("click", function() {
    //     $(".overlay").animate(
    //         {
    //             opacity: "toggle",
    //         }, 3000
    //     );
    //     $(".modal").animate(
    //         {
    //             height: "toggle",
    //         }, 3000
    //     );
    // });

    // $(".close").on("click", function() {
    //     $(".overlay").animate(
    //         {
    //             opacity: "",
    //         }, 3000
    //     );
    //     $(".modal").animate(
    //         {
    //             height: "",
    //         }, 3000
    //     );
    // });

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {      // получаем элементы и назначаем им событие клика
        $('.overlay').fadeIn(1000);     // класс "overlay" (затухает фон) медленно появляется на странице
        $('.modal').slideDown(1000);    // класс "modal" (модальное окно) плавно выезжает сверху
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);      //  класс "modal" плавно уезжает наверх
        $('.overlay').fadeOut(1000);    // класс "overlay" медленно исчезает
    });
});
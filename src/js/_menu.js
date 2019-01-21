// $(document).ready(function() {
//     "use strict";
//     $('.nav-item_activated').click(function(e) {
//         e.preventDefault();
//         $('.nav-item_activated').removeClass('active');
//         // $(this).removeClass('white_text');
//         $(this).addClass('active');
//     });
// });

$(".nav-item_activated").click(function() {
    if ($(".menu").css('display') == 'none') {
        $('.nav-item_activated').removeClass('active');
        $(this).addClass('active');
        open_menu();
        open_color();
        $(this).find(".menu-article_hidden").css({ display: "block" });
    } else if ($(".menu").css('display') == 'block' &&
        $(this).hasClass("active") &&
        !$('div').hasClass("media-blog")) {
        $(this).find(".menu-article_hidden").css({ display: "none" });
        close_menu();
        close_color();
    } else if ($(".menu").css('display') == 'block' && $(this).hasClass("active") && $('div').hasClass("menu-without-color")) {
        $(this).find(".menu-article_hidden").css({ display: "none" });
        $('.nav-item_activated').removeClass('active');
        close_menu();
        open_color();
    } else {
        $('.nav-item_activated').removeClass('active');
        $(this).addClass('active');
        $('.nav-item_activated').find(".menu-article_hidden").css({ display: "none" });
        $(this).find(".menu-article_hidden").css({ display: "block" });
    }
});

var open_menu = function() {
    $(".menu").css({ display: "block" });
    $(".close_text").css({ display: "block" });
    $(".scroll_text").css({ display: "none" });
    $(".close_svg").css({ display: "block" });
    $(".arrow_svg").css({ display: "none" });
    $(".header-up").css({ background: "none" });
}

var open_color = function() {
    $(".nav-item_activated").removeClass("black_text");
    $(".nav-item_activated").addClass("white_text");
    $(".nav-item").addClass("white_text");
    $(".nav-item a").addClass("white_text");
    $(".logo svg").css({ fill: "#fff" });
    $(".scroll-arrow_img svg").css({ fill: "#183762" });
    $(".language").addClass("pulse_white");
    $(".scroll-arrow_img").addClass("pulse_white");
}

var close_menu = function() {
    $(".menu").css({ display: "none" });
    $(".close_text").css({ display: "none" });
    $(".scroll_text").css({ display: "block" });
    $(".close_svg").css({ display: "none" });
    $(".arrow_svg").css({ display: "block" });
    $(".menu-article_hidden").css({ display: "none" });
}

var close_color = function() {
    $(".scroll-arrow_img svg").css({ fill: "#fff" });
    $(".header-up").css({ background: "#f4f4f4" });
    $(".language").removeClass("pulse_white");
    $(".language").addClass("pulse_blue");
    $(".scroll-arrow_img").removeClass("pulse_white");
    $(".scroll-arrow_img").addClass("pulse_blue");
    $(".nav-item_activated").removeClass("white_text");
    $(".nav-item_activated").addClass("black_text");
    $(".logo svg").css({ fill: "#183762" });
}

$(".scroll-arrow_img").click(function() {
    $(".language").removeClass("pulse_white");
    $(".language").addClass("pulse_blue");
    $(".scroll-arrow_img").removeClass("pulse_white");
    $(".scroll-arrow_img").addClass("pulse_blue");
    $(".nav-item_activated").removeClass("white_text");
    $(".nav-item_activated").addClass("black_text");
    $(".menu").css({ display: "none" });
    $(".logo svg").css({ fill: "#183762" });
    $(".scroll-arrow_img svg").css({ fill: "#fff" });
    $(".close_text").css({ display: "none" });
    $(".scroll_text").css({ display: "block" });
    $(".close_svg").css({ display: "none" });
    $(".arrow_svg").css({ display: "block" });
    $(".menu-article_hidden").css({ display: "none" });
});
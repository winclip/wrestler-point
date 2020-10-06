$(document).ready(function () {
    $('.classes-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        navContainer: '#navClasses',
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            767: {
                items: 3,
            },
            991: {
                items: 4,
            }
        }
    });

    $('.news-carousel').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        navContainer: '#navNews',
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            991: {
                items: 3,
            },
        }
    });

    $('.comments-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<img src="img/left-arrow.png" alt="">', '<img src="img/right-arrow.png" alt="">'],
        navContainer: '#navComments',
        items: 1
    });

    var width = $(window).width();
    $(window).resize(function () {
        width = $(window).width();
    });

    $(".scroll").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        if (width > 991) {
            $('body,html').animate({scrollTop: top}, 1500);
        } else if (width < 993) {
            $('body,html').animate({scrollTop: top - 56}, 1500);
        }
    });

    $(".c-hamburger").click(function () {
        if ($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
            $(".mobile-menu").slideUp();
        } else {
            $(this).addClass("is-active");
            $(".mobile-menu").slideDown();
        }
    });

    $(".mobile-menu nav a").click(function () {
        $(".c-hamburger").removeClass("is-active");
        $(".mobile-menu").slideUp();
    });

    new WOW().init();

    $("#sendForm").click(function (e) {
        e.preventDefault();
        let name = $("#formName").val();
        let email = $("#formEmail").val();
        let phone = $("#formPhone").val();
        let type = $("#formSelect")
            .find("option:selected")
            .text();
        let message = $("#formMessage")
            .val()
            .replace(/[\r\n]/g, "<br>");
        let calcMessage =
            "Name: " +
            name +
            "<br>Email: " +
            email +
            "<br>Phone: " +
            phone +
            "<br>Class: " +
            type +
            "<br>Message: " +
            message;
        let formData = new FormData();
        formData.append("calcMessage", calcMessage);
        $.ajax({
            type: "post",
            url: "/mail.php",
            data: formData,
            contentType: false,
            processData: false,
            dataType: "json"
        }).done(function (response) {
            $("#formName").val("");
            $("#formEmail").val("");
            $("#formPhone").val("");
            $($("#formSelect").find("option")[0]).prop("selected", true);
            $("#formMessage").val("");
        });
    });

    $("#sendSubscribe").click(function (e) {
        e.preventDefault();
        let email = $("#subscribeEmail").val();
        let calcMessage = "Email: " + email;
        let formData = new FormData();
        formData.append("calcMessage", calcMessage);
        $.ajax({
            type: "post",
            url: "/mail.php",
            data: formData,
            contentType: false,
            processData: false,
            dataType: "json"
        }).done(function (response) {
            $("#subscribeEmail").val("");
        });
    });
});
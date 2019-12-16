$(function () {

    // task 1
    $('.my-accordion').eq(0).find('.fa-chevron-down').css("transform", "translate(-50%,-50%)rotate(-180deg)");
    $('.my-accordion').eq(0).find('.content').css("display", "flex");
    $('.my-accordion').eq(0).find('.heading').css("backgroundColor", "#0C919D");


    $(".my-accordion .heading").click(function () {
        $(".my-accordion .content").slideUp(400);
        $('.my-accordion .fa-chevron-down').css("transform", "translate(-50%,-50%)rotate(0deg)");
        $('.my-accordion .heading').css("backgroundColor", "#0c7480");
        $(this).closest(".my-accordion").find('.content').slideDown(400);
        $(this).closest(".my-accordion").find('.fa-chevron-down').css("transform", "translate(-50%,-50%)rotate(-180deg)");
        $(this).closest(".my-accordion").find('.heading').css("backgroundColor", "#0C919D");
    })


    // task 2
    let data = new Date();
    let second = $("#seconds");
    let minutes = $("#minutes");
    let hours = $("#hours");
    let days = $("#days")


    let interval = setInterval(function(){
        let now = new Date();
        let deadline = new Date("2019 dec 31 12:00:00").getTime();
        let diffDate = deadline - now;
        let getDays = Math.floor(diffDate / (1000 * 60 * 60 * 24));
        let getHours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let getMinutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
        let getSeconds = Math.floor((diffDate % (1000 * 60)) / (1000));
        days.text(getDays);
        hours.text(getHours);
        minutes.text(getMinutes);
        second.text(getSeconds);

    },1000);


    // task 3
    let counter = 50;
    $("textarea").keyup(function (e) {
        let remainingChar = counter - $(this).val().length;
        $(".counter").text(remainingChar);
        if (remainingChar <= 0) {
            $(this).css("border", "2px solid red");
            $(".counter").text("your available character finished ");
        } else {
            $(this).css("border", "2px solid #d1d1d1");
            $(".counter").text(remainingChar);
        }
    })

});
$(function () {

    $(window).scroll(function () {

        let scrTop = $(window).scrollTop();
        console.log(scrTop);

        if (scrTop >= 200) {

            $("nav").addClass("menuFixed");
        }else {

            $("nav").removeClass("menuFixed");
        }



    });
});



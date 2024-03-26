$("document").ready( () => {

    // this is the recommetn method
    // we can toogle css classes
    $("p").hover( function () {
        $(this).toggleClass("highlight");
    });

    // this is another method
    $("p").hover(function () {
            // over
            $(this).css({
                "background-color": "black",
                "color": "white"
            });
        }, function () {
            // out
            $(this).css({
                "background-color": "white",
                "color": "black"
            });
        }
    );

    // this is another method
    $("p").on("mouseenter", function () {
        $(this).css({
            "background-color": "black",
            "color": "white"
        });
    });

    $("p").on("mouseleave", function () {
        $(this).css({
            "background-color": "white",
            "color": "black"
        });
    });

});
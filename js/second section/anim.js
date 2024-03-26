$("document").ready( () => {

    // hide element
    $(".hide-btn").on('click', () => {
        $(".para").hide();
    });

    // show element
    $(".show-btn").on('click', () => {
        $(".para").show();
    });


    let isSubscribed = false;

    $(".sub-btn").on('click', () => {
        if (isSubscribed) {
            $(".sub-btn").text('Unsubscribe');
            $(".sub h5").text('Subscribed');
        } else {
            $(".sub-btn").text('Subscribe');
            $(".sub h5").text('Subscribe');
        }
        isSubscribed = !isSubscribed;
    });



    // we can hide show elements by
    // fadein and fadeout functions
    let isShow = false;

    $(".showhide-btn").on('click', () => {
        if (isShow) {
            $(".box").fadeIn(5000, () => {
                alert("FadeIn");
            });
            $(".showhide-btn").text('HIDE');
        } else {
            $(".box").fadeOut(5000, () => {
                alert("FadeOut");
            });
            $(".showhide-btn").text('SHOW');
        }
        isShow = !isShow;
    });
});
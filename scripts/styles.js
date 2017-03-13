$().ready(function() {
    $(".title-only").css({
        "margin-top": ($(document).height() - $(".title-only").height()) / 2
    });

    $(".center-vertical").each(function(index, element) {
        $(element).css({
            "margin-top": (($(element).parent().height() - $(element).height()) / 2) - $("h1").height()
        });
    });
});
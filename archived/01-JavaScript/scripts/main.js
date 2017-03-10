var lastSlideIndex = +$("[data-role=page]:last").attr("id").substring(5);
var currentSlide = 1;
var loadSlide = function() {
};
var previousSlide = function() {
    currentSlide--;
    if (currentSlide < 1) currentSlide = 1;
    $.mobile.changePage("#slide" + currentSlide, {
        transition: "flow", reverse: "true"
    });
};
var nextSlide = function() {
    currentSlide++;
    if (currentSlide > lastSlideIndex) currentSlide = lastSlideIndex;
    $.mobile.changePage("#slide" + currentSlide, {
        transition: "flow"
    });
};
$(document).on("pagebeforeshow", "[data-role=page]", function() {
    currentSlide = window.location.href.split("#")[1] != undefined ? +(window.location.href.split("#")[1].substring(5)) : 1;
   
    $("[data-role=content]").css("padding-top",
        ($("body").height()
            - $("[data-role=header]").height()
            - $("[data-role=footer]").height()
            - $("[data-role=content]").height())
        /6);
   
    $(".theLog").html("");
});

//$("body").click(function() {
//    loadSlide(++currentSlide);
//});
$(document).on("click", "#nextSlide", function() {
    nextSlide();
});
$(document).on("click", "#previousSlide", function() {
    previousSlide();
});

$("[data-role=footer]").html("<div id='navigationButtons' data-role='controlgroup' data-type='horizontal'>"
    + "<input type='button' id='previousSlide' value='&lt;'></input>"
    + "<input type='button' id='nextSlide' value='&gt;'></input>"
    + "</div>");

$("body").keydown(function(event) {
    switch(event.keyCode) {
        case 37:
            previousSlide();
            break;
        case 39:
            nextSlide();
            break;
    }
});

$(".theLiveCode").keydown(function(e) {
    e.stopPropagation();
});

//var normalLog = console.log;
//console.log = function(message) {
//    $(".theLog").html(message + "<br />");
//    normalLog(message);
//};

$(document).on("click", ".runCode", function() {
    var theLog = $(this).parent().parent().children(".theLog");
    theLog.html("= ");
    
    var scriptResult = eval($(this).parent().parent().children(".theLiveCode").val());
    
    if (scriptResult === true) theLog.append("true");
    else if (scriptResult === undefined) theLog.append("undefined");
    else if (scriptResult === null) theLog.append("null");
    else if (scriptResult === false) theLog.append("false");
    else theLog.append(scriptResult);
});
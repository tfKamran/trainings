$().ready(function() {
    var lastSlideIndex = +$("[data-slide]:last").attr("data-slide");

    var currentSlide = getCurrentSlideNumber();

    $("[data-slide]").hide();

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

    changePage(currentSlide);
    
    function changePage(slideNumber) {
        window.location.href = window.location.href.split("#")[0] + "#" + slideNumber;

        currentSlide = slideNumber;

        $("[data-slide]").hide();
        $("[data-slide=" + slideNumber + "]").fadeIn();
    }

    function getCurrentSlideNumber() {
        return window.location.href.split("#")[1] != undefined ? +(window.location.href.split("#")[1]) : 1;
    }

    function previousSlide() {
        currentSlide--;
        
        if (currentSlide < 1) currentSlide = 1;
        
        changePage(currentSlide);
    };
    
    function nextSlide() {
        currentSlide++;
        
        if (currentSlide > lastSlideIndex) currentSlide = lastSlideIndex;
        
        changePage(currentSlide);
    };
});
$(document).ready(function() {
    console.log("document ready");

    // initialize textarea size
    textarea = $("textarea")

    innerHeight = textarea.innerHeight();
    innerWidth = textarea.innerWidth();
    console.log('Inner:', innerHeight, innerWidth);

    scrollHeight = textarea.prop('scrollHeight');
    scrollWidth = textarea.prop('scrollWidth');
    console.log('Scroll:', scrollHeight, scrollWidth)


    // set font size
    textarea.css('font-size', innerHeight);
    console.log(textarea.css('font-size'));

    textarea.bind('input propertychange', function() {
        console.log("input change")
    
        innerHeight = textarea.innerHeight();
        innerWidth = textarea.innerWidth();
        console.log('Inner:', innerHeight, innerWidth);

        scrollHeight = textarea.prop('scrollHeight');
        scrollWidth = textarea.prop('scrollWidth');
        console.log('Scroll:', scrollHeight, scrollWidth)

        // if overflow
        let err = 3;
        let maxCount = 100;
        let curCount = 0;
        while (scrollHeight - innerHeight > err || scrollWidth - innerWidth > err){
            textarea = $("textarea")

            console.log('Detect overflow, resize font size.')
            
            curFontSize = parseInt(textarea.css('font-size'))
            textarea.css('font-size', (curFontSize-10) + 'px');
            console.log(textarea.css('font-size'));

            innerHeight = textarea.innerHeight();
            innerWidth = textarea.innerWidth();
            console.log('Inner:', innerHeight, innerWidth);

            scrollHeight = textarea.prop('scrollHeight');
            scrollWidth = textarea.prop('scrollWidth');
            console.log('Scroll:', scrollHeight, scrollWidth)

            curCount += 1;
            if (curCount > maxCount) break;
        }

  });
});


function toggleColor(){
    // Get background color
    bgColor = $("body").css("background-color");
    fontColor = $("body").css("background-color");

    // Set background, font, and button color
    if (bgColor === "rgb(0, 0, 0)") {
        $("body").css("background-color", "white");
        $("#text-input").css("color", "black");
        $(".color-button").css("background-color", "black");
    } else if (bgColor === "rgb(255, 255, 255)") {
        $("body").css("background-color", "black");
        $("#text-input").css("color", "white");
        $(".color-button").css("background-color", "white");
    }
}
$(document).ready(function() {
    // initialize font size
    textarea = $("textarea")
    textarea.css('font-size', innerHeight);
    console.log(textarea.css('font-size'));

    // if input change
    textarea.bind('input propertychange', function() {
        console.log("input change")
    
        innerHeight = textarea.innerHeight();
        innerWidth = textarea.innerWidth();
        console.log('Inner:', innerHeight, innerWidth);

        scrollHeight = textarea.prop('scrollHeight');
        scrollWidth = textarea.prop('scrollWidth');
        console.log('Scroll:', scrollHeight, scrollWidth)

        let err = 3;
        let maxCount_small = 200;
        let maxCount_big = 20;
        let curCount = 0;
        let step_small = 10;
        let step_big = 50;

        // if overflow
        while (scrollHeight - innerHeight > err || scrollWidth - innerWidth > err){
            console.log('Detect overflow, font size should be smaller.')
            
            curFontSize = parseInt(textarea.css('font-size'))

            textarea.css('font-size', (curFontSize-step_small) + 'px');

            innerHeight = textarea.innerHeight();
            innerWidth = textarea.innerWidth();

            scrollHeight = textarea.prop('scrollHeight');
            scrollWidth = textarea.prop('scrollWidth');

            curCount += 1;
            if (curCount > maxCount_small) break;
        }

        // if underflow
        if (curCount < 50){
            // bigger
            while (scrollHeight - innerHeight <= err || scrollWidth - innerWidth <= err){
                console.log('Bigger.')
                
                curFontSize = parseInt(textarea.css('font-size'))
    
                textarea.css('font-size', (curFontSize+step_big) + 'px');
    
                innerHeight = textarea.innerHeight();
                innerWidth = textarea.innerWidth();
    
                scrollHeight = textarea.prop('scrollHeight');
                scrollWidth = textarea.prop('scrollWidth');
    
                curCount += 1;
                if (curCount > maxCount_big) break;
            }

            // then smaller
            curCount = 0;
            while (scrollHeight - innerHeight > err || scrollWidth - innerWidth > err){
                console.log('Detect overflow 2, font size should be smaller.')
                
                curFontSize = parseInt(textarea.css('font-size'))
    
                textarea.css('font-size', (curFontSize-step_small) + 'px');
    
                innerHeight = textarea.innerHeight();
                innerWidth = textarea.innerWidth();
    
                scrollHeight = textarea.prop('scrollHeight');
                scrollWidth = textarea.prop('scrollWidth');
    
                curCount += 1;
                if (curCount > maxCount_small) break;
            }
        }


        // var lht = parseInt(textarea.css('lineHeight'));
        // console.log(lht)
        // var lines = parseInt(scrollHeight) / lht;
        // console.log('line num:', lines);

        // console.log('line num:', textarea[0].value.substr(0, textarea.selectionStart).split("\n").length);

        // curCount = 0;
        // while (innerHeight - scrollHeight > err || innerWidth - scrollWidth > err){
        //     console.log('Detect underflow, font size should be bigger.')

        //     curFontSize = parseInt(textarea.css('font-size'))
            
        //     textarea.css('font-size', (curFontSize+step) + 'px');
        //     console.log(textarea.css('font-size'));

        //     innerHeight = textarea.innerHeight();
        //     innerWidth = textarea.innerWidth();
        //     console.log('Inner:', innerHeight, innerWidth);

        //     scrollHeight = textarea.prop('scrollHeight');
        //     scrollWidth = textarea.prop('scrollWidth');
        //     console.log('Scroll:', scrollHeight, scrollWidth)

        //     curCount += 1;
        //     if (curCount > maxCount) break;
        // }

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
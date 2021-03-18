function binarySearch(textarea){
    let lowerBound = 1;
    let upperBound = textarea.innerHeight() * 2;

    // console.log('high:', upperBound);
    // console.log('low:', lowerBound);

    const err = 0.3;
    let size = lowerBound;
    let maxCount = 5;
    let curCount = 0;
    while (lowerBound <= upperBound) {
        // height 754
        let mid = (upperBound + lowerBound) >> 1;
        // mid 377
        textarea.css("font-size", (mid) + "px");

        innerHeight = textarea.innerHeight();
        innerWidth = textarea.innerWidth();

        scrollHeight = textarea.prop("scrollHeight");
        scrollWidth = textarea.prop("scrollWidth");
    
        console.log('---')
        console.log("inner H: ", innerHeight)
        console.log("scroll H: ", scrollHeight)
        console.log("inner W: ", innerWidth)
        console.log("scroll W: ", scrollWidth)
        
        if (innerWidth - scrollWidth > err || innerHeight - scrollHeight > err) {
            console.log('larger')
            lowerBound = mid + 1;
        } else if (scrollWidth - innerWidth > err || scrollHeight - innerHeight > err) {
            console.log('smaller')
            upperBound = mid - 1;
        }

        size = mid;
        console.log('size: ', size);

        curCount += 1;
        if (curCount > maxCount) break;
        // await injection point
    }
    // found, updating font if differs:
    console.log('final size:', size)
    if ( textarea.css("font-size") != size + "px" ) textarea.css("font-size", (size) + "px");
}

$(document).ready(function() {
    // initialize font size
    textarea = $("textarea")
    // textarea.css("font-size", innerHeight);
    // console.log(textarea.css("font-size"));

    // TODO: textarea size change
    // if input change
    textarea.bind("input propertychange", function() {
        console.log("input change")
        binarySearch(textarea);
    
        // innerHeight = textarea.innerHeight();
        // innerWidth = textarea.innerWidth();
        // console.log("Inner:", innerHeight, innerWidth);

        // scrollHeight = textarea.prop("scrollHeight");
        // scrollWidth = textarea.prop("scrollWidth");
        // console.log("Scroll:", scrollHeight, scrollWidth)

        // let err = 3;
        // let maxCount_small = 200;
        // let maxCount_big = 20;
        // let curCount = 0;
        // let step_small = 10;
        // let step_big = 50;

        // // if overflow
        // while (scrollHeight - innerHeight > err || scrollWidth - innerWidth > err){
        //     console.log("Detect overflow, font size should be smaller.")
            
        //     curFontSize = parseInt(textarea.css("font-size"))

        //     textarea.css("font-size", (curFontSize-step_small) + "px");

        //     innerHeight = textarea.innerHeight();
        //     innerWidth = textarea.innerWidth();

        //     scrollHeight = textarea.prop("scrollHeight");
        //     scrollWidth = textarea.prop("scrollWidth");

        //     curCount += 1;
        //     if (curCount > maxCount_small) break;
        // }

        // // if underflow
        // if (curCount < 50){
        //     // bigger
        //     while (scrollHeight - innerHeight <= err || scrollWidth - innerWidth <= err){
        //         console.log("Bigger.")
                
        //         curFontSize = parseInt(textarea.css("font-size"))
    
        //         textarea.css("font-size", (curFontSize+step_big) + "px");
    
        //         innerHeight = textarea.innerHeight();
        //         innerWidth = textarea.innerWidth();
    
        //         scrollHeight = textarea.prop("scrollHeight");
        //         scrollWidth = textarea.prop("scrollWidth");
    
        //         curCount += 1;
        //         if (curCount > maxCount_big) break;
        //     }

        //     // then smaller
        //     curCount = 0;
        //     while (scrollHeight - innerHeight > err || scrollWidth - innerWidth > err){
        //         console.log("Detect overflow 2, font size should be smaller.")
                
        //         curFontSize = parseInt(textarea.css("font-size"))
    
        //         textarea.css("font-size", (curFontSize-step_small) + "px");
    
        //         innerHeight = textarea.innerHeight();
        //         innerWidth = textarea.innerWidth();
    
        //         scrollHeight = textarea.prop("scrollHeight");
        //         scrollWidth = textarea.prop("scrollWidth");
    
        //         curCount += 1;
        //         if (curCount > maxCount_small) break;
        //     }
        // }


        // var lht = parseInt(textarea.css("lineHeight"));
        // console.log(lht)
        // var lines = parseInt(scrollHeight) / lht;
        // console.log("line num:", lines);

        // console.log("line num:", textarea[0].value.substr(0, textarea.selectionStart).split("\n").length);

        // curCount = 0;
        // while (innerHeight - scrollHeight > err || innerWidth - scrollWidth > err){
        //     console.log("Detect underflow, font size should be bigger.")

        //     curFontSize = parseInt(textarea.css("font-size"))
            
        //     textarea.css("font-size", (curFontSize+step) + "px");
        //     console.log(textarea.css("font-size"));

        //     innerHeight = textarea.innerHeight();
        //     innerWidth = textarea.innerWidth();
        //     console.log("Inner:", innerHeight, innerWidth);

        //     scrollHeight = textarea.prop("scrollHeight");
        //     scrollWidth = textarea.prop("scrollWidth");
        //     console.log("Scroll:", scrollHeight, scrollWidth)

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
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

function resizeFont(){
    console.log("Triggered")
    textFit(
        $("#text-input"), 
        {
            multiLine: true, 
            detectMultiLine: false,
            alignHoriz: true, 
            alignVert: true,
            minFontSize: 12,
            maxFontSize: 1024,
        }
    );
}
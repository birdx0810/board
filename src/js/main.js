function toggleColor(){
    // Get background color
    bgColor = $("body").css("background-color");

    // Set background, font, and button color
    if (bgColor === "rgb(0, 0, 0)") {
        document.body.style.backgroundColor = "white";
        document.getElementById("text-input").style.color = "black";
        document.getElementById("color-button").style.backgroundColor = "black"
    } else if (bgColor === "rgb(255, 255, 255)") {
        document.body.style.backgroundColor = "black";
        document.getElementById("text-input").style.color = "white";
        document.getElementById("color-button").style.backgroundColor = "white"
    }
}
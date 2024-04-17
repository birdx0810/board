$(document).ready(function () {
    // Get textarea element of document
    textarea = $("span#text-input")
    // Run if input of textarea has changed
    textarea.bind("input propertychange", function () {
        console.log("input changed");
        binarySearch(textarea);
    })
    // Run if viewport size has changed
    $(window).on("resize", function () {
        console.log("viewport size changed");
        binarySearch(textarea);
    })
})

function binarySearch(textarea) {
    let low = 1;
    let high = textarea.innerHeight();

    innerHeight = textarea.parent().innerHeight();

    // Search from the middle fontSize.
    while (low <= high) {
        fontSize = low + (high - low) / 2
        textarea.css("font-size", (fontSize) + "px")
        scrollHeight = textarea.prop("scrollHeight")

        // The space of text area is larger than container
        if (scrollHeight - innerHeight > 0) {
            // Make font smaller
            high = fontSize - 1
        }
        // The space of text area is smaller than container
        else if (scrollHeight - innerHeight < 0) {
            // Make font larger
            low = fontSize + 1
        }
        else { break }

        // Update font size
        fontSize = (high + low) >> 1
    }
}
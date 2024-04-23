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
    let minFontSize = 1;
    let maxFontSize = 2048;

    innerHeight = textarea.parent().innerHeight();
    innerWidth = textarea.parent().innerWidth();

    // Search from the middle fontSize.
    while (minFontSize <= maxFontSize) {
        fontSize = minFontSize + (maxFontSize - minFontSize) / 2
        textarea.css("font-size", (fontSize) + "px")
        scrollHeight = textarea.prop("scrollHeight")
        scrollWidth = textarea.prop("scrollWidth")

        // The space of text area is larger than container
        if (scrollHeight - innerHeight > 0 || scrollWidth - innerWidth > 0) {
            // Make font smaller
            maxFontSize = fontSize - 1
        }
        // The space of text area is smaller than container
        else if (scrollHeight - innerHeight < 0 || scrollWidth - innerWidth < 0) {
            // Make font larger
            minFontSize = fontSize + 1
        }
        else { break }

        // Update font size
        fontSize = (maxFontSize + minFontSize) >> 1
    }

}
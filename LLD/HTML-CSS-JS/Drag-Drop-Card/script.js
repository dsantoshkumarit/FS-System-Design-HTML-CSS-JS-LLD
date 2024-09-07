(function () {
    let startX = 0, startY = 0, differenceX = 0, differenceY = 0;
    const cardElement = document.getElementById("card");
    console.log("in js");
    cardElement.addEventListener("mousedown", mouseDownHandler);
    function mouseDownHandler(e) {
        // Change the mouse cursor style to grabbing when the mouse is clicked on the card element.
        e.target.style.cursor = "grabbing";
        // Store the current mouse coordinates position when mouse down on the card element.
        startX = e.clientX;
        startY = e.clientY;

        // Add the mousemove and mouseup events to the document and not to the card element.
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
    }
    function mouseMoveHandler(e) {
        // Find the difference of x and y coordinates moved by mouse.
        differenceX = e.clientX - startX;
        differenceY = e.clientY - startY;

        // Set the start coordinates to the current mouse position for future coordinates difference calculations.
        startX = e.clientX;
        startY = e.clientY;

        // Move the card to the same distance difference from left and top as the mouse distance difference moved.
        cardElement.style.left = (cardElement.offsetLeft + differenceX) + "px";
        cardElement.style.top = (cardElement.offsetTop + differenceY) + "px";
    }
    function mouseUpHandler() {
        // Change the mouse cursor style to grab when the mouse is release on the card element.
        cardElement.style.cursor = "grab";
        //Remove mousemove event listener once mouse click and hold is released.
        document.removeEventListener("mousemove", mouseMoveHandler);
    }

})();

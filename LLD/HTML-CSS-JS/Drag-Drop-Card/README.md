# Drag and Drop Card:

## Requirements:

### Must have features:
1. Drag and drop card anywhere in the page.

### Good to have features:
- NA

### Approach:
- On "click" on the card:
    - On "mousedown" event:
        - Store the initial X and Y coordinates of the mouse.
        - Assign event listeners "mousemove" and "mouseup" to the "document" object.
    - On "mousemove" event:
        - Find the X and Y coordinates difference of the mouse and move the card to that exact X and Y distance difference.
        - Store the new X and Y coordinates as initial values for the next mousemove event.
    - On "mouseup" event:
        - Remove the "mousemove" event listener so that the card is not dragged on mouse click is released.

### Concepts Used:
- JS - Event Listeners | DOM Manipulations | Mouse Position Properties | Element position offset properties.
- e.clientX - Mouse position from left.
- e.clientY - Mouse position from top.
- element.offsetLeft - Element offset from left.
- element.offsetTop - Element offset from top.

### Solution Links:
- Codepen Link - [codepen](https://codepen.io/dsantoshkumarit/pen/jOjXJjM)

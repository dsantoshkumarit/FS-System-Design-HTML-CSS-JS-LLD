# OTP Input:

## Requirements:

### Must have features:
1. Each of the fields only takes a single-digit number as input.
2. When a number is entered, the focus moves to the next input field.
3. Pressing Backspace or Delete key removes the input of the current field, and the focus moves to the previous field.
4. Eg:
<img src="https://i.postimg.cc/bJvnxB7W/OTP-gif.gif" width="300">

### Good to have features:
- Accept only numbers.

### Approach:
- Single-digit number input is achieved by using the attribute and value : `maxlength="1"` for the input field.
- Event to handle : 
    - "keyup" - When the pressed key is released then we need to check if the key pressed is:
        - "backspace/"delete" - Then remove the current input field value and focus on the previous input field.
    - "input - When the user writes something to the `<input/>` field.
        - "Numeric values" -  Then change the focus to the next input field using "Element.nextElementSibling.focus()". 
        - "Non numeric values" -  Stay on the same input field and dont take non-numeric values.

### Concepts Used:
- JS - Event Listeners | DOM Manipulations 
- Utilised methods like: 
    - isNan(value), 
    - Element.focus(), 
    - Element.nextElementSibling and 
    - Element.previousElementSibling 

### Solution Links:
- Codepen Link - [https://codepen.io/dsantoshkumarit/pen/MWMopQW](https://codepen.io/dsantoshkumarit/pen/MWMopQW)

### Optimization:
- NA
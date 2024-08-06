(function(){
    const inputsContainer = document.getElementById("inputs"); 

    /* 
        - This event listener is triggered when there is an input event on an element within the
        `inputsContainer`. 
        - It first gets the target element that triggered the event. 
        - Then, it checks if the value of the input element is not a number (using `isNaN`). 
        - If the value is not a number, it clears the input field. 
        - If the value is not empty, it focuses on the next sibling element (next input field) using `nextElementSibling`. 
        - This is commonly used in scenarios where you want to move focus to the next input field automatically after the user enters a valid input. 
    */
    inputsContainer.addEventListener("input",(e)=>{
        const inputElem = e.target;
        const val = inputElem.value;
        if(isNaN(val) || val === " "){
            inputElem.value = "";
            return;
        }
        if(val !== "" ){
            inputElem?.nextElementSibling?.focus();
        }
    });

    /*
        The below event listener handles the "backspace" and "delete" key press.
     */
    inputsContainer.addEventListener("keyup",(e)=>{
        const inputElem = e.target;
        if(e.key.toLocaleLowerCase() === "backspace" || e.key.toLocaleLowerCase() === "delete"){
            inputElem.value = "";
            inputElem?.previousElementSibling?.focus();
        }
    });
})();
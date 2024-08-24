# Count Down Timer:

## Requirements:

### Must have features:
1. Start, pause and reset timer.
2. Automatically handle correct time format of hh:mm:ss. 

### Good to have features:
- Accept only numbers.

### Approach:
- On "start" button click - Format the input time with correct values and start the timer by calling a function using setInterval which updates the seconds, minutes and hours.
- On "pause" button click - Stop the timer by calling removeInterval.
- On "reset" button click - Reset the timer by clearing the time to "00:00:00".

### Concepts Used:
- JS - Event Listeners | DOM Manipulations | setInterval

### Solution Links:
- Codepen Link - [codepen](https://codepen.io/dsantoshkumarit/pen/wvLyEGB)

### Concepts:
- `<input oninput="this.value = this.value.slice(0,this.maxLength)" maxlength="2"/>` - This oninput makes sure that the entered value is in "maxlength" value limit provided.
- Logic to format minutes and seconds:
```js
    function formatInputTime(){
        if(+secondsInput.value > 59){
            minutesInput.value = prefixValue(+minutesInput.value + 1);
            secondsInput.value = prefixValue(+secondsInput.value - 59);
        }
        if(+minutesInput.value > 59 ){
            hoursInput.value = prefixValue(+hoursInput.value + 1);
            minutesInput.value = prefixValue(+minutesInput.value - 59);
        }
        hoursInput.value = prefixValue(+hoursInput.value);
        minutesInput.value = prefixValue(+minutesInput.value);
        secondsInput.value = prefixValue(+secondsInput.value);
    }
```
- Logic to update timer:
```js
    function changeTime(){
        if(+hoursInput.value === 0 && +minutesInput.value === 0 && +secondsInput.value === 0){
            resetTimer();
        }
        else if(+secondsInput.value !== 0){
            secondsInput.value = prefixValue(+secondsInput.value-1);
        }
        else if(+minutesInput.value !== 0 && +secondsInput.value === 0){
            secondsInput.value = 59;
            minutesInput.value = prefixValue(+minutesInput.value-1);
        }
        else if(+hoursInput.value !== 0 && +minutesInput.value === 0){
            minutesInput.value = 59;
            secondsInput.value = 59;
            hoursInput.value = prefixValue(+hoursInput.value-1);
        }
    }
```

- Logic to reset timer:
```js
    function resetTimer(){
        hoursInput.value = "";
        minutesInput.value = "";
        secondsInput.value = "";
        clearInterval(countDownTimerId);
        countDownTimerId = null;
        startButton.classList.remove("hide");
        startButton.textContent = "Start";
        pauseButton.classList.add("hide");
        inputsContainer.classList.remove("disableInput");
    }
```

- CSS logic to remove borders and disable arrows in the number type input fiels:
```css
    input{
        outline : none;
        border : none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
```
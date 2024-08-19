(function(){
    const hoursInput = document.querySelector('.hours');
    const minutesInput = document.querySelector('.minutes');
    const secondsInput = document.querySelector('.seconds');
    const startButton = document.querySelector('.start');
    const pauseButton = document.querySelector('.pause');
    const resetButton = document.querySelector('.reset');
    let countDownTimerId = null;

    startButton.addEventListener('click', startTimer);
    pauseButton.addEventListener('click', pauseTimer);
    resetButton.addEventListener('click', resetTimer);

    function prefixValue(value){
        return value < 10 ? "0" + value : value;
    }

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

    function startTimer(){
        formatInputTime();
        if(+hoursInput.value === 0 && +minutesInput.value === 0 && +secondsInput.value === 0){
            return;
        }
        startButton.classList.add("hide");
        pauseButton.classList.remove("hide");
        countDownTimerId = setInterval(changeTime, 1000);
    }
    
    function pauseTimer(){
        clearInterval(countDownTimerId);
        startButton.classList.remove("hide");
        startButton.textContent = "Continue";
        pauseButton.classList.add("hide");
    }

    function resetTimer(){
        hoursInput.value = "";
        minutesInput.value = "";
        secondsInput.value = "";
        clearInterval(countDownTimerId);
        countDownTimerId = null;
        startButton.classList.remove("hide");
        startButton.textContent = "Start";
        pauseButton.classList.add("hide");
    }
})()
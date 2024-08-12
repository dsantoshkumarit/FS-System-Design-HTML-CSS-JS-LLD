(function(){
    const countDownTimerContainer = document.querySelector(".clicks-count-timer-container");
    const timerDurationSelectors = document.querySelectorAll(".clicks-count-time");
    const clickArea = document.querySelector(".clicking-area");
    const clicksSection = document.querySelector("#clicks");
    const timeSection = document.querySelector("#time");
    const clickAreaChild = `<p class = "title">Click anywhere to begin</p>`;
    let selectedTimer = 5;
    let timerDuration = 5;
    let clicksCount = 0;
    let timerId = null;

    function handleTryAgain(event,time){
        init(time);
        event.stopImmediatePropagation();
    };


    const getResultSection = (cps) => {
        return `<section class = "result-section">
            <h3>YOUR SPEED</h3>
            <p class="description-lg orange">${cps}</p>
            <p class="description-sm">clicks per second</p>
            <button class="primary-btn" >TRY AGAIN</button>
        </section>`;
    }

    
    const init = (time = 5) => {
        clickArea.innerHTML = clickAreaChild;
        timerDuration = time;
        selectedTimer = time;
        clicksCount = 0;
        clicksSection.textContent = clicksCount;
        timeSection.textContent = timerDuration + "s";
        clearInterval(timerId);
        timerId = null;
        clickArea.addEventListener("mousedown", clickAreaHandler);
    }

    function setSelectedTimerColor(duration){
        timerDurationSelectors.forEach(selector => {
            if(parseInt(selector.getAttribute("data-timer-seconds")) === duration){
                selector.classList.add("active");
            }
            else{
                selector.classList.remove("active");
            }
            init(duration);
        });
    };

    countDownTimerContainer.addEventListener("click", (e)=>{
        const targetElem = e.target;
        if(targetElem !== e.currentTarget) 
        {
            timerDuration = +targetElem.getAttribute("data-timer-seconds");
            setSelectedTimerColor(timerDuration);
        }
    });

    function updateTimer(){
        if(timerDuration === 0 && timerId){
            clearInterval(timerId);
            clickArea.style.backgroundColor = "var(--gray-color-light)";
            clickArea.removeEventListener('mousedown',clickAreaHandler);
            clickArea.innerHTML = getResultSection((clicksCount/selectedTimer).toFixed(1));
            document.querySelector(".primary-btn").addEventListener('click', (event) => {
                handleTryAgain(event, selectedTimer);
            });
        }
        else if(timerDuration > 0){
            --timerDuration;
            timeSection.textContent = timerDuration + "s";
        }
    }

    function clickAreaHandler(e){
        e.target.textContent = "";
        if(clicksCount === 0){
            timerId = setInterval(updateTimer,1000);
        }
        e.target.style.background = "var(--green-color)";
        ++clicksCount;
        clicksSection.textContent = clicksCount;
    }

    function resetClickAreaBackground(e){
        e.target.style.backgroundColor = "var(--gray-color-light)";
    }

    clickArea.addEventListener("mousedown", clickAreaHandler);
    clickArea.addEventListener("mouseup", resetClickAreaBackground);
})();

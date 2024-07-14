function main(intervalTime, endTime, message, arr) {
    function mySetInterval(callback, time) {
        let interval = {
            working: true
        };

        function setter() {
            callback();
            if (interval.working) setTimeout(setter, time);
        }
        setTimeout(setter, time);
        return interval
    }

    setTimeout(function () {
        i.working = false;
    }, endTime)

    let i = mySetInterval(function () {
        arr.push(message);
    }, intervalTime);

}

function main(intervalTime, endTime, message, arr) {
    let isEndTime = false;
    function mySetInterval(callback, time) {
        if(!isEndTime){
            setTimeout(function(){
                callback();
                mySetInterval(callback, time);
            }, time);
        }
    }

    let i = mySetInterval(function () {
        arr.push(message);
        console.log(arr);
        // [ 'hello' ] 
        // [ 'hello', 'hello' ] 
        // [ 'hello', 'hello', 'hello' ] 
        // [ 'hello', 'hello', 'hello', 'hello' ] 
        // [ 'hello', 'hello', 'hello', 'hello', 'hello' ]
    }, intervalTime);
    setTimeout(()=>{
        isEndTime = true;
    },endTime);
}

let arr = [];

main(1000, 5000, "hello", arr);


// function main(intervalTime, endTime, message, arr) {
//     function mySetInterval(callback, time) {
//         let interval = {
//             working: true
//         };

//         function setter() {
//             callback();
//             if (interval.working) setTimeout(setter, time);
//         }
//         setTimeout(setter, time);
//         return interval
//     }

//     setTimeout(function () {
//         i.working = false;
//     }, endTime)

//     let i = mySetInterval(function () {
//         arr.push(message);
//     }, intervalTime);

// }
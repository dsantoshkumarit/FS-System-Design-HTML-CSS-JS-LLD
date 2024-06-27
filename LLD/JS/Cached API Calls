// Links -
// My Codepen - https://codepen.io/dsantoshkumarit/pen/mdYaavo
// Article Link - https://learnersbucket.com/examples/interview/cached-api-call-with-expiry-time/
// Youtube Link  - https://www.youtube.com/watch?v=3jrfDk9k8rY&t=181s

const cachedAPICall = (timeoutMilliSeconds) => {
    const cache = {};
    return async (url, config = {}) => {
        const key = `${url}${JSON.stringify(config)}`;
        const entry = cache[key];
        if (!entry || entry.expiryTime < Date.now()) {
        try {
            console.log("New API call");
            const response = await fetch(url, config);
            const data = await response.json();
            cache[key] = {
            ...data,
            expiryTime: Date.now() + timeoutMilliSeconds,
            };
        } catch (error) {
            console.log("Error in API call:", error);
        }
        }
        return cache[key];
    };
};

const call = cachedAPICall(1500);

// For the first call and API call is made and its response is stored in the cache.
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("1st call====>", a)
);
/*
    Output:
    "New API call"
    "1st call====>" // [object Object] 
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "expiryTime": 1719502532678
}
*/

// This time the cached api response is returned and it will be quick
setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
        console.log("2nd call========>", a)
    );
}, 800);
/*
    Output:
    "2nd call========>" // [object Object] 
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "expiryTime": 1719502532678
    }
}
*/

// In this case a new API call will be made as the cached expiry time is exceeded
setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
        console.log("3rd call========>", a)
    );
}, 1900);
/*
    Output:
    "New API call"
    "3rd call========>" // [object Object] 
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        "expiryTime": 1719502534409
    }
*/
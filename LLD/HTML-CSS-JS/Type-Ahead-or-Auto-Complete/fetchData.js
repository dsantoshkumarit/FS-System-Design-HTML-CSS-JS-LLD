const cache = new Map();
const cacheExpiry = 5*60*1000;

const countriesApiUrl = (name)=>`https://restcountries.com/v3.1/name/${name}`;

async function fetchCountries(inputValue){
    if(cache.has(inputValue)){
        const cachedData = cache.get(inputValue);
        const currentTimestamp = Date.now();
        if(cachedData.expiryTime > currentTimestamp ){
            return cachedData.data;
        }
        cache.delete(inputValue);
    }
    try{
        const response = await fetch(countriesApiUrl(inputValue));
        const countries = await response.json();
        if(response.ok){
            cache.set(inputValue, {
                data : countries, 
                expiryTime : Date.now() + cacheExpiry
            });
            return countries;
        }
        else{
            return [];
        }
    }
    catch(e){
        console.log("Error",e);
        return [];
    }
}

export default fetchCountries;
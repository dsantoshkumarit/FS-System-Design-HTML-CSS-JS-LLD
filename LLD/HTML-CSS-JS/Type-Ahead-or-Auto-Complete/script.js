import fetchCountries from "./fetchData.js";
(function(){
    const inputElement = document.getElementById('search-country-input');
    const suggestionsListContainer = document.getElementById('suggestions-list-container');
    const errorLabel = document.getElementById('error-label');
    inputElement.addEventListener('input',debounce(handleInput,500));
    suggestionsListContainer.addEventListener('click', handleSuggestionClick);

    function populateCountriesNames(inputString, countries=[]){
        const countriesList = countries?.filter(country=>country?.name?.common?.toLowerCase().includes(inputString?.toLowerCase())) || [];
        const countryNames = countriesList?.map(country => country?.name?.common) || [];
        if(countriesList?.length){
            const listFragment = document.createDocumentFragment();
            suggestionsListContainer.classList.remove('hide');
            errorLabel.classList.add('hide');
            countryNames.forEach(name=>{
                const listElement = document.createElement('li');
                listElement.classList.add("suggestions-list-item");
                const inputStringNameSplit = name.split(new RegExp(`(${inputString})`,"gi"));
                listElement.innerHTML = inputStringNameSplit?.map(subName =>{
                    if(subName.toLowerCase() === inputString.toLowerCase()) {
                        return `<b style="color:#f77f00;">${subName}</b>`;
                    }
                    else{
                        return subName;
                    }
                }).join("");
                listFragment.appendChild(listElement);
            });
            suggestionsListContainer.replaceChildren(listFragment);
        }
        else{
            suggestionsListContainer.classList.add('hide');
            errorLabel.classList.remove('hide');
            return;
        }
    }

    async function handleInput(e){
        const inputValue = e.target.value;
        if(inputValue?.length > 2){
            const countries = await fetchCountries(inputValue);
            if(countries.length){
                populateCountriesNames(inputValue, countries);
            }
            else{
                suggestionsListContainer.classList.add('hide');
                errorLabel.classList.remove('hide');
            }
        }
        else{
            suggestionsListContainer.classList.add('hide');
            errorLabel.classList.add('hide');
        }
    }


    function handleSuggestionClick(e){
        if(e.target.tagName.toLowerCase() === "li"){
            inputElement.value = e.target.textContent;
            inputElement.focus();
            suggestionsListContainer.classList.add('hide');
        }
    }

    function debounce(cb, delay){
        let timeoutId = null;
        return (...args)=>{
            if(timeoutId){
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(()=>{
                cb(...args);
                timeoutId=null;
            }, delay);
        };
    }
})();
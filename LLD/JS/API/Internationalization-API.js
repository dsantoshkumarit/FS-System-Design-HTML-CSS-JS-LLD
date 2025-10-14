/* 
    => The Intl(Internalization) API in browsers and Node.js provide a lot of useful for working with language specific displays, such as the "compact" notatiion such as 10K, 5M, etc.
    => Useful for things like dashboards and social media profile pages.
*/

function getCompact(number){
    const formatter = new Intl.NumberFormat('en',{notation: 'compact'});
    return formatter.format(number);
}

// Example:
console.log(getCompact(142303)); //> 142K
console.log(getCompact(5000000)); //> 5M
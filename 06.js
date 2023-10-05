let regEx = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm;

let url = 'https://www.linkedin.com/feed/'

function isValidUrl(input){
    return regEx.test(input)

}

if(isValidUrl(url)){
    console.log(`${url} is valid Linkedln`)
}
else{
    console.log(`${url} is valid Linkedln`)

}
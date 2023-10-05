const url = "https://pwskills.com/"

let re = /hTTp/i;


function isValidUrl(url){
    return re.test(url); 
}

if(isValidUrl(url)){
    console.log(`${url} is Valid url`)
}
else{
    console.log(`${url} is not a valid URL`)
}
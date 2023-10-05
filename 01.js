

let str= "I'm passionate to learn Javascript"

function reverseString(str){
    return str.split("").reverse().join("")

}

function getNameDelay(){str
    setTimeout(function(){
        let reversed = reverseString(str)
        console.log("Reversed String:"+ reversed)
    },3000)
}



getNameDelay(str)


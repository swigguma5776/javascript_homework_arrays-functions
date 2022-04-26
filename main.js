//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

function findWords(str, arr){
    for(let i in arr){
        return (str.search(arr[i]) > 0 ) ? "Matched dog_name" : "No Matches"
    }
}

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

console.log(findWords(dog_string, dog_names))


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens (array){
    for(let i = 0; i < array.length; i++){
        if (i % 2 == 0)
        array.splice(i,1,"even index")
    }
    return array
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//======== Code Wars Problem =========//
/* Return the Nth Even Number */

function nthEven(num){
    return (num * 2) - 2
}

console.log(nthEven(100))


//======== Code Wars Problem =========//
/* Welcome. In this kata, you are asked to square every digit 
of a number and concatenate them. For example, if we run 9119 
through the function, 811181 will come out, because 92 is 81 and 12 is 1. 
Note: The function accepts an integer and returns an integer */

function squareDigits (num){
    let newNum = num.toString()
    let numList = []
    for (let i in newNum){
        numList.push(newNum[i]**2)
    }
    return parseFloat(numList.join(''))
}

console.log(squareDigits(9119))
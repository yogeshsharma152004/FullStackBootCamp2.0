// Q1 :- Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.//


let myname  = "yogesh sharma";
let bool= false;
let und = undefined;
let nul = null;


//Output :-

//if we only declare a variable and do not intialized it then it will automatically have the undefined data type. But this can't be done with const keyword, for that declaration must start from let or var keyword.


console.log("the data type of " , myname , " is " , typeof myname );
console.log("the data type of " , bool ,  " is " , typeof bool );


// null has a data type object which is kind of a bug. But this bug is still not removed in JavaScript due to legacy reasons.

console.log("the data type of " , und , " is "  , typeof und );
console.log("the data type of " , nul ,  " is " , typeof nul );
//Andrii Zabeida Lv-736.JS Core

//task1
let x = 1;
let y = 2;

let res1 = String(x)+String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x)+String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = y > x;
console.log(res3);  //true
console.log(typeof res3); //boolean

let res4 = x * y *  "a";
console.log(res4); //NaN
console.log(typeof res4); // "number"



//task2
let number = prompt("Enter any number:", "");

if(number % 2 === 0 && number > 0 && number % 7 === 0){
    console.log("Number is positive and multiple of 2 and 7");
}
else if(number % 2 === 0 && number > 0){
    console.log("Number is positive and a multiple of 2");
}
else if(number % 7 === 0) {
    console.log("Number is multiple of 7");
} 
else{
    console.log("Try another number");
}



//task3
const array3 = [];
array3[0] = 10;
array3[1] = "somestring";
array3[2] = true;
array3[3] = null;
alert(`array legth = ${array3.length}`);
array3[4] = prompt("Enter a new element of array","any value");
alert(array3[4]);
array3.shift();
alert(array3);



//task4
let cities = ["Rome", "Lviv", "Warsaw"];
let str = cities.join("*");
console.log(str);


//task5
let isAdult = prompt("Are you adult?","yes/no");
if (isAdult=="yes"){
    alert("Congratulations, you are adult!")
}
else if(isAdult=="no"){
    alert("You are too young");
}
else{
    alert("Wrong input data, enter only yes or no")
}



//task6
let a = Number(prompt("Enter a side of triangle:",""));
let b = Number(prompt("Enter b side of triangle:",""));
let c = Number(prompt("Enter c side of triangle:",""));4
let p = (a+b+c)/2;
let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));

if(isNaN(S)|| S == 0){
    alert("'Incorrect data or such a triangle does not exist");
}
else{
    console.log(`S = ${S.toFixed(3)}`);
}

if(a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2){
    console.log("triangle IS a right triangle");
}
else{
    console.log("triangle IS NOT a right triangle");
}




//task7
let current = new Date();
let time = current.getHours();

switch(time){
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4: 
        alert("Good Night!");
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        alert("Good Morning!");
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        alert("Good Afternoon");
        break;
    case 17:
    case 18:
    case 19: 
    case 20:
    case 21:
    case 22:
        alert("Good Evening!");
        break
    default:
    alert( "I don't know what time is it" );
}

//task7.2
if(time < 5 || time == 23){
    alert("Good Night!");
}
else if(time >= 5 && time < 11){
    alert("Good Morning!");
}
else if (time >= 11 && time < 17){
    alert("Good Afternoon");
 }
else{
    alert("Good Evening!");
}
                                              


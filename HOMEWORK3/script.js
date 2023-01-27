
//task1
let array = [2, 3 , 4, 5];
let x = 1;
for(i = 0; i < array.length; i++){
    x = x * array[i];
}
console.log(x);

//task1.2
let array2 = [2, 3 , 4, 5];
let i = 0;
let y = 1;
while(i < array2.length){
    y = y * array2[i];
    i++;
}
console.log(y);



//task2
let number;
for( number = 0; number <= 15; number++){
    if(number % 2 == 0){
        console.log(`${number} is even`)
    }
    else{
        console.log(`${number} is odd`)
    }
}


//task3
function randArray(k){
    let newArray= [];
    newArray.length = k;
    for (i= 0; i<k ;i++){
        newArray[i] = Math.floor(Math.random() * 501)+1;
    }
    return newArray;
}
randArray(5);


//task 4 
function raiseToDegree(a,b){
    x = a**b;
    return x;
}
raiseToDegree(2,3);



 //task5
 function findMin() {
    let minArgument = Math.min(...arguments);
    return minArgument;
 }
 findMin(10,20,30,5,11);


//task6
function findUnique(arr){
    for(i=0;i<arr.length;i++){
    if(arr.length === new Set(arr).size){
        return true
    }
    else{
        return false
    }
    }
}
findUnique([5,15,20]);


//task7
function returnLastElements(arr, a=1){
    if(arr.length-a < 0){
        return arr;
    }
    else{
    for(i=0; i=arr.length-a; i++){
        arr.shift();
    }
    return arr;
}
}
returnLastElements([5,10,15,10], 2);


//task8
function firstLetterToUppercase(string){
    let arr = string.split(" ");
    for(i=0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newString = arr.join(" ");
    return newString;
}
firstLetterToUppercase("'i love java script");

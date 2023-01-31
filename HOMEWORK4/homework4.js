//task1
function calcRectangleArea(width, height){
    width = prompt("Enter width");
    height = prompt("Enter height");
    if (width > 0 && height > 0){
    let rectangleArea = width*height;
    return rectangleArea;
    }
    else {
        throw new Error ("Wrong data");
    }
}

try {
    let result = calcRectangleArea();
    console.log(result);
} catch(exception){
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
}



//task2
function chekAge(){
    let age = Number(prompt("Enter your age"));
    if(age === 0){
        throw new Error("The field is empty! Please enter your age");
    }
    else if (isNaN(age)){
        throw new Error("Age must be a number!");
    }
    else if(age < 14){
        throw new Error("YOur age must be at least 14");
    }
    console.log(age);
}

try {
    let result2 = chekAge();
    console.log(result2);
} catch(exception){
    console.log(exception.name);
    console.log(exception.stack);
    alert(exception.message);
}


//task3
class MonthException{
    constructor(message){
    this.message = message;
}
    name = "MonthException";
}

function showMonthName(month){
    let monthNames=['January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];
    let i = month - 1;
    if(i > 15 || i < 0 || isNaN(i) || month === undefined){
        throw new MonthException("Incorrect month number");      
    }
        return monthNames[i];
}
console.log(showMonthName(0)); 

// try {
//     let result = showMonthName();
//     console.log(result);
// } catch(exception){
//     console.log(exception.name);
//     console.log(exception.stack);
//     console.log(exception.message);
// }



//task4
function showUser(id){
    if(id < 0){
        throw new Error("Id cannot be negative!");
    }
    const user ={
        userID: id
    }
    array.push(user);
    return user;
}

function showUsers(ids){
    let array = [];
    for(i=0; i < ids.length; i++){
        if(ids[i] < 0){
            throw new Error("Id cannot be negative!");
        }
        const user ={
            userID: ids[i]
        }
        array.push(user);
    }
    return array;
}

showUsers([54,10,10,20]);

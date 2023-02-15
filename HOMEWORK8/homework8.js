//task1
function upperCase(str){
    let regexp = /[A-Z]/
    let result = regexp.test(str);
    if(result){
        console.log("String starts with uppercase character");
    }
    else{
        console.log("String not starts with uppercase character ");
    }
}
upperCase('regexp');
upperCase('Regexp');



//Task2
function checkMail(email){
    let regex = /[a-z0-9]+@[a-z]+\.[a-z]/;
    let result = regex.test(email);
    return result;
}
checkMail("Qmail2@gmail.com");



//task3
function findDB(string){
    let regex = /db{1,}d/gi;
    let result = regex.exec(string);
            // let regex2 = /b/gi;
            // let result2 = regex2.exec(result);
    return result;
}
findDB("cdbBdbsbz");



//Task4
function swap(string){
    let regex = /(\w+)\s(\w+)/;
    let result = string.replace(regex, '$2 $1');
    return result;
}
swap("Java Script");



//Task5
function checkCard(string){
    let regex = /\d{4}-\d{4}-\d{4}-\d{4}/;
    let result = regex.test(string);
    return result;
}
checkCard("9999-9999-9999-9999");


//Task6
function checkEmail(email){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let result = regex.test(email);
    if(result){
        console.log("Email is correct!");
    }
    else{
        console.log("Email is not correct!");
    }
}
checkEmail("my_mail@gmail.com");
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');


//Task7
function checkLogin(login){
    let regex = /^(?=[A-Za-z0-9]{2,10}$)(?![\d])/;
    
    let regexNumbers = /-?\d+(\.\d+)?/g;
    let numbersInLogin = login.match(regexNumbers);
    console.log(numbersInLogin); 

    let result = regex.test(login);
    return result;
}
checkLogin("dfd99fd");

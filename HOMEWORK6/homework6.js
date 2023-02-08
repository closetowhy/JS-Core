
//task1
document.getElementById("test").innerHTML = "Last";

let mydiv = document.getElementById("test");
mydiv.replaceWith("Last Last");


//task2
let image = document.querySelector(".image");
image.src = "cat.jpg";
alert(image.getAttribute('src'));

//task3
let elements = document.querySelectorAll("div > p");

for (let i = 0; i < elements.length; i++) {
    console.log(`Selector text ${i} : ${elements[i].innerHTML}`);
}

//task4
alert(document.querySelector("#list :nth-child(1)").innerHTML);
alert(document.querySelector("#list :nth-child(5)").innerHTML);
alert(document.querySelector("#list :nth-child(2)").innerHTML);
alert(document.querySelector("#list :nth-child(4)").innerHTML);
alert(document.querySelector("#list :nth-child(3)").innerHTML);

const ul = document.querySelectorAll('ul li');
alert(ul[0].innerHTML);
alert(ul[4].innerHTML);
alert(ul[1].innerHTML);
alert(ul[3].innerHTML);
alert(ul[2].innerHTML);


//task5
document.querySelector("h1").style.backgroundColor = "yellowgreen";

let p1 = document.getElementById("myDiv").firstElementChild;
p1.style.fontWeight = "bold";

let p2 = document.querySelector("#myDiv :nth-child(2)");
p2.style.color = "red";

let p3 = document.querySelector("#myDiv :nth-child(3)");
p3.style.textDecoration = "underline";

let p4 = document.getElementById("myDiv").lastElementChild;
p4.style.fontStyle = "italic";

let li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
    li[i].style.display = 'inline';
}

document.querySelector("span").innerHTML = " ";



//task6
let input1 = document.getElementById("input1");
input1.value = prompt("Enter first input value");

let input2 = document.getElementById("input2");
input2.value = prompt("Enter second input value");

let x;
x = input1.value;
input1.value = input2.value;
input2.value = x;



//task7
let body = document.body;
let main = document.createElement("main");
body.append(main);
main.className = "mainClass check item";

let div = document.createElement("div");
main.append(div);
div.id = "myDiv";

let p = document.createElement("p");
div.append(p);
p.innerHTML = "First paragraph;"



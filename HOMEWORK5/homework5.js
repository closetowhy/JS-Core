
//task1 
function propsCount(currentObject){
    let i = 0;
    for(properties in currentObject){
        i = i + 1;
    }
    return i;
}
const employee ={
  firstname: "Peter",
  secondname: "Peterson"
}
propsCount(employee);


//task2
const student = {
  firstName: "Peter",
  secondName:"Peterson",
  age: 22,
  height: 180,
  weight: 70,
}

function showProps(obj){
  let arrayOfProperties = [];
  let arrayOfValues = [];
  let i=0;
  for(properties in obj){
    arrayOfProperties[i] = Object.keys(obj);
    arrayOfValues[i] = Object.values(obj);
  }
  return [arrayOfProperties, arrayOfValues];
}
showProps(student);



//task3
class Person{
  constructor(name,surname){
    this.name = name;
    this.surname = surname;
  }
  showFullName(){
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Person{
    constructor(name,surname, year){
    super(name,surname);
    this.year = year;
  }
    showFullName(midleName) {
      this.midleName = midleName;
      console.log(this.name + ' ' + this.midleName + ' ' + this.surname);
    }

    showCourse(){
      this.currentYear = new Date().getFullYear();
      this.course = this.currentYear - this.year;
      if(this.course <=6){
      console.log(`this person is student of ${this.course} course`);
    }
      else{
      console.log("This person is not a student anymore")
    }
    }
  }
const stud1 = new Student("Petro", "Petrenko", 2020);
console.log(stud1.showFullName("Petrovych")); 
console.log(stud1.showCourse()); 




//task4
class Worker {
  constructor(fullName, dayRate, workingDays){
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  #experience = 1.2;

  get setExp() {
    return this.#experience;
  }

  set setExp(value){
    if(value > 0){
    this.#experience = value;
    }
    else{
      throw new Error("experience cannot be nagative")
    }
  }

  showSalary(){
    this.salary = this.dayRate * this.workingDays;
    return this.salary;
  }

  showSalaryWithExperience(){
    this.salaryWithExperience = this.showSalary() * this.#experience;
    return this.salaryWithExperience;
  }
}

const worker1 = new Worker("Andrii", 20, 23);
console.log(worker1.fullName + " experience: " + worker1.setExp);
console.log(worker1.fullName + " salary: " + worker1.showSalaryWithExperience());
worker1.setExp = 1.8;
console.log(worker1.fullName + " New experience:" + worker1.setExp);
console.log(worker1.fullName + " New salary:" + worker1.showSalaryWithExperience());

const worker2 = new Worker("Bohdan", 48, 22);
const worker3 = new Worker("Ihor", 29, 23);
worker2.setExp = 1.5;
worker3.setExp = 1.1;


function sortBySalary(workers){
  workers.sort(function(a,b){
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
  });
  console.log("Workers sorted by salary:")
   for(let i = 0; i < workers.length; i++){
    console.log(workers[i].fullName + " salary: "+ workers[i].showSalaryWithExperience());
   }
}

let workers = [worker1, worker2, worker3]
sortBySalary(workers);



//task5
class GeometricFigure{
  getArea(){
    return 0;
  }

  toString(){
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure{
  constructor(a,b){
    super();
    this.a = a;
    this.b = b;
    this.c = Math.sqrt(a**2 + b**2);
  }
  getArea(){
     this.p = (this.a + this.b + this.c)/2;
     this.area = Math.sqrt(this.p*(this.p-this.a)*(this.p-this.b)*(this.p-this.c));
     return this.area;
  }
}

class Square extends GeometricFigure{
  constructor(a){
    super();
    this.a = a;
  }
  getArea(){
    this.area = this.a ** 2;
    return this.area;
  }
}

class Circle extends GeometricFigure{
  constructor(r){
    super();
    this.r = r;
  }
  getArea(){
    this.area = Math.PI * this.r**2; 
    return this.area;
  }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(figures) {
  let sumOfAreas = 0;
  for (let i = 0; i < figures.length; i++) {
    console.log(GeometricFigure.name + ": " + figures[i] + " - area: " + figures[i].getArea());
    sumOfAreas += figures[i].getArea();
  }
  console.log(sumOfAreas);
}

handleFigures(figures);

//Task1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // "Bob"




//Task2
const data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};

let { names: [ , name2, , name4 ], 
      ages:  [ , age2, , age4 ]
      } = data;

console.log(name2); //"Tom"
console.log(age2);  // 24
console.log(name4); //"Bob"
console.log(age4);  // 26




//Task3
function mul(...numbers) {
   let sum = 0;
   for (i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === 'number') {
         sum += numbers[i];
      }
      else {
         continue;
      }
   }
   return sum;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0



//Task4
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return `${this.data}`;
    });
  }
};

let client = {
  server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    }
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"





 //Task5
const mapBuilder = (keysArray, valuesArrays) => {
   const map = new Map();
   for(let i = 0; i < keysArray.length; i++){
      map.set(keysArray[i], valuesArrays[i]);
   };
   return map;
};

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"





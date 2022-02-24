class Car{
   constructor(name, year){
       this.name = name;
       this.year = year;
   } 
   age(x){
       return x - this.year;
   }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Subaru", 2020)
console.log(`My car is ${myCar.age(year)} years old`);
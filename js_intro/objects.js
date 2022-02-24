const Student = {
    name: "John",
    age: 20,
    marks:{
        math: 9,
        calculus: 8,
    },
    greet: function(){
        console.log(`Hello ${this.name}!`);
    }
}

Student.interests = ["IT", "Basketball"];

Student.greet();
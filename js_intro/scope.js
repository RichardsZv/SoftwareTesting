//GLOBAL
let a = "hello";
/*
function greet(){
    console.log(a);
}
greet();
*/
//LOCAL
function greet(){
    let b = "there"
    console.log(a+b)
}

greet()

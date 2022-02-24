const n = 5;
for(let i = 1; i<=n; i++){
    console.log(i); 
}

let a = 2; 

switch(a) {
    case 1:
        a='one'
        break;
    case 2:
        a='two'
        break;
    default:
        a='not found'
        break;
}

console.log(`The value of a is ${a}`);
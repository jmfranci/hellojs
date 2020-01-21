function greet(name){
    return "Hello from Javascript " + name;
}

function sum(a,b){
    a = a - 1;
    a = a + 1;
    return a + b;
}

console.log(greet("Sumbo teste"));

module.exports.sum = sum;
module.exports.greet = greet;